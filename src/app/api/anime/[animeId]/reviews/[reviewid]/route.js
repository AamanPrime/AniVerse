import { query } from "@/dbConfig/dbConfig";

export async function DELETE(req, context) {
  const { params } = context;
  const { reviewid } = params;

  // Check if reviewid is provided
  if (!reviewid) {
    return new Response(JSON.stringify({ error: "Review ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Query to delete the review based on reviewid
    const result = await query(
      "DELETE FROM Reviews WHERE reviewid = $1 RETURNING *",
      [reviewid]
    );

    if (result.rowCount === 0) {
      return new Response(JSON.stringify({ error: "Review not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Review deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting review:", error);
    return new Response(JSON.stringify({ error: "Failed to delete review" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
