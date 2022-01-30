import { ImageType } from '.';
import pool from './dbconfig';

export const storeImage = async (image: ImageType) => {
  try {
    const client = await pool.connect();

    const sql = `INSERT INTO images(id, party, date, country, city, url) VALUES (${image.id}, '${image.party}', '${image.date}', '${image.country}', '${image.city}', '${image.url}') ON CONFLICT DO NOTHING`;
    await client.query(sql);

    client.release();
    return true;
  } catch (error) {
    return false;
  }
};
