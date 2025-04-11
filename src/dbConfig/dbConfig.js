import {Pool} from "pg";

const pool = new Pool({
  user: "postgres", // Change to your PostgreSQL username
  host: "localhost",
  database: "AniverseDB", // Change to your database name
  password: "1234", // Change to your password
  port: 5432, // Default PostgreSQL port
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
