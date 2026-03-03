"use client";

import { Suspense } from "react";
import ResetPasswordForm from "./ResetPasswordForm"; // filename must match exactly

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
