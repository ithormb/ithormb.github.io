import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";

// Faixa de credibilidade: onde a trajetória foi construída, em nomes, sem logos de terceiros.
export function TrustBar({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-rule bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:px-8 md:flex-row md:gap-10">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-accent">{t("trust_label", locale)}</p>
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-7 gap-y-2 md:justify-start">
          {site.trajetoria.map((n) => (
            <li key={n} className="font-display text-lg font-semibold text-white/85 lg:text-xl">{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
