import jwt from "jsonwebtoken";

export async function isAuth(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { authorized: false, error: "No token provided" };
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return { authorized: true, user: decoded };
  } catch (err) {
    return { authorized: false, error: "Invalid or expired token" };
  }
}
