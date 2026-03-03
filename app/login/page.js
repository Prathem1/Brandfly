"use client";

import { Suspense } from "react";
import LoginForm from "./login";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
