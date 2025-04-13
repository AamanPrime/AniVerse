import { isAuth } from "@/Components/isAuth";
import { query } from "@/dbConfig/dbConfig";
import { v4 as uuidv4 } from "uuid";

export async function POST(req, context) {

  const { params } = context;
  const { animeId } = params;

  const { reviewText, rating, user } = await req.json();
  const userId = user.userId;
  console.log(userId);

  if (!reviewText || rating < 0 || rating > 10 || !user) {
    return new Response(JSON.stringify({ error: "Invalid input. Rating must be between 0 and 10." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const newReview = {
    reviewId: uuidv4(),
    animeId,
    userId,
    reviewText,
    rating,
    timestamp: new Date().toISOString(),
  };

  console.log(newReview)

  try {
    await query(
      "INSERT INTO Reviews (reviewId, animeId, userId, reviewText, rating, timestamp) VALUES ($1, $2, $3, $4, $5, $6)",
      [newReview.reviewId, newReview.animeId, newReview.userId, newReview.reviewText, newReview.rating, newReview.timestamp]
    );
    return new Response(JSON.stringify(newReview), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting review:", error);
    return new Response(JSON.stringify({ error: "Failed to submit review" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
