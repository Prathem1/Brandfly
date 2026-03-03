"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [timer, setTimer] = useState(0);

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // prevent multiple clicks
    setMessage("");
    setIsSending(true);
    setTimer(15); // 15 seconds countdown

    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Failed to send OTP");
      } else {
        router.push(
          `/reset-password?email=${encodeURIComponent(email)}&callbackUrl=${encodeURIComponent(callbackUrl)}`
        );
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }

    // Countdown timer for re-enabling button
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSending(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center py-10 px-2 md:px-0">
      <div className="rounded-lg border border-yellow-100">
        {/* Feature & Rating */}
        <div className="mt-auto bg-yellow-400 px-3 py-2 flex justify-between items-center text-xs font-medium text-black">
          <p>Good to see you at Brandfly</p>
          <div className="px-2 py-0.5 text-[10px] font-semibold text-black bg-white rounded">
            ⭐Forgot Password
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-2xl font-bold mb-6 text-left text-black">Forgot Password</h1>
          <p className="text-left text-sm text-gray-700 mb-4 -mt-2">
            Enter your registered email to reset your password
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`w-full text-black py-3 rounded-3xl font-semibold transition ${
                isSending ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400"
              }`}
            >
              {isSending ? `Wait ${timer}s` : "Send OTP"}
            </button>
          </form>

          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}

          <p className="mt-6 text-center text-sm text-gray-700">
            Remembered your password?{" "}
            <a
              href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}
              className="text-blue-700"
            >
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
