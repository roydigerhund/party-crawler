import pool from './dbconfig';

const main = async () => {
  try {
    const client = await pool.connect();

    const sql = `CREATE TABLE "images" (
      "id" INT NOT NULL,
      "party" TEXT NOT NULL,
      "partydate" DATE NOT NULL,
      "country" VARCHAR(2) NOT NULL,
      "city" TEXT NOT NULL,
      "url" TEXT NOT NULL,
      PRIMARY KEY ("id")
    );`;
    await client.query(sql);

    client.release();
    return;
  } catch (error) {
    console.error(error);
    return;
  }
};

main();
