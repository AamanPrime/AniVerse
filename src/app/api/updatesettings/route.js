import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { query } from "@/dbConfig/dbConfig";

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { bio, profilePic } = await req.json();
    console.log(profilePic);
    // Update user in DB
    await query(
      `UPDATE Users SET Bio = $1, profilepicture = $2 WHERE Email = $3`,
      [bio, profilePic, decoded.email]
    );

    return NextResponse.json({ message: "Settings updated........", token: "nadnasjdiadbanak" });
  } catch (err) {
    console.error("Update error:", err);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
