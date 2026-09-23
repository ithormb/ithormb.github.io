import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";
import { TechIcon } from "./Icon";

export function Skills({ locale }: { locale: Locale }) {
  return (
    <Band id="tecnologias">
      <SectionHeader eyebrow={t("nav_skills", locale)} title={t("skills_title", locale)} center />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {site.tecnologias.map((g, i) => (
          <div
            key={g.grupo.pt}
            className={`rounded-2xl border border-rule bg-surface p-6 shadow-[0_8px_24px_-16px_rgba(23,18,14,0.25)] ${i < 2 ? "lg:col-span-3 lg:border-accent/30" : "lg:col-span-2"} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-ink">{g.grupo[locale]}</h3>
            <p className="mt-1 text-xs text-muted">{g.nota[locale]}</p>
            <ul className={`mt-5 grid grid-cols-2 gap-3 ${i < 2 ? "lg:grid-cols-3" : ""}`}>
              {g.itens.map((n) => (
                <li key={n} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-rule bg-surface-2/60"><TechIcon nome={n} size={20} /></span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Band>
  );
}
