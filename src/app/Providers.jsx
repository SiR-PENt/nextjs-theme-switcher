"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider attribute="class"> {/* add attriute="class" here */}
      {children}
    </ThemeProvider>
  );
}