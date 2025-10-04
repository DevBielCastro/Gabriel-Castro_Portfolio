"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// A correção está nesta linha: importamos o tipo diretamente de "next-themes"
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

