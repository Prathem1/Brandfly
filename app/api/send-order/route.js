// File: app/api/send-order/route.js
import nodemailer from "nodemailer";
import pkg from "pg";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const { Pool } = pkg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const runtime = "nodejs"; // Needed for nodemailer

export async function POST(req) {
  try {
    // 0️⃣ Get logged-in user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1️⃣ Get order data from request
    const body = await req.json();
    const {
      orderName = "",
      product = "",
      subitemName = "",
      subitemInfo = "",
      quantity = 1,
      minQty = 1,
      printing = "",
      privacy = "",
      remark = "",
      cost = 0,
      gst = 0,
      total = 0,
    } = body;

    if (!orderName || !product || !quantity || !printing || !privacy) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2️⃣ Save order to database (all fields)
    const insertQuery = `
      INSERT INTO orders
        (user_id, product_name, subitem_name, subitem_info, quantity, min_qty, printing, privacy, remark, cost, gst, total)
      VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING id
    `;
    const values = [
      session.user.id,
      orderName,
      subitemName,
      subitemInfo,
      quantity,
      minQty,
      printing,
      privacy,
      remark,
      cost,
      gst,
      total
    ];

    const result = await pool.query(insertQuery, values);
    const orderId = result.rows[0].id;

    // 3️⃣ Send confirmation email with all details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <h2 style="padding: 10px; color: #000; border-bottom: 2px solid #FFFF00;">New Order Received</h2>
        <p>Order ID: ${orderId}</p>
        <p>Placed by: ${session.user.name} (${session.user.email})</p>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td><b>Order Name:</b></td><td>${orderName}</td></tr>
          <tr><td><b>Product:</b></td><td>${product}</td></tr>
          <tr><td><b>Selected Option:</b></td><td>${subitemName} – ${subitemInfo}</td></tr>
          <tr><td><b>Quantity:</b></td><td>${quantity} (Min ${minQty})</td></tr>
          <tr><td><b>Printing Type:</b></td><td>${printing}</td></tr>
          <tr><td><b>Privacy Packing:</b></td><td>${privacy}</td></tr>
          <tr><td><b>Remark:</b></td><td>${remark || "None"}</td></tr>
          <tr><td><b>Cost:</b></td><td>Rs. ${Number(cost).toFixed(2)}</td></tr>
          <tr><td><b>GST (18%):</b></td><td>Rs. ${Number(gst).toFixed(2)}</td></tr>
          <tr><td><b>Total Payable:</b></td><td>Rs. ${Number(total).toFixed(2)}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"BrandFly Orders" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: `New Order #${orderId}: ${orderName}`,
      html,
    });

    return new Response(
      JSON.stringify({ ok: true, message: "Order saved and email sent", orderId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Send order error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
