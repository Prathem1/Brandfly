import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

export async function POST(req) {
  try {
    const { email, otp } = await req.json();
    if (!email || !otp)
      return new Response(JSON.stringify({ error: "Email & OTP required" }), { status: 400 });

    // 1️⃣ Check signup OTP (otp_temp_users)
    let res = await pool.query(
      "SELECT * FROM otp_temp_users WHERE email=$1 AND otp=$2 AND expires>$3",
      [email, otp, Date.now()]
    );

    if (res.rowCount > 0) {
      const tempUser = res.rows[0];

      // Check if user already exists
      const exists = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
      if (exists.rowCount > 0) {
        await pool.query("DELETE FROM otp_temp_users WHERE email=$1", [email]);
        return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
      }

      // Insert user with extra fields
      await pool.query(
        `INSERT INTO users 
         (email, password, first_name, last_name, phone, location, is_verified) 
         VALUES ($1,$2,$3,$4,$5,$6,TRUE)`,
        [
          tempUser.email,
          tempUser.password,
          tempUser.first_name || "",
          tempUser.last_name || "",
          tempUser.phone || "",
          tempUser.location || "",
        ]
      );

      // Delete temp record
      await pool.query("DELETE FROM otp_temp_users WHERE email=$1", [email]);

      return new Response(
        JSON.stringify({ ok: true, message: "OTP verified, account created" }),
        { status: 200 }
      );
    }

    // 2️⃣ Check login OTP (otp_codes)
    res = await pool.query(
      "SELECT * FROM otp_codes WHERE email=$1 AND otp=$2 AND expires>$3 AND used=FALSE",
      [email, otp, Date.now()]
    );

    if (res.rowCount === 0)
      return new Response(JSON.stringify({ error: "Invalid or expired OTP" }), { status: 400 });

    // Mark OTP as used
    await pool.query("UPDATE otp_codes SET used=TRUE WHERE email=$1 AND otp=$2", [email, otp]);

    // Mark user as verified
    await pool.query("UPDATE users SET is_verified=TRUE WHERE email=$1", [email]);

    return new Response(
      JSON.stringify({ ok: true, message: "OTP verified successfully" }),
      { status: 200 }
    );

  } catch (err) {
    console.error("OTP verify error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
