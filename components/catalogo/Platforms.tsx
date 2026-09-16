import { plataformas } from "@/content/automacoes";
import type { Locale } from "@/lib/i18n";

export function Platforms({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {plataformas.map((p) => (
        <div key={p.categoria.pt}>
          <h3 className="eyebrow">{p.categoria[locale]}</h3>
          <ul className="mt-3 space-y-1.5">
            {p.itens.map((i) => (
              <li key={i} className="text-[0.95rem] text-ink-2">{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
