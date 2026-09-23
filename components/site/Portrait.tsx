import { site } from "@/content/site";
import { withBase } from "@/lib/paths";

// Foto sobre o círculo em degradê; sem foto, as iniciais ocupam o mesmo lugar.
export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div aria-hidden="true" className="dots absolute -right-2 top-4 h-28 w-28 opacity-60" />
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-gradient-to-br from-accent via-accent-2 to-[#1e1b4b] opacity-90 blur-[2px]" />
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full shadow-[0_0_120px_40px_rgba(124,58,237,0.35)]" />
      {site.foto ? (
        // Recorte sem fundo: a base acompanha a curva do círculo e a cabeça pode passar da borda de cima.
        <div className="absolute inset-x-[8%] bottom-[8%] top-[-14%] overflow-hidden rounded-b-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase(site.foto)} alt={site.name} className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain" width={800} height={800} />
        </div>
      ) : (
        <div className="absolute inset-[8%] flex items-center justify-center rounded-full text-7xl font-bold tracking-tight text-white/90">TB</div>
      )}

      {/* card de "código": a regra do hub escrita como objeto */}
      <div className="absolute -right-1 top-[50%] hidden w-52 rounded-xl border border-rule bg-surface/95 p-3 font-mono text-[11px] leading-5 shadow-2xl backdrop-blur sm:block lg:-right-8">
        <div className="mb-1.5 flex items-center justify-between text-muted">
          <span>{"</>"} agente.py</span>
          <span className="flex gap-1">
            <span className="size-2 rounded-full bg-c3/70" />
            <span className="size-2 rounded-full bg-c2/70" />
            <span className="size-2 rounded-full bg-c1/70" />
          </span>
        </div>
        <div><span className="text-ink">agente</span> = {"{"}</div>
        <div className="pl-3"><span className="text-c1">&quot;fonte&quot;</span>: <span className="text-c1">&quot;ERP · MES&quot;</span>,</div>
        <div className="pl-3"><span className="text-c1">&quot;sugere&quot;</span>: <span className="text-c1">&quot;modelo&quot;</span>,</div>
        <div className="pl-3"><span className="text-c1">&quot;decide&quot;</span>: <span className="text-c1">&quot;código&quot;</span>,</div>
        <div className="pl-3"><span className="text-c1">&quot;confirma&quot;</span>: <span className="text-c1">&quot;pessoa&quot;</span>,</div>
        <div>{"}"}</div>
      </div>

      {/* selo de números */}
      <div className="absolute bottom-[10%] -left-1 flex items-center gap-3 rounded-xl border border-rule bg-surface/95 px-4 py-3 shadow-2xl backdrop-blur lg:-left-6">
        <span className="font-mono text-2xl font-semibold text-ink">135</span>
        <span className="text-xs leading-tight text-ink-2">workflows<br />em produção</span>
      </div>
    </div>
  );
}
