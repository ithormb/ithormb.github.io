export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-accent/30 bg-accent-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent-ink">
      {children}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Band({ id, children, alt = false }: { id?: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`border-t border-rule/60 ${alt ? "bg-surface/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">{children}</div>
    </section>
  );
}
