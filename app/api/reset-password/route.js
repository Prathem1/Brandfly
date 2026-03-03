import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export async function POST(req) {
  try {
    const { email, otp, newPassword } = await req.json();
    if (!email || !otp || !newPassword) {
      return new Response(JSON.stringify({ error: "Email, OTP, and new password required" }), { status: 400 });
    }

    const resOtp = await pool.query(
      "SELECT * FROM password_reset_otps WHERE email=$1 AND otp=$2 AND expires>$3 AND used=FALSE",
      [email, otp, Date.now()]
    );

    if (resOtp.rowCount === 0) {
      return new Response(JSON.stringify({ error: "Invalid or expired OTP" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await pool.query("UPDATE users SET password=$1 WHERE email=$2", [hashedPassword, email]);
    await pool.query("UPDATE password_reset_otps SET used=TRUE WHERE email=$1 AND otp=$2", [email, otp]);

    return new Response(JSON.stringify({ ok: true, message: "Password reset successful" }), { status: 200 });
  } catch (err) {
    console.error("Reset password error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
