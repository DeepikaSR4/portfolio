"use client";

import { useState } from "react";
import Loader from "@/components/loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <Loader onFinish={() => setLoading(false)} /> : children}
    </>
  );
}
