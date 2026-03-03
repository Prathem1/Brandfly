"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ImageSliderPage from "./ImageSliderPage";
import { useSession } from "next-auth/react";

const CATEGORY_TITLES = {
  "metal-business-cards": "Metal Business Cards",
  "800gsm-business-cards": "800 GSM Business Cards",
  "500gsm-business-cards": "500 GSM Business Cards",
  "nt-pvc-business-cards": "NT/PVC Business Cards",
  "atm-pouches": "ATM Pouches",
  "regular-business-cards": "Regular Business Cards",
  "visiting-cards": "Visiting Cards",
  "flex-printing": "Flex Printing",
  "graphic-designing": "Graphic Designing",
  "digital-promotion": "Digital Promotion",
  "paper-printing": "Paper Printing",
  "wedding-services": "Wedding Related Services",
  "standee-services": "Standee Services",
};

export default function AddOrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const preCategory = (searchParams.get("category") || "").trim().toLowerCase();
  const categoryTitle = CATEGORY_TITLES[preCategory] || preCategory || "Category";
  const preProduct = searchParams.get("product") || "";
  const prePrice = parseFloat(searchParams.get("price")) || 0;
  const preMinQty = parseInt(searchParams.get("minQty")) || 1;
  const preSubitemName = searchParams.get("subitemName") || "";
  const preSubitemInfo = searchParams.get("subitemInfo") || "";

  const [quantity, setQuantity] = useState(preMinQty);
  const [cost, setCost] = useState(prePrice);
  const [gst, setGst] = useState(prePrice * 0.18);
  const [total, setTotal] = useState(prePrice * 1.18);
  const [privacyCost, setPrivacyCost] = useState(0);
  const [privacy, setPrivacy] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  // Redirect if not logged in or not verified
  useEffect(() => {
    if (status === "authenticated" && !session?.user?.isVerified) {
      router.push("/login");
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session, router]);

  // Update cost, gst, total whenever quantity or privacy changes
  useEffect(() => {
    const totalCost = (quantity / preMinQty) * prePrice;
    const gstAmount = (totalCost + privacyCost) * 0.18;
    setCost(totalCost + privacyCost);
    setGst(gstAmount);
    setTotal(totalCost + privacyCost + gstAmount);
  }, [quantity, prePrice, preMinQty, privacyCost]);

  const handleQuantity = (isIncrement) => {
    if (isIncrement) {
      setQuantity((prev) => prev + preMinQty);
    } else {
      setQuantity((prev) => Math.max(preMinQty, prev - preMinQty));
    }
  };

  const handlePrivacyChange = (value) => {
    setPrivacy(value);
    setPrivacyCost(value === "Required" ? 500 : 0);
  };

  const handleRazorpayPayment = async (e) => {
    e.preventDefault();

    if (!session || !session.user.isVerified) {
      setEmailStatus("❌ You must be logged in with an active account to place an order.");
      router.push("/login");
      return;
    }

    const totalCost = (quantity / preMinQty) * prePrice;
    const gstAmount = (totalCost + privacyCost) * 0.18;
    const displayTotal = totalCost + privacyCost + gstAmount;
    const paymentAmount = totalCost + privacyCost;

    const data = {
      orderName: e.target.orderName.value,
      product: e.target.category.value,
      quantity,
      minQty: preMinQty,
      printing: e.target.printing.value,
      privacy,
      remark: e.target.remark.value,
      cost: paymentAmount,
      gst: gstAmount,
      total: displayTotal,
      subitemName: preSubitemName,
      subitemInfo: preSubitemInfo,
      user: {
        email: session.user.email,
        isVerified: session.user.isVerified,
        isAdmin: session.user.isAdmin || false,
        id: session.user.id || null,
      },
    };

    setSubmittedData(data);

    try {
      const res = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: paymentAmount }),
      });
      const orderData = await res.json();

      if (!res.ok) {
        setEmailStatus(`❌ ${orderData.error || "Failed to create payment order"}`);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: Math.round(paymentAmount * 100),
          currency: "INR",
          name: "Brandfly Orders",
          description: `Payment for ${data.orderName}`,
          order_id: orderData.id,
          handler: async function (response) {
            try {
              const verifyRes = await fetch("/api/payment/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  orderData: data,
                }),
              });
              const verifyResult = await verifyRes.json();
              if (verifyRes.ok) {
                setEmailStatus("✅ Payment successful & order placed!");
              } else {
                setEmailStatus(`❌ ${verifyResult.error || "Payment verification failed"}`);
              }
            } catch (err) {
              console.error(err);
              setEmailStatus("❌ Payment verification failed");
            }
          },
          prefill: { email: session.user.email },
          theme: { color: "#FACC15" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
    } catch (err) {
      console.error(err);
      setEmailStatus("❌ Something went wrong during payment.");
    }
  };

  if (status === "loading") return <p className="text-center text-black mt-20">Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row items-start justify-center bg-white min-h-screen p-4 md:p-10 text-black gap-5">
      <form
        onSubmit={handleRazorpayPayment}
        className="bg-white rounded-lg shadow-2xl p-6 w-full md:w-1/2 mb-6 md:mb-0"
      >
        <h2 className="text-2xl font-semibold mb-4">Add Order</h2>

        <label className="block mb-1">Product Category</label>
        <input
          type="text"
          name="category"
          value={categoryTitle}
          readOnly
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
        />

        <label className="block mb-1">Order Name</label>
        <input
          type="text"
          name="orderName"
          defaultValue={preProduct}
          readOnly
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
        />

        <label className="block mb-1">Selected Option</label>
        <input
          type="text"
          name="selectedOption"
          value={`${preSubitemName} – ${preSubitemInfo}`}
          readOnly
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
        />

        <label className="block mb-1">Select Quantity (Minimum {preMinQty})</label>
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => handleQuantity(false)}
            className="px-3 py-1 bg-yellow-300 text-black border border-black rounded"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-24 text-center p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={() => handleQuantity(true)}
            className="px-3 py-1 bg-yellow-300 text-black border border-black rounded"
          >
            +
          </button>
        </div>

        <label className="block mb-1">Printing Type</label>
        <select
          name="printing"
          required
          defaultValue=""
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="" disabled>Select Printing Type</option>
          <option value="1 Side">1 Side</option>
          <option value="1 Side With Black Back Printing">1 Side With Black Back Printing</option>
          <option value="2 Side">2 Side</option>
        </select>

        <label className="block mb-1">Privacy Packing</label>
        <div className="flex gap-20 mb-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="privacy"
              value="Required"
              checked={privacy === "Required"}
              onChange={() => handlePrivacyChange("Required")}
              required
            /> Required (+ ₹500)
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="privacy"
              value="Not Required"
              checked={privacy === "Not Required"}
              onChange={() => handlePrivacyChange("Not Required")}
              required
            /> Not Required
          </label>
        </div>

        <div className="bg-green-100 p-4 rounded border border-green-400 mb-4">
          <div className="flex justify-between mb-1">
            <span>Cost</span>
            <span>Rs. {cost.toFixed(2)}/-</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>GST (18%)</span>
            <span>Rs. {gst.toFixed(2)}/-</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Amount Payable</span>
            <span>Rs. {total.toFixed(2)}/-</span>
          </div>
        </div>

        <label className="block mb-1">Special Remark (Optional)</label>
        <textarea
          name="remark"
          rows={3}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Remarks for order processing team..."
        />

        <button
          type="submit"
          className="w-full bg-yellow-300 text-black py-2 px-4 rounded font-semibold hover:bg-yellow-400 transition"
        >
          Add Order & Pay Now
        </button>

        {emailStatus && <p className="mt-3 text-sm">{emailStatus}</p>}
      </form>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
        <ImageSliderPage />
        {submittedData && (
          <div className="w-full mt-10 flex flex-col items-center">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full">
              <h3 className="text-xl font-bold mb-6 text-left uppercase">Your Order Summary</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Product:</strong> {submittedData.product}</li>
                <li><strong>Order Name:</strong> {submittedData.orderName}</li>
                <li><strong>Selected Option:</strong> {submittedData.subitemName} – {submittedData.subitemInfo}</li>
                <li><strong>Quantity:</strong> {submittedData.quantity} (Min {submittedData.minQty})</li>
                <li><strong>Printing:</strong> {submittedData.printing}</li>
                <li><strong>Privacy Packing:</strong> {submittedData.privacy}</li>
                <li><strong>Remark:</strong> {submittedData.remark || "N/A"}</li>
                <li><strong>Cost:</strong> Rs. {submittedData.cost.toFixed(2)}/-</li>
                <li><strong>GST:</strong> Rs. {submittedData.gst.toFixed(2)}/-</li>
                <li className="font-bold"><strong>Total Payable:</strong> Rs. {submittedData.total.toFixed(2)}/-</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
