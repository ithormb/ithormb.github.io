import Link from "next/link";
import { listarProjetos } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

// Índice, não cards: numeração, título grande, tese em itálico, stack em mono.
export function ProjectIndex({ locale }: { locale: Locale }) {
  return (
    <ol className="-mt-4">
      {listarProjetos().map((p, i) => (
        <li key={p.slug} className="group border-b border-rule last:border-b-0">
          <Link
            href={`/${locale}/projetos/${p.slug}/`}
            className="grid gap-3 py-7 sm:grid-cols-[56px_1fr_auto] sm:gap-6"
          >
            <span className="font-mono text-sm text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="font-serif text-2xl leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                {p.titulo[locale]}
                {p.destaque && (
                  <span className="ml-3 align-middle font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent">
                    {t("in_production", locale)}
                  </span>
                )}
              </h3>
              <p className="mt-2 max-w-[42rem] leading-relaxed text-ink-2">{p.resumo[locale]}</p>
              <p className="mt-3 font-serif italic text-ink">“{p.tese[locale]}”</p>
              <p className="mt-3 font-mono text-xs text-muted">{p.stack.join("  ·  ")}</p>
            </div>
            <span
              aria-hidden="true"
              className="hidden self-start pt-2 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
