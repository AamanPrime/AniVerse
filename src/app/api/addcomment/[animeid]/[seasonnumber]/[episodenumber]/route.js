import { query } from "@/dbConfig/dbConfig";

import {jwtDecode} from "jwt-decode";

export function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email }; // adjust fields based on your token structure
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}

export async function GET(req, { params }) {
    try {
      const { animeid, seasonnumber, episodenumber } = await params;
  
      // Step 1: Validate and get UUIDs
      const animeRes = await query("SELECT AnimeID FROM Animes WHERE animeid = $1", [animeid]);
      const seasonRes = await query(
        "SELECT SeasonID FROM Seasons WHERE SeasonNumber = $1 AND AnimeID = $2",
        [seasonnumber, animeRes.rows[0]?.animeid]
      );
      const episodeRes = await query(
        "SELECT EpisodeID FROM Episodes WHERE EpisodeNumber = $1 AND SeasonID = $2",
        [episodenumber, seasonRes.rows[0]?.seasonid]
      );
  
      if (!animeRes.rowCount || !seasonRes.rowCount || !episodeRes.rowCount) {
        return new Response(JSON.stringify({ error: "Invalid anime/season/episode number" }), { status: 400 });
      }
  
      const episodeID = episodeRes.rows[0].episodeid;
  
      // Step 2: Get Comments for this episode
      const commentsRes = await query(
        `SELECT C.CommentID, C.CommentText, C.TimeStamp, U.Username, U.UserID
         FROM Comments C
         JOIN Users U ON C.UserID = U.UserID
         WHERE C.EpisodeID = $1
         ORDER BY C.TimeStamp DESC`,
        [episodeID]
      );
  
      return new Response(JSON.stringify(commentsRes.rows), { status: 200 });
    } catch (err) {
      console.error("Error fetching comments:", err);
      return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}


export async function POST(req, { params }) {
  try {
    const { animeid, seasonnumber, episodenumber } = await params;
    const { commentText } = await req.json();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const user = getUserFromToken(token); // Should return user.userId
    if (!user || !user.userId) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { status: 403 });
    }

    // Step 1: Get UUIDs from numbers
    const animeRes = await query("SELECT AnimeID FROM Animes WHERE animeid = $1", [animeid]);
    const seasonRes = await query("SELECT SeasonID FROM Seasons WHERE SeasonNumber = $1 AND AnimeID = $2", [seasonnumber, animeRes.rows[0]?.animeid]);
    const episodeRes = await query("SELECT EpisodeID FROM Episodes WHERE EpisodeNumber = $1 AND SeasonID = $2", [episodenumber, seasonRes.rows[0]?.seasonid]);

    if (!animeRes.rowCount || !seasonRes.rowCount || !episodeRes.rowCount) {
      return new Response(JSON.stringify({ error: "Invalid anime/season/episode number" }), { status: 400 });
    }

    const animeID = animeRes.rows[0].animeid;
    const seasonID = seasonRes.rows[0].seasonid;
    const episodeID = episodeRes.rows[0].episodeid;

    // Step 2: Insert into Comments
    const insertRes = await query(
      `INSERT INTO Comments (AnimeID, SeasonID, EpisodeID, UserID, CommentText)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING CommentID, CommentText, TimeStamp`,
      [animeID, seasonID, episodeID, user.userId, commentText]
    );

    return new Response(JSON.stringify(insertRes.rows[0]), { status: 201 });
  } catch (err) {
    console.error("Error posting comment:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}

