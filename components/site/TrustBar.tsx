import { site } from "@/content/site";
import { withBase } from "@/lib/paths";
import { t, type Locale } from "@/lib/i18n";

// Faixa baixa com dois blocos separados: onde trabalhei e onde estudei.
// O papel em cada lugar fica no title (aparece ao passar o mouse).
function Grupo({ rotulo, itens, locale }: { rotulo: string; itens: typeof site.trajetoria; locale: Locale }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-ink">{rotulo}</span>
      <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        {itens.map((i) => (
          <li key={i.nome} title={`${i.nome} · ${i.legenda[locale]}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase(i.logo)} alt={`${i.nome} — ${i.legenda[locale]}`} className="h-7 w-auto max-w-[110px] object-contain sm:h-8" loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustBar({ locale }: { locale: Locale }) {
  const carreira = site.trajetoria.filter((i) => i.tipo === "carreira");
  const formacao = site.trajetoria.filter((i) => i.tipo === "formacao");
  return (
    <section className="border-y border-rule bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-5 py-6 sm:px-8 lg:flex-row lg:gap-10">
        <Grupo rotulo={t("trust_career", locale)} itens={carreira} locale={locale} />
        <span aria-hidden="true" className="hidden h-8 w-px bg-rule lg:block" />
        <span aria-hidden="true" className="h-px w-16 bg-rule lg:hidden" />
        <Grupo rotulo={t("trust_edu", locale)} itens={formacao} locale={locale} />
      </div>
    </section>
  );
}
