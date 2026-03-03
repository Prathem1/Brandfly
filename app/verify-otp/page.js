"use client"; 

import { Suspense } from "react";
import OTPPage from "./OTPPage"; 

export default function VerifyOTP() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPPage />
    </Suspense>
  );
}
