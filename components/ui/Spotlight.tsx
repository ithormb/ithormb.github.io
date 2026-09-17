"use client";

import { useEffect, useRef } from "react";

// Halo suave que acompanha o cursor. Só em telas com mouse e sem redução de movimento.
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";
    const move = (e: PointerEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.14), transparent 80%)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500" />;
}
