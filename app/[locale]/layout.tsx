import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="mx-auto flex min-h-dvh max-w-[1120px] flex-col px-5 sm:px-8">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        {locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <Header locale={locale} />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
