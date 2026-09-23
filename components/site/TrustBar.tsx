import { site } from "@/content/site";
import { withBase } from "@/lib/paths";
import { t, type Locale } from "@/lib/i18n";

// Faixa de credibilidade: logo de cada instituição, com o papel que tive nela.
export function TrustBar({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-accent-ink">{t("trust_label", locale)}</p>
        <ul className="mt-8 grid grid-cols-2 items-end gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {site.trajetoria.map((i) => (
            <li key={i.nome} className="flex flex-col items-center text-center">
              <span className="flex h-14 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBase(i.logo)} alt={i.nome} className="max-h-14 w-auto max-w-[170px] object-contain" loading="lazy" />
              </span>
              <span className="mt-3 text-xs leading-snug text-ink-2">{i.legenda[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
