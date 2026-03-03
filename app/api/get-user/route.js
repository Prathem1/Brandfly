import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export async function GET(req) {
  try {
    const email = req.nextUrl.searchParams.get("email");
    if (!email) return new Response(JSON.stringify({ error: "Email required" }), { status: 400 });

    const res = await pool.query(
      "SELECT id, email, first_name, last_name, phone, location FROM users WHERE email=$1",
      [email]
    );

    if (res.rowCount === 0)
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });

    return new Response(JSON.stringify(res.rows[0]), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
