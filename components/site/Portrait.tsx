import { site } from "@/content/site";
import { withBase } from "@/lib/paths";

// Quadrado que vai de 8% acima da caixa até a base do círculo: nele o círculo tem
// centro em (50%, 58%) e raio de 42%, os mesmos números dos dois clip-paths.
function FotoCamada({ estilo }: { estilo: React.CSSProperties }) {
  return (
    <div className="absolute inset-x-0 bottom-[8%] top-[-8%]" style={estilo} aria-hidden={estilo.clipPath?.toString().startsWith("circle") ? undefined : true}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(site.foto!)}
        alt={estilo.clipPath?.toString().startsWith("circle") ? site.name : ""}
        className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
        width={400}
        height={400}
      />
    </div>
  );
}

// Foto sobre o círculo em degradê; sem foto, as iniciais ocupam o mesmo lugar.
export function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div aria-hidden="true" className="dots absolute -right-2 top-4 h-28 w-28 opacity-60" />
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-gradient-to-br from-[#ffd2ae] via-[#ff9a5a] to-accent" />
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full shadow-[0_30px_80px_-20px_rgba(242,106,27,0.45)]" />
      {site.foto ? (
        <>
          {/* Duas cópias da mesma foto na mesma posição: a de cima mostra tudo acima do
              centro do círculo (cabeça e ombros sem corte); a de baixo, só o que cai
              dentro do círculo. A união dá o recorte do modelo, sem aresta reta. */}
          <FotoCamada estilo={{ clipPath: "inset(0 0 42% 0)" }} />
          <FotoCamada estilo={{ clipPath: "circle(42% at 50% 58%)" }} />
        </>
      ) : (
        <div className="absolute inset-[8%] flex items-center justify-center rounded-full text-7xl font-bold tracking-tight text-white/90">TB</div>
      )}

      {/* card de "código": a regra do hub escrita como objeto */}
      <div className="absolute -right-1 top-[50%] hidden w-52 rounded-xl bg-[#17120e] p-3 font-mono text-[11px] leading-5 text-[#d6cfc7] shadow-2xl sm:block lg:-right-8">
        <div className="mb-1.5 flex items-center justify-between text-[#8a7f76]">
          <span>{"</>"} agente.py</span>
          <span className="flex gap-1">
            <span className="size-2 rounded-full bg-[#fb7185]" />
            <span className="size-2 rounded-full bg-[#fbbf24]" />
            <span className="size-2 rounded-full bg-[#34d399]" />
          </span>
        </div>
        <div><span className="text-white">agente</span> = {"{"}</div>
        <div className="pl-3"><span className="text-[#fdba74]">&quot;fonte&quot;</span>: <span className="text-[#fdba74]">&quot;ERP · MES&quot;</span>,</div>
        <div className="pl-3"><span className="text-[#fdba74]">&quot;sugere&quot;</span>: <span className="text-[#fdba74]">&quot;modelo&quot;</span>,</div>
        <div className="pl-3"><span className="text-[#fdba74]">&quot;decide&quot;</span>: <span className="text-[#fdba74]">&quot;código&quot;</span>,</div>
        <div className="pl-3"><span className="text-[#fdba74]">&quot;confirma&quot;</span>: <span className="text-[#fdba74]">&quot;pessoa&quot;</span>,</div>
        <div>{"}"}</div>
      </div>

      {/* selo de números */}
      <div className="absolute bottom-[10%] -left-1 flex items-center gap-3 rounded-xl border border-rule bg-surface px-4 py-3 shadow-[0_12px_30px_-10px_rgba(23,18,14,0.25)] lg:-left-6">
        <span className="font-mono text-2xl font-semibold text-ink">135</span>
        <span className="text-xs leading-tight text-ink-2">workflows<br />em produção</span>
      </div>
    </div>
  );
}
