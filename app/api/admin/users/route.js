import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Pool } from "pg";

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    if (!session.user.isVerified || !session.user.isAdmin) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }

    // Include all signup details in the query
    const result = await pool.query(
      `SELECT id, email, first_name, last_name, phone, location, is_verified, is_admin, created_at
       FROM users
       ORDER BY created_at DESC`
    );

    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (err) {
    console.error("Admin GET users error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
