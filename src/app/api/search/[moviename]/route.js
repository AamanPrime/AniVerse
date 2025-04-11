import { query } from "@/dbConfig/dbConfig";

export async function GET(req) {
  const url = new URL(req.url);
  const title = url.pathname.split("/").pop();
  console.log(title)
  
  if (!title || title.trim() === "") {
    return Response.json({ error: "Missing title parameter" }, { status: 400 });
  }

  try {
    console.log("Searching title:", title);

    const result = await query(
      "SELECT * FROM Animes WHERE LOWER(Title) LIKE LOWER($1)",
      [`%${title}%`]  // Use wildcards for partial matches
    );

    console.log("Search complete, results:", result.rows.length);
    // console.log(result.rows)
    return Response.json(result.rows);
  } catch (err) {
    console.error("Search API Error:", err);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
