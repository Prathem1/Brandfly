import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return new Response(
        JSON.stringify({ error: "Amount is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // amount in paise
      currency: "INR",
      payment_capture: 1,
    });

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to create order" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
