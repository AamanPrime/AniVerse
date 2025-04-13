import { query } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

// GET: Get user's watchlist
export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    console.log(userId)
    const result = await query(`
      SELECT a.AnimeID as animeid, a.Title as title, a.CoverImage as coverimage, 
             a.Description as description, w.Status as status, w.AddedDate as addeddate
      FROM Watchlist w
      JOIN Animes a ON a.AnimeID = w.AnimeID
      WHERE w.UserID = $1
      ORDER BY w.AddedDate DESC
    `, [userId]);
        console.log(result)
    return new Response(JSON.stringify({ watchlist: result.rows }), { status: 200 });

  } catch (error) {
    console.error("GET Watchlist error:", error);
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
}

// POST: Add or update watchlist entry
export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized", { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { animeId, status } = await req.json(); // status should be 0, 1, or 2

    // Check if entry exists
    const existing = await query(
      `SELECT WatchlistID FROM Watchlist WHERE UserID = $1 AND AnimeID = $2`,
      [userId, animeId]
    );

    if (existing.rows.length > 0) {
      // Update status
      await query(
        `
        UPDATE Watchlist
        SET Status = $1, AddedDate = CURRENT_TIMESTAMP
        WHERE UserID = $2 AND AnimeID = $3
        `,
        [status, userId, animeId]
      );
    } else {
      // Insert new entry
      await query(
        `
        INSERT INTO Watchlist (UserID, AnimeID, Status)
        VALUES ($1, $2, $3)
        `,
        [userId, animeId, status]
      );
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("POST Watchlist error:", err);
    return Response.json({ error: "Failed to update watchlist" }, { status: 500 });
  }
}
