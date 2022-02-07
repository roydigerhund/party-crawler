import * as async from 'async';
import pool from './dbconfig';
const cliProgress = require('cli-progress');
import * as fse from 'fs-extra';
import config from './config';

const main = async () => {
  // read errors.txt line by line
  const errors = await fse.readFile('./src/errors.txt', 'utf8');
  const lines = errors.split('\n');
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  console.time('Downloading Time');

  bar.start(lines.length, 0);

  let numberOfErrors = 0;

  await async.eachLimit(lines, 1, async (url: string, callback) => {
    try {
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
      await fse.appendFile(config.checkCorruptsFile, `${url}\n`);
    } finally {
      bar.increment();
      callback();
    }
  });

  bar.stop();

  console.timeEnd('Downloading Time');

  process.exit(0);
};

main();
