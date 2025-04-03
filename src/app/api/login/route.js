import { query } from "../../../dbConfig/dbConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Fetch user from database
        const userQuery = "SELECT * FROM Users WHERE Email = $1";
        const result = await query(userQuery, [username]);

        if (result.rows.length === 0) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }

        const user = result.rows[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
        }

        // Update last login timestamp
        const updateQuery = "UPDATE Users SET LastLogin = NOW() WHERE UserName = $1";
        await query(updateQuery, [username]);

        // Generate JWT Token
        const token = jwt.sign({ userId: user.userid, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        console.log("Logined");
        return new Response(JSON.stringify({ message: "Login successful", token }), { status: 200 });
    } catch (error) {
        console.error("Login error:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}
