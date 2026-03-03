"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
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
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          phone,
          location,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Signup failed");
      } else {
        // ✅ Save password temporarily for auto-login after OTP verification
        sessionStorage.setItem("loginPassword", password);

        router.push(
          `/verify-otp?email=${encodeURIComponent(email)}&callbackUrl=${encodeURIComponent(callbackUrl)}`
        );
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }

    // Countdown timer to re-enable button
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-lg border border-yellow-100 w-full max-w-md">
        <div className="mt-auto bg-yellow-400 px-3 py-2 flex justify-between items-center text-xs font-medium text-black rounded-t-lg">
          <p>Good to see you at Brandfly</p>
          <div className="px-2 py-0.5 text-[10px] font-semibold text-black bg-white rounded">
            ⭐ Signup
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-xl p-8">
          <h1 className="text-2xl font-bold mb-4 text-black">Create Your Account</h1>
          <p className="text-sm text-gray-600 mb-4">Sign up to access the Brandfly platform</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name"
                className="w-1/2 px-4 py-3 border text-black rounded-lg"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 border text-black rounded-lg"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />

            <input
              type="text"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />

            <input
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-3 border text-black rounded-lg"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full text-black py-3 rounded-3xl font-semibold transition ${
                isSending ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-400"
              }`}
            >
              {isSending ? `Wait ${timer}s` : "Sign Up"}
            </button>
          </form>

          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}
              className="text-blue-700 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
