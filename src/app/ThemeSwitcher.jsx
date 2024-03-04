"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {

  const [mounted, setMounted] = useState();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <p>Active Theme is: {theme}</p>
      <button onClick={() => setTheme("light")}>Light theme</button>
      <button onClick={() => setTheme("dark")}>Dark theme</button>
    </>
  );
}