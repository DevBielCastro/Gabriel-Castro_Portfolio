import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabriel Castro | Desenvolvedor Fullstack",
  description:
    "Portfólio de Gabriel Castro, um desenvolvedor Fullstack apaixonado por criar soluções inovadoras e eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      {}
      <body
        className={`${inter.variable} font-sans 
          bg-app-light text-slate-800
          dark:bg-app-dark dark:text-slate-200 
          transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <main className="ml-80 w-full p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

