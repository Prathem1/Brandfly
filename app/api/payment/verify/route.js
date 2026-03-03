import crypto from "crypto";

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ error: "Payment details are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Replace with your Razorpay secret
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    // Generate expected signature
    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      // Payment verified successfully
      return new Response(
        JSON.stringify({ success: true, message: "Payment verified" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid signature" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to verify payment" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
