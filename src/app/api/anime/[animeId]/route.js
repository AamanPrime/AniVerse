import { query } from "@/dbConfig/dbConfig";

export async function GET(req, {params}) {
  
  const { animeId } = await params;

  try {
    const result = await query(
      "SELECT * FROM Animes WHERE animeId = $1",
      [animeId]
    );

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Anime not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching anime details:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch anime details" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(req, context) {
  const { params } = context;
  const { animeId } = params;

  try {
    const result = await query(
      "DELETE FROM Animes WHERE animeId = $1 RETURNING *",
      [animeId]
    );

    if (result.rowCount === 0) {
      return new Response(JSON.stringify({ error: "Anime not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Anime deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting anime:", error);
    return new Response(JSON.stringify({ error: "Failed to delete anime" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
