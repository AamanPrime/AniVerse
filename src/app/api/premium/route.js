import { query } from "@/dbConfig/dbConfig";
import { jwtDecode } from "jwt-decode";

// Helper to extract user info from token
function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email, role: decoded.role };
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}

// POST /api/premium => Activate Premium Subscription
export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized. Please log in." }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = authHeader.split(" ")[1];
    const user = getUserFromToken(token);
    if (!user?.userId) {
      return new Response(JSON.stringify({ error: "Invalid or missing user." }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const nextPaymentDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    await query(
      `INSERT INTO PremiumSubscription (UserID, Price, Duration, NextPaymentDate)
       VALUES ($1, $2, $3, $4)`,
      [user.userId, 15.0, 30, nextPaymentDate]
    );

    return new Response(JSON.stringify({ message: "Subscription activated!" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Subscription Error:", error);
    return new Response(JSON.stringify({ error: "Failed to activate subscription." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// GET /api/premium => Check if user is Premium
export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ isPremium: false, error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = authHeader.split(" ")[1];
    const user = getUserFromToken(token);
    if (!user?.userId) {
      return new Response(JSON.stringify({ isPremium: false, error: "Invalid user" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await query(
      `SELECT 1 FROM PremiumSubscription 
       WHERE UserID = $1 AND IsActive = TRUE 
       AND NextPaymentDate >= CURRENT_DATE`,
      [user.userId]
    );

    return new Response(JSON.stringify({ isPremium: result.rows.length > 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Check Premium Error:", error);
    return new Response(JSON.stringify({ isPremium: false, error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
