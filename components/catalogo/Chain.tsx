import type { Passo } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

const estilo: Record<Passo["tipo"], string> = {
  gatilho: "border-dashed border-muted text-ink-2",
  fonte: "border-rule text-ink-2",
  processo: "border-c2/60 text-ink",
  saida: "border-accent/60 text-accent",
};

export function Chain({ passos, locale }: { passos: Passo[]; locale: Locale }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[0.7rem]">
      {passos.map((s, i) => (
        <li key={i} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-1.5 text-muted">→</span>}
          <span className={`rounded border px-2 py-0.5 ${estilo[s.tipo]}`}>{s.label[locale]}</span>
        </li>
      ))}
    </ol>
  );
}
