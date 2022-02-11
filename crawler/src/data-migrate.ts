import { PoolClient } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import pool from './dbconfig';
const cliProgress = require('cli-progress');
import { decode } from 'html-entities';

const expand = (rowCount: number, columnCount: number, startAt = 1) => {
  var index = startAt;
  return Array(rowCount)
    .fill(0)
    .map(
      (v) =>
        `(${Array(columnCount)
          .fill(0)
          .map((v) => `$${index++}`)
          .join(', ')})`,
    )
    .join(', ');
};

type Country = {
  id: string;
  name: string;
  code: string;
};

const createCountries = async (client: PoolClient): Promise<Country[]> => {
  const { rows } = await client.query(`SELECT DISTINCT country FROM "RawData" ORDER BY country ASC`);
  const newCountries = rows.map((c: { country: string }) => [
    uuidv4(),
    c.country === 'DE' ? 'Deutschland' : c.country === 'AT' ? 'Österreich' : c.country === 'CH' ? 'Schweiz' : 'Unknown',
    c.country || 'XX',
  ]);
  const { rows: countries } = await pool.query(
    `INSERT INTO "Country" (id, name, code) VALUES ${expand(newCountries.length, 3)} RETURNING *`,
    newCountries.flat(),
  );
  return countries;
};

type City = {
  id: string;
  name: string;
  countryId: string;
};

const createCities = async (client: PoolClient, countries: Country[]): Promise<City[]> => {
  const { rows } = await client.query(`SELECT DISTINCT city, country FROM "RawData" ORDER BY city ASC`);
  const newCities = rows.map((c: { city: string; country: string }) => [
    uuidv4(),
    c.city || 'Unknown',
    countries.find((country) => country.code === (c.country || 'XX'))?.id,
  ]);
  const { rows: cities } = await pool.query(
    `INSERT INTO "City" (id, name, "countryId") VALUES ${expand(newCities.length, 3)} RETURNING *`,
    newCities.flat(),
  );
  return cities;
};

type Party = {
  id: string;
  name: string;
  date: Date;
  cityId: string;
};

const createParties = async (client: PoolClient, cities: (City & { country: Country })[]): Promise<Party[]> => {
  const { rows } = await client.query(
    `SELECT DISTINCT party, partydate, city, country FROM "RawData" ORDER BY party ASC`,
  );
  const newParties = rows.map((p: { party: string; partydate: string; country: string; city: string }) => [
    uuidv4(),
    decode(p.party || 'Unknown'),
    p.partydate || '',
    cities.find((city) => city.country.code === (p.country || 'XX') && city.name === (p.city || 'Unknown'))?.id,
  ]);
  const { rows: parties } = await pool.query(
    `INSERT INTO "Party" (id, name, date, "cityId") VALUES ${expand(newParties.length, 4)} RETURNING *`,
    newParties.flat(),
  );
  return parties;
};

const createImages = async (
  client: PoolClient,
  page: number,
  perPage: number,
  parties: (Party & { city: City & { country: Country } })[],
) => {
  const { rows, rowCount } = await client.query(
    `SELECT id, party, partydate, city, country, url FROM "RawData" ORDER BY id ASC OFFSET ${
      (page - 1) * perPage
    } LIMIT ${perPage}`,
  );

  // console.log('\n');
  // console.log(rows[0].partydate.toLocaleDateString());
  // console.log('\n');
  // console.log(parties[0].date.toLocaleDateString());
  // console.log('\n');

  // process.exit(1);

  const newImages = rows.map(
    (image: { id: number; party: string; partydate: Date; country: string; city: string; url: string }) => {
      return [
        uuidv4(),
        image.url,
        parties.find(
          (party) =>
            party.city.country.code === (image.country || 'XX') &&
            party.city.name === (image.city || 'Unknown') &&
            party.name === decode(image.party || 'Unknown') &&
            party.date.toLocaleDateString() === image.partydate.toLocaleDateString(),
        )?.id,
        image.url.replace('http://www.binpartygeil.de/bilder/', '/images/'),
        image.id,
      ];
    },
  );
  const { rows: images } = await pool.query(
    `INSERT INTO "Image" (id, url, "partyId", "filePath", "rawDataId") VALUES ${expand(
      newImages.length,
      5,
    )} RETURNING *`,
    newImages.flat(),
  );
  if (images.length !== rowCount) {
    throw new Error(`Expected ${rowCount} images but got ${images.length}`);
  }
};

const main = async () => {
  const client = await pool.connect();

  await client.query('TRUNCATE TABLE "Country" CASCADE');
  await client.query('TRUNCATE TABLE "City" CASCADE');
  await client.query('TRUNCATE TABLE "Party" CASCADE');
  await client.query('TRUNCATE TABLE "Image" CASCADE');

  const countries = await createCountries(client);
  const cities = await createCities(client, countries);
  const newCities = cities.map((c) => ({
    ...c,
    country: countries.find((country) => country.id === c.countryId) || countries[0],
  }));
  const parties = await createParties(client, newCities);
  const newParties = parties.map((p) => ({
    ...p,
    city: newCities.find((city) => city.id === p.cityId) || newCities[0],
  }));

  const perPage = 10000;
  const totalImages = (await client.query('SELECT COUNT(id) FROM "RawData"')).rows[0].count;
  const totalPages = Math.ceil(totalImages / perPage);

  console.log('Total images:', totalImages);
  console.log('Total pages:', totalPages);

  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(totalPages, 0);

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    await createImages(client, currentPage, perPage, newParties);
    bar.increment();
  }

  client.release();
  process.exit(0);
};

main();
