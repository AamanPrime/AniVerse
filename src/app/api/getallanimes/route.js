import { query } from "@/dbConfig/dbConfig";

export async function GET() {
  try {
    const result = await query("SELECT * FROM Animes ORDER BY AverageRating DESC LIMIT 5");
    
    return Response.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Failed to fetch animes" }, { status: 500 });
  }
}
