import { Pool } from 'pg';

const pool = new Pool({
  user: 'avnadmin', // PostgreSQL username
  host: 'aniverse-aamanprime-240b.k.aivencloud.com', // Database host
  database: 'aniverse', // Database name
  password: process.env.PG_PASSWORD, // Password
  port: 18241, // Port for the database
  ssl: {
    rejectUnauthorized: false, // To allow SSL connection when using SSL
  },
});

export async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}
