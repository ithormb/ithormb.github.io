import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// next/font baixa as fontes no build e serve do próprio site: sem requisição externa.
// Fraunces (títulos) + IBM Plex (texto e código): fora do par Inter/Geist dos templates.
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", weight: ["500", "600", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex", display: "swap", weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", display: "swap", weight: ["400", "500", "600"] });

// metadataBase torna absolutas as URLs do cartão de compartilhamento (LinkedIn e WhatsApp exigem).
export const metadata: Metadata = {
  metadataBase: new URL("https://ithormb.github.io"),
  title: "Thomas Barbosa — Especialista em Dados, IA & Automações",
  description: "Lidero o time de Dados e IA do Grupo Raposo Plásticos: automações, agentes de IA e painéis de BI, do ERP ao painel de decisão. Antes, Solar Coca-Cola e Arco Educação.",
  openGraph: {
    type: "website",
    siteName: "Thomas Barbosa",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Thomas Barbosa — Especialista em Dados, IA & Automações" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh leading-relaxed">{children}</body>
    </html>
  );
}
