import { query } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const createTableQuery = `
drop table pkar;
    `;

    await query(createTableQuery);
    
    return new Response(JSON.stringify({ message: "Database setup complete!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error creating table:", error);
    
    return new Response(JSON.stringify({ error: "Failed to create table" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
