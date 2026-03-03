import { Pool } from "pg";
import nodemailer from "nodemailer";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), { status: 400 });
    }

    const resUser = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (resUser.rows.length === 0) {
      return new Response(JSON.stringify({ error: "No user found with this email" }), { status: 404 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

    await pool.query(
      `INSERT INTO password_reset_otps (email, otp, expires, used)
       VALUES ($1,$2,$3,FALSE)`,
      [email, otp, expires]
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "BrandFly - Password Reset OTP",
      text: `Your OTP to reset password is ${otp}. It expires in 5 minutes.`,
    });

    return new Response(JSON.stringify({ ok: true, message: "OTP sent" }), { status: 200 });
  } catch (err) {
    console.error("Forgot password error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
