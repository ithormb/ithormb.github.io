import Link from "next/link";
import type { Locale, Text } from "@/lib/i18n";

// Cabeçalho de vitrine: nome grande, resumo, stack e link para a página completa.
export function Showcase({
  locale,
  nome,
  resumo,
  stack,
  href,
  linkLabel,
  children,
}: {
  locale: Locale;
  nome: Text;
  resumo: Text;
  stack?: string[];
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">{nome[locale]}</h3>
      <p className="mt-4 max-w-[46rem] leading-relaxed text-ink-2">{resumo[locale]}</p>
      {stack && <p className="mt-3 font-mono text-xs text-muted">{stack.join("  ·  ")}</p>}
      <div className="mt-8">{children}</div>
      {href && (
        <Link href={href} className="link-ul mt-6 inline-flex min-h-10 items-center active:scale-95">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
