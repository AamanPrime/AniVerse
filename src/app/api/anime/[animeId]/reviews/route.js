import { isAuth } from "@/Components/isAuth";
import { query } from "@/dbConfig/dbConfig";
import { v4 as uuidv4 } from "uuid";

import {jwtDecode} from "jwt-decode";

function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email }; // adjust fields based on your token structure
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}

export async function POST(req, context) {

  const { params } = context;
  const { animeId } = params;

  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { reviewText, rating} = await req.json();
  const user = getUserFromToken(token); // Should return user.userId
  console.log(user)
  if (!reviewText || rating < 0 || rating > 10 || !user) {
    

    return new Response(JSON.stringify({ error: "Invalid input. Rating must be between 0 and 10." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const userId = user.userId;
  console.log(userId);

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

export async function GET(req, context) {
  const { params } = context;
  const { animeId } = params;

  try {
    const result = await query(
      `SELECT r.reviewId, r.animeId, r.userId, r.reviewText, r.rating, r.timestamp, u.username
       FROM Reviews r
       JOIN Users u ON r.userId = u.userId
       WHERE r.animeId = $1
       ORDER BY r.timestamp DESC`,
      [animeId]
    );

    const reviews = result.rows; // ✅ get only the data rows

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
