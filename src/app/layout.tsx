import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Castro | Desenvolvedor Fullstack",
  description: "Portfólio de Gabriel Castro, um desenvolvedor Fullstack apaixonado por criar soluções inovadoras e eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      {/* A paleta de cores foi atualizada aqui */}
      <body className={`${sora.className} bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Este é o gradiente de fundo decorativo */}
          <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-900">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(0,100,255,0.2)] opacity-50 blur-[80px]"></div>
          </div>
          
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

