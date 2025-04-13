import { query } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure .env has JWT_SECRET

    const userId = decoded.userId;

    const result = await query(`
      SELECT a.AnimeID as animeid, a.Title as title, a.CoverImage as coverimage, 
             a.Description as description, w.LastWatchTimeStamp as lastwatchtimestamp, w.seasonnumber as seasonnumber, w.episodenumber as episodenumber
      FROM WatchHistory w
      JOIN Animes a ON a.AnimeID = w.AnimeID
      WHERE w.UserID = $1
      ORDER BY w.LastWatchTimeStamp DESC
    `, [userId]);

    return new Response(JSON.stringify({ history: result.rows }), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
}

export async function POST(req) {
    try {
      const authHeader = req.headers.get("authorization");
      if (!authHeader) return new Response("Unauthorized", { status: 401 });
  
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
  
      const { animeId, progress, seasonID, episodeID } = await req.json();
  
      const result = await query(
        `
INSERT INTO WatchHistory (UserID, AnimeID, Progress, Seasonnumber, Episodenumber)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (UserID, AnimeID)
DO UPDATE SET Progress = EXCLUDED.Progress, LastWatchTimeStamp = CURRENT_TIMESTAMP;

        `,
        [userId, animeId, progress,seasonID,episodeID]
      );
  
      return Response.json({ success: true });
    } catch (err) {
      console.error("WatchHistory error:", err);
      return Response.json({ error: "Failed to update watch history" }, { status: 500 });
    }
  }