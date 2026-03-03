"use client";

import { Suspense } from "react";
import AddOrderPage from "./AddOrderPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-black">Loading...</div>}>
      <AddOrderPage />
    </Suspense>
  );
}
