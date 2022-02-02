import axios from 'axios';
import config from './config';
import { hadError } from './errors';
const fse = require('fs-extra');

console.log('Will fetch', hadError.length, 'images');

const main = async () => {
  // fetch and save each image
  await Promise.all(
    hadError.map(async (url) => {
      try {
        const { data } = await axios.get(url, { responseType: 'arraybuffer', timeout: 60000 });
        const fileName = url.replace(/^.*?de\//, '');
        const filePath = `${config.downloadPath}/${fileName}`;
        await fse.outputFile(filePath, data, { force: true });
      } catch (error) {
        console.log('Error while downloading image', url);
        // write error to file
        await fse.appendFile(config.downloadErrorsFile, `${url}\n`);
      }
    }),
  );

  process.exit(0);
};

main();
