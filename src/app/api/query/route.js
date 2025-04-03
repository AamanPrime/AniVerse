import { query } from "@/dbConfig/dbConfig";

// Fetch all animes
export async function getAllAnimes() {
    const result = await query("SELECT * FROM Animes ORDER BY ReleaseDate DESC");
    return result.rows;
}

// Fetch an anime by ID
export async function getAnimeById(animeId) {
    const result = await query("SELECT * FROM Animes WHERE AnimeID = $1", [animeId]);
    return result.rows.length ? result.rows[0] : null;
}

// Fetch animes by genre
export async function getAnimesByGenre(genre) {
    const result = await query("SELECT * FROM Animes WHERE $1 = ANY(Languages)", [genre]);
    return result.rows;
}
