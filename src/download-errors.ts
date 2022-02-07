import * as async from 'async';
import axios from 'axios';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import config from './config';
const fse = require('fs-extra');
const cliProgress = require('cli-progress');

const main = async () => {
  // read errors.txt line by line
  const errors = await fse.readFile('./src/errors.txt', 'utf8');
  const lines = errors.split('\n');
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  console.time('Downloading Time');

  bar.start(lines.length, 0);

  await async.eachLimit(lines, 1, async (url: string, callback) => {
    try {
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
      // write error to file
      await fse.appendFile(config.downloadErrorsFile, `${url}\n`);
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
