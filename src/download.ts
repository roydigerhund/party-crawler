import axios from 'axios';
import config from './config';
import pool from './dbconfig';
const fse = require('fs-extra');

if (!process.env.PAGE || !process.env.PER_PAGE) process.exit(1);

const page = parseInt(process.env.PAGE, 10);
const perPage = parseInt(process.env.PER_PAGE, 10);

console.log('Will fetch', perPage, 'images per page starting from page', page);

const main = async () => {
  const client = await pool.connect();

  const totalImages = (await client.query('SELECT COUNT(id) FROM images')).rows[0].count;
  const totalPages = Math.ceil(totalImages / perPage);

  console.log('Total images:', totalImages);
  console.log('Total pages:', totalPages);

  for (let currentPage = page; currentPage <= totalPages; currentPage++) {
    // fetch image urls from database based on page and perPage
    const { rows, rowCount } = await client.query(
      `SELECT url FROM images ORDER BY id ASC OFFSET ${(currentPage - 1) * perPage} LIMIT ${perPage}`,
    );
    console.log('Will fetch', rowCount, 'images from page', currentPage);

    // fetch and save each image
    await Promise.all(
      rows.map(async (row) => {
        try {
          const { url } = row;
          const { data } = await axios.get(url, { responseType: 'arraybuffer', timeout: 60000 });
          const fileName = url.replace(/^.*?de\//, '');
          const filePath = `${config.downloadPath}/${fileName}`;
          await fse.outputFile(filePath, data, { force: true });
        } catch (error) {
          console.log('Error while downloading image', row.url);
          // write error to file
          await fse.appendFile(config.downloadErrorsFile, `${row.url}\n`);
        }
      }),
    );
  }

  client.release();
  process.exit(0);
};

main();
