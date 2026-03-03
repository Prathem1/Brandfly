import nodemailer from "nodemailer";
import pkg from "pg";
import bcrypt from "bcryptjs";

const { Pool } = pkg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export const runtime = "nodejs";

// You can change this value any time — this is your resend wait time (in milliseconds)
const RESEND_WAIT = 15000; // 15 seconds

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email & Password required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if OTP was already sent recently
    const existing = await pool.query(
      `SELECT expires FROM otp_temp_users WHERE email = $1`,
      [email]
    );
    if (existing.rows.length > 0) {
      const lastExpires = existing.rows[0].expires;
      const lastCreated = lastExpires - 5 * 60 * 1000; // created time = expires - 5 mins validity
      const now = Date.now();

      // If less than RESEND_WAIT ms since last creation → block
      if (now - lastCreated < RESEND_WAIT) {
        const waitLeft = Math.ceil((RESEND_WAIT - (now - lastCreated)) / 1000);
        return new Response(
          JSON.stringify({
            error: `Please wait ${waitLeft} more seconds before requesting a new OTP.`,
          }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

    // Store in otp_temp_users table
    await pool.query(
      `INSERT INTO otp_temp_users (email, password, otp, expires)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO UPDATE
       SET password=$2, otp=$3, expires=$4`,
      [email, hashedPassword, otp, expires]
    );

    console.log("OTP generated:", otp, "for email:", email);

    // Send OTP via email
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
      text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    });

    return new Response(
      JSON.stringify({ ok: true, message: "OTP sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Send OTP error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
