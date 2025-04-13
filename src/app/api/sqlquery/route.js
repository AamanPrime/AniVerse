import { query } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const { querysql } = await req.json(); // Extract the query from the request body
    console.log(querysql);

    if (!querysql) {
      return new Response(JSON.stringify({ error: "Query parameter is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Execute the query using the pool
    const result = await query(querysql);

    // Return the rows from the query result
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error executing query:", error);
    return new Response(JSON.stringify({ error: "Error executing query" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
