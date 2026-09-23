import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// next/font baixa as fontes no build e serve do próprio site: sem requisição externa.
// Fraunces (títulos) + IBM Plex (texto e código): fora do par Inter/Geist dos templates.
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", weight: ["500", "600", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex", display: "swap", weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", display: "swap", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Thomas Barbosa",
  description: "Dados, IA e automação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh leading-relaxed">{children}</body>
    </html>
  );
}
