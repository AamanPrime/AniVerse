import { query } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      Title,
      ReleaseDate,
      Description,
      NoOfEpisodes,
      NoOfSeasons,
      Studio,
      AverageRating,
      CoverImage,
      Subtitles,
      Actors,
      Languages,
      Genres,
    } = body;

    const result = await query(
      `INSERT INTO Animes (Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons, Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [
        Title,
        ReleaseDate,
        Description,
        NoOfEpisodes,
        NoOfSeasons,
        Studio,
        AverageRating,
        CoverImage,
        JSON.stringify(Subtitles),
        JSON.stringify(Actors),
        JSON.stringify(Languages),
        JSON.stringify(Genres),
      ]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding anime:", error);
    return new Response(JSON.stringify({ error: "Failed to add anime" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}