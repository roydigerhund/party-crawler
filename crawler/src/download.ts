import axios from 'axios';
import config from './config';
import pool from './dbconfig';
const cliProgress = require('cli-progress');
import * as fse from 'fs-extra';
import * as async from 'async';
import * as path from 'path';
import * as mkdirp from 'mkdirp';

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
    let numberOfErrors = 0;

    // fetch image urls from database based on page and perPage
    const { rows, rowCount } = await client.query(
      `SELECT url FROM images ORDER BY id ASC OFFSET ${(currentPage - 1) * perPage} LIMIT ${perPage}`,
    );
    console.log('Will fetch', rowCount, 'images from page', currentPage);

    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(rowCount, 0);

    console.time('Downloading Time');

    await async.eachLimit(rows, 15, async (row, callback) => {
      try {
        const { url } = row;
        // stream file to disk
        const fileName = url.replace(/^.*?de\//, '');
        const filePath = `${config.downloadPath}/${fileName}`;
        await mkdirp(path.dirname(filePath));
        const writer = fse.createWriteStream(filePath, { flags: 'w' });
        const response = await axios({
          method: 'get',
          url,
          responseType: 'stream',
          timeout: 30000,
        });
        response.data.pipe(writer);
      } catch (error) {
        numberOfErrors++;
        // write error to file
        await fse.appendFile(config.downloadErrorsFile, `${row.url}\n`);
      } finally {
        bar.increment();
        callback();
      }
    });

    bar.stop();

    console.log('Finished page', currentPage, 'with', numberOfErrors, 'errors');
    console.timeEnd('Downloading Time');
  }

  client.release();
  process.exit(0);
};

main();
