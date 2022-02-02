import axios from 'axios';
import { PoolClient } from 'pg';
import config from './config';
import pool from './dbconfig';

const { imagePreviewUrl } = config;

if (!process.env.FIRST_ID || !process.env.LAST_ID) process.exit(1);

const firstId = parseInt(process.env.FIRST_ID, 10);
const lastId = parseInt(process.env.LAST_ID, 10);

console.log('Will fetch from id', firstId, 'to id', lastId);

const regex = new RegExp(
  /<title>BinPartyGeil\.de Party-Foto\/Bild-Nr\. (?<id>\d{1,10}): (?<party>.*) am (?<partydate>\d{2}\.\d{2}\.\d{4}) in (?<country>[A-Z]*?)-(?<city>.*?)<\/title>.*?<meta property="og:image" content="(?<url>.*?)"/gs,
);
export type ImageType = {
  id: string;
  party: string;
  partydate: string;
  country: string;
  city: string;
  url: string;
};

// dd.mm.yyyy to isoString
const toDate = (partydate: string) => {
  const [day, month, year] = partydate.split('.');
  return new Date(`${year}-${month}-${day}`).toISOString();
};

const main = async () => {
  const client = await pool.connect();

  // iterate over all images
  for (let imageId = firstId; imageId <= lastId; ) {
    try {
      // fetch html from url
      const { data: dataBuffer } = await axios.get(imagePreviewUrl + imageId, { responseType: 'arraybuffer' });

      // get infos from data with regex
      const data = dataBuffer.toString('latin1');
      if (data.match(regex)) {
        const result = regex.exec(data);
        if (!result?.groups) return;
        const { id, party, partydate, country, city, url }: ImageType = {
          id: result.groups.id,
          party: result.groups.party,
          partydate: toDate(result.groups.partydate),
          country: result.groups.country,
          city: result.groups.city,
          url: result.groups.url,
        };

        try {
          const sql = `INSERT INTO images(id, party, partydate, country, city, url) VALUES (${id}, '${party}', '${partydate}', '${country}', '${city}', '${url}') ON CONFLICT DO NOTHING`;
          await client.query(sql);
          console.log('Stored image:', id);
          imageId++;
        } catch (error) {
          console.log('Failed to store image:', id);
        }
      } else {
        console.log('Image does not exist:', imageId);
        imageId++;
      }
    } catch (error) {
      console.log('Failed to fetch image:', imageId);
    }
  }

  client.release();
  process.exit(0);
};

main();
