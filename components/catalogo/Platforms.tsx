import { plataformas } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

export function Platforms({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {plataformas.map((p) => (
        <div key={p.categoria.pt}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink">{p.categoria[locale]}</h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {p.itens.map((i) => (
              <li key={i} className="rounded-full border border-rule px-3 py-1 text-xs text-ink-2">{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
