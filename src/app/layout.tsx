import React from 'react'; // <-- ADICIONE ESTA LINHA
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "Gabriel Castro | Desenvolvedor Fullstack",
  description:
    "Portfólio de Gabriel Castro, um desenvolvedor Fullstack apaixonado por criar soluções inovadoras e eficientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans 
          bg-app-light text-slate-800
          dark:bg-app-dark dark:text-text-light 
          transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="flex">
            <div className="dark:bg-surface-dark">
              <Sidebar />
            </div>
            <main className="ml-80 w-full p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}