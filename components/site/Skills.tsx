import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";
import { TechIcon } from "./Icon";

export function Skills({ locale }: { locale: Locale }) {
  return (
    <Band id="tecnologias">
      <SectionHeader eyebrow={t("nav_skills", locale)} title={t("skills_title", locale)} center />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {site.tecnologias.map((g) => (
          <div key={g.grupo.pt} className="rounded-2xl border border-rule bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-ink">{g.grupo[locale]}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {g.itens.map((n) => (
                <li key={n} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white"><TechIcon nome={n} size={20} /></span>
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
