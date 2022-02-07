import * as async from 'async';
import pool from './dbconfig';
const cliProgress = require('cli-progress');
import * as fse from 'fs-extra';
import config from './config';

if (!process.env.PAGE || !process.env.PER_PAGE) process.exit(1);

const page = parseInt(process.env.PAGE, 10);
const perPage = parseInt(process.env.PER_PAGE, 10);

console.log('Will check', perPage, 'images per page starting from page', page);

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
    console.log('Will check', rowCount, 'images from page', currentPage);

    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(rowCount, 0);

    await async.eachLimit(rows, 25, async (row, callback) => {
      try {
        const { url } = row;
        const path = url.replace(/^https?:\/\/www\.binpartygeil\.de/, './downloads');

        // 0a0d2be9bf74907ed1ae22062eb5c5ff // correct
        // 0a1d65254db75d10759ac0b5c31b6e69 // correct
        // ea5a641d3224757b186d425b686cc79c // corrupt
        // 1a9dfcd4683e7af88e4a506671d16ed5 // zero byte file
        // 1a9dfcd4683e7af88e4a506671d16edz // non existent file
        // const path = './downloads/bilder/partybilder-2011/1101/1a9dfcd4683e7af88e4a506671d16edz.jpg';

        // check if file exists async
        const stats = await fse.promises.stat(path);

        // check if file has zero bytes
        if (stats.size === 0) {
          throw new Error('zero byte file');
        }

        await new Promise(function (resolve, reject) {
          // read content of file, check if it does not end on ˇŸ
          fse.readFile(path, 'utf8', (err, data) => {
            if (err) {
              reject(err);
            } else {
              if (!data.endsWith('\uFFFD')) {
                reject(new Error('corrupt'));
              }
              resolve('');
            }
          });
        });
      } catch (error) {
        numberOfErrors++;
        // write error to file
        await fse.appendFile(config.checkCorruptsFile, `${row.url}\n`);
      } finally {
        bar.increment();
        callback();
      }
    });

    bar.stop();

    console.log('Finished page', currentPage, 'with', numberOfErrors, 'corrupt files');
  }

  client.release();
  process.exit(0);
};

main();
