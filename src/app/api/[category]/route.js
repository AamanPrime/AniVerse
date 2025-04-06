import { query } from "@/dbConfig/dbConfig";

export async function GET(req, { params }) {
  const { category } = params;
  

  try {
    const sql = `
      SELECT * FROM Animes
      WHERE Genres::jsonb @> $1
    `;

    const genreFilter = JSON.stringify([{ name: category }]);

    const result = await query(sql, [genreFilter]);

    return Response.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Failed to fetch animes" }, { status: 500 });
  }
}
