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
    const { email, password, firstName, lastName, phone, location } = await req.json();

    if (!email || !password || !firstName || !lastName) {
      return new Response(
        JSON.stringify({ error: "Email, password, first name, and last name are required" }),
        { status: 400 }
      );
    }

    // Check if user already exists
    const exists = await pool.query("SELECT id FROM users WHERE email=$1", [email]);
    if (exists.rowCount > 0) {
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; // 5 mins

    // Store in temp table with new fields
    await pool.query(
      `INSERT INTO otp_temp_users (email, password, otp, expires, first_name, last_name, phone, location)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       ON CONFLICT (email) DO UPDATE
       SET password=$2, otp=$3, expires=$4, first_name=$5, last_name=$6, phone=$7, location=$8`,
      [email, hashedPassword, otp, expires, firstName, lastName, phone || "", location || ""]
    );

    // Send OTP email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    return new Response(JSON.stringify({ ok: true, message: "OTP sent", email }), { status: 200 });
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
