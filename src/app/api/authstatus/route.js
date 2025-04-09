import { isAuth } from "../../../Components/isAuth";

export async function GET(req) {
  const auth = await isAuth(req);

  if (!auth.authorized) {
    return new Response(JSON.stringify({ authenticated: false, error: auth.error }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ authenticated: true, user: auth.user }), {
    status: 200,
  });
}
