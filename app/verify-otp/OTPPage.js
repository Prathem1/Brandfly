"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // 1️⃣ Verify OTP
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) return setMessage(data.error || "Invalid OTP");

      // 2️⃣ Get password from sessionStorage
      const password = sessionStorage.getItem("loginPassword");
      if (!password) return setMessage("Password missing. Please login again.");

      // 3️⃣ Sign in using NextAuth credentials
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // ⚠ important: prevent automatic redirect
      });

      if (result.error) {
        setMessage(result.error);
        return;
      }

      // 4️⃣ Clear password from sessionStorage
      sessionStorage.removeItem("loginPassword");

      // 5️⃣ Redirect manually
      router.push(callbackUrl);

    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center py-10 px-2 md:px-0">
      <div>
        <div className="mt-auto bg-yellow-400 px-3 py-2 flex justify-between items-center text-xs font-medium text-black">
          <p>Good to see you at Brandfly</p>
          <div className="px-2 py-0.5 text-[10px] font-semibold text-black bg-white rounded">
            ⭐OTP
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-2xl font-bold mb-6 text-left text-black">Enter OTP</h1>
          <p className="text-left text-sm text-gray-700 mb-4 -mt-2">
            Please enter the 6-digit OTP sent to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="6-digit OTP"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-3xl"
            >
              Verify OTP
            </button>
          </form>

          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}
