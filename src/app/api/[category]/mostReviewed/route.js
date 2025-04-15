import { query } from "@/dbConfig/dbConfig";

export async function GET(req) {
  const url = new URL(req.url);
  const category = url.pathname.split("/").pop();

  try {
    const sql = `
SELECT 
  a.*, 
  COUNT(r.ReviewID) AS ReviewCount, 
  AVG(r.Rating) AS AvgUserRating
FROM Animes a
LEFT JOIN Reviews r ON a.AnimeID = r.AnimeID
GROUP BY a.AnimeID
ORDER BY ReviewCount DESC
LIMIT 10;

    `;

    
    
    const result = await query(sql);
    
    return Response.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Failed to fetch top animes" }, { status: 500 });
  }
}
