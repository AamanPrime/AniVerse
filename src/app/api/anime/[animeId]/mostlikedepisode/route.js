import { query } from "@/dbConfig/dbConfig";

export async function GET(req, { params }) {
  const { animeId } = await params;

  const sql = `
    SELECT e.AnimeID, a.Title, e.SeasonID, e.EpisodeNumber, e.NoOfLikes
    FROM Episodes e
    JOIN Animes a ON e.AnimeID = a.AnimeID
    WHERE (e.AnimeID, e.NoOfLikes) IN (
      SELECT AnimeID, MAX(NoOfLikes) 
      FROM Episodes 
      WHERE AnimeID = $1
      GROUP BY AnimeID
    )
    ORDER BY e.NoOfLikes DESC;
  `;

  try {
    const result = await query(sql, [animeId]);

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Anime or episode not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching most liked episode:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch most liked episode" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
