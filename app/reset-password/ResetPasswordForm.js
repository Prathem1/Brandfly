"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function ResetPasswordForm() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Reset failed");
        return;
      }
      router.push("/login");
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
            ⭐Reset Password
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-2xl font-bold mb-6 text-left text-black">Reset Password</h1>
          <p className="text-left text-sm text-gray-700 mb-4 -mt-2">
            Enter the OTP sent to your email and set a new password
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 border text-black rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border text-black rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-3xl"
            >
              Reset Password
            </button>
          </form>

          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}

          <p className="mt-6 text-center text-sm text-gray-700">
            Back to{" "}
            <a href="/login" className="text-blue-700 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
