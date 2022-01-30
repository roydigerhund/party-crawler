import axios from 'axios';
import config from './config';
import { storeImage } from './ImagesController';

const { imagePreviewUrl } = config;

if (!process.env.FIRST_ID || !process.env.LAST_ID) process.exit(1);

const firstId = parseInt(process.env.FIRST_ID, 10);
const lastId = parseInt(process.env.LAST_ID, 10);

console.log('Will fetch from id', firstId, 'to id', lastId);

const regex = new RegExp(
  /<title>BinPartyGeil\.de Party-Foto\/Bild-Nr\. (?<id>\d{1,10}): (?<party>.*) am (?<date>\d{2}\.\d{2}\.\d{4}) in (?<country>[A-Z]*?)-(?<city>.*?)<\/title>.*?<meta property="og:image" content="(?<url>.*?)"/gs,
);
export type ImageType = {
  id: string;
  party: string;
  date: string;
  country: string;
  city: string;
  url: string;
};

// dd.mm.yyyy to isoString
const toDate = (date: string) => {
  const [day, month, year] = date.split('.');
  return new Date(`${year}-${month}-${day}`).toISOString();
};

const main = async () => {
  // iterate over all images
  for (let i = firstId; i <= lastId; i++) {
    await getImage(i);
  }
  process.exit(0);
};

const getImage = async (imageId: number) => {
  // fetch html from url
  const { data: dataBuffer, ...rest } = await axios.get(imagePreviewUrl + imageId, { responseType: 'arraybuffer' });
  // get infos from data with regex
  const data = dataBuffer.toString('latin1');
  if (data.match(regex)) {
    const result = regex.exec(data);
    if (!result?.groups) return;
    const { id, party, date, country, city, url }: ImageType = {
      id: result.groups.id,
      party: result.groups.party,
      date: toDate(result.groups.date),
      country: result.groups.country,
      city: result.groups.city,
      url: result.groups.url,
    };

    const status = await storeImage({ id, party, date, country, city, url });
    if (status) {
      console.log('Stored image:', id);
    } else {
      console.log('Failed to store image:', id);
    }
  } else {
    console.log('Skipped image:', imageId);
  }
};

main();
