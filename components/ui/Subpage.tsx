import type { Locale } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function Subpage({ locale, path, children }: { locale: Locale; path: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar locale={locale} path={path} />
      <main id="conteudo" className="mx-auto min-h-screen max-w-3xl px-5 pb-20 pt-6 sm:px-8">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export function SubSection({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-accent-ink">{titulo}</h2>
      {children}
    </section>
  );
}
