import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// next/font baixa a fonte no build e serve do próprio site: sem requisição externa.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Thomas Barbosa",
  description: "Dados, IA e automação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-dvh leading-relaxed">{children}</body>
    </html>
  );
}
