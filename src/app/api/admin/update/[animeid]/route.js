import { NextResponse } from 'next/server';
import { query } from '@/dbConfig/dbConfig'; // Adjust the path based on your structure

export async function PUT(req, { params }) {
  const { animeid } = params;

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
      Genres
    } = body;

    const updateQuery = `
      UPDATE Animes SET
        Title = $1,
        ReleaseDate = $2,
        Description = $3,
        NoOfEpisodes = $4,
        NoOfSeasons = $5,
        Studio = $6,
        AverageRating = $7,
        CoverImage = $8
      WHERE AnimeID = $9
      RETURNING *;
    `;

    const values = [
      Title,
      ReleaseDate,
      Description,
      NoOfEpisodes,
      NoOfSeasons,
      Studio,
      AverageRating,
      CoverImage,
      animeid,
    ];

    const result = await query(updateQuery, values);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Anime not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Anime updated', anime: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error updating anime:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
