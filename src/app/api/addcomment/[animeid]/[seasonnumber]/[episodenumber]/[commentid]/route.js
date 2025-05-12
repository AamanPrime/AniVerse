import { query } from "@/dbConfig/dbConfig";
import {jwtDecode} from "jwt-decode";

function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email, role:decoded.role }; // adjust fields based on your token structure
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}


export async function DELETE(req, { params }) {
    try {
      const authHeader = req.headers.get("authorization");
      const token = authHeader?.split(" ")[1];
      const user = getUserFromToken(token);
      console.log(user)
      if (!token || !user || user.role !== "admin") {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
      }
  
      const { commentid } = params;
      console.log(commentid);
      await query("DELETE FROM Comments WHERE CommentID = $1", [commentid]);
  
      return new Response(JSON.stringify({ message: "Comment deleted" }), { status: 200 });
    } catch (err) {
      console.error("Error deleting comment:", err);
      return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
  }
  