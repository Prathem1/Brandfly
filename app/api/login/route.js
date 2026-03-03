import { Pool } from "pg";
import bcrypt from "bcryptjs";
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
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email & password required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resUser = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (resUser.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const user = resUser.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000;

    await pool.query(
      "INSERT INTO otp_codes (email, otp, expires, used) VALUES ($1, $2, $3, FALSE)",
      [email, otp, expires]
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Your BrandFly Login OTP",
      text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`,
    });

    return new Response(JSON.stringify({ ok: true, email }), { status: 200 });
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
