import Link from "next/link";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

// Moldura das páginas internas: uma coluna, volta para a home e troca de idioma.
export function Subpage({ locale, path, children }: { locale: Locale; path: string; children: React.ReactNode }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-3xl px-6 py-12 md:px-12 md:py-20">
      <div className="flex items-center justify-between">
        <Link href={`/${locale}/`} className="group inline-flex min-h-10 items-center gap-2 font-semibold text-accent active:scale-95">
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1 motion-reduce:transition-none">←</span>
          {site.name}
        </Link>
        <Link
          href={`/${other}${path}`}
          hrefLang={other}
          className="flex h-10 items-center rounded-full border border-rule px-3 text-xs font-bold uppercase tracking-widest text-ink-2 transition-colors hover:border-ink-2 hover:text-ink active:scale-95"
        >
          {other}
        </Link>
      </div>
      <main id="conteudo">{children}</main>
    </div>
  );
}

export function SubSection({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-ink">{titulo}</h2>
      {children}
    </section>
  );
}
