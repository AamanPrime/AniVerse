import { query } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const insertUserQuery = `
      INSERT INTO Users (UserName, Email, Password)
      VALUES ($1, $2, $3)
      
    `;
    const loweremail = email.toLowerCase();
    const result = await query(insertUserQuery, [username, loweremail, hashedPassword]);

    return new Response(JSON.stringify({ message: "User registered successfully", user: result.rows[0] }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return new Response(JSON.stringify({ error: "Signup failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
