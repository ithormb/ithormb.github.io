export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-ink">{children}</span>;
}

export function SectionHeader({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <span aria-hidden="true" className={`mt-4 block h-1 w-12 rounded-full bg-accent ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Band({ id, children, alt = false }: { id?: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`border-t border-rule ${alt ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">{children}</div>
    </section>
  );
}
