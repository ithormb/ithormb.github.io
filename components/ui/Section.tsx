export function Section({
  numero,
  titulo,
  id,
  children,
}: {
  numero: string;
  titulo: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rule scroll-mt-24 py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-10">
        <h2 className="eyebrow flex items-baseline gap-3 text-ink">
          <span className="text-accent">{numero}</span>
          {titulo}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
