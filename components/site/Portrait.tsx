import { site } from "@/content/site";
import { hub } from "@/content/hub";
import { numeros } from "@/content/automacoes";
import { withBase } from "@/lib/paths";
import { t, type Locale } from "@/lib/i18n";
import { StatIcon } from "./Icon";

// Selo flutuante com um número que vende: ícone laranja, número grande, rótulo curto.
function Chip({ valor, rotulo, icone, className, delay }: { valor: string; rotulo: string; icone: "chart" | "bot" | "flow"; className: string; delay: string }) {
  return (
    <div
      className={`float absolute z-20 flex items-center gap-2 rounded-xl border border-rule bg-surface px-2.5 py-2 shadow-[0_18px_40px_-16px_rgba(23,18,14,0.35)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-white sm:size-10 sm:rounded-xl"><StatIcon kind={icone} /></span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold text-ink sm:text-2xl">{valor}</span>
        <span className="block text-[0.65rem] text-ink-2 sm:text-xs">{rotulo}</span>
      </span>
    </div>
  );
}

// Foto em um arco laranja: a cabeça passa do topo do arco e a base apoia na base dele.
export function Portrait({ locale }: { locale: Locale }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px]">
      <div aria-hidden="true" className="dots absolute -left-6 top-6 h-32 w-32 opacity-70" />
      <div aria-hidden="true" className="absolute inset-x-[2%] bottom-[-3%] top-[6%] rounded-t-full border-2 border-dashed border-accent/35" />
      <div aria-hidden="true" className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-full bg-gradient-to-b from-[#ffb37a] via-accent to-accent-2 shadow-[0_40px_80px_-30px_rgba(242,106,27,0.6)]" />
      {site.foto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={withBase(site.foto)}
          alt={site.name}
          width={400}
          height={400}
          className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto max-w-none -translate-x-1/2 drop-shadow-[0_20px_30px_rgba(23,18,14,0.25)]"
        />
      ) : (
        <div className="absolute inset-x-[8%] bottom-0 top-[14%] z-10 flex items-center justify-center rounded-t-full text-7xl font-bold text-white/90">TB</div>
      )}
      <Chip valor="8+" rotulo={t("chip_years", locale)} icone="chart" className="-left-10 top-[28%] sm:-left-10" delay="0s" />
      <Chip valor={`${Math.floor(numeros.workflows / 10) * 10}+`} rotulo={t("chip_auto", locale)} icone="flow" className="-right-10 top-[52%] sm:-right-10" delay="1.2s" />
      <Chip valor={String(hub.agentes.length)} rotulo={t("chip_agents", locale)} icone="bot" className="-left-8 bottom-[6%] sm:-left-6" delay="2.4s" />
    </div>
  );
}
