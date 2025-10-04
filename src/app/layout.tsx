import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";

const sora = Sora({ subsets: ["latin"] });

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sora.className} 
          bg-white text-slate-800
          dark:bg-[#0d1117] dark:text-slate-200 
          transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            {/* A margem à esquerda (ml-80) cria o espaço para a Sidebar */}
            <main className="ml-80 w-full p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

