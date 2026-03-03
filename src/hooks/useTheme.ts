"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/components/ThemeProvider";

export function useTheme() {
  return useContext(ThemeContext);
}
