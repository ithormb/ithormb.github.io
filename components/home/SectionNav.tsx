"use client";

import { useEffect, useState } from "react";

// Menu da coluna fixa: marca a seção que está no meio da tela.
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav aria-label="seções" className="hidden lg:block">
      <ul className="mt-16 w-max">
        {items.map((i) => {
          const on = active === i.id;
          return (
            <li key={i.id}>
              <a href={`#${i.id}`} className="group flex items-center py-3" aria-current={on ? "true" : undefined}>
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                    on ? "w-16 bg-ink" : "w-8 bg-muted group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16 group-focus-visible:bg-ink"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    on ? "text-ink" : "text-muted group-hover:text-ink group-focus-visible:text-ink"
                  }`}
                >
                  {i.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
