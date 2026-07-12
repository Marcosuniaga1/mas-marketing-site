"use client";

import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function RoadmapHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const base = "transition-all duration-700 ease-[cubic-bezier(0.16,0.84,0.35,1)]";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 roadmap-hero-bg" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div
          className={`${base} ${visible ? shown : hidden} inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/20 bg-[#3b82f6]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#3b82f6]`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Lead Magnet · Emprendedores 360
        </div>

        <h1
          className={`${base} delay-100 ${visible ? shown : hidden} mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white`}
        >
          Tu roadmap de 90 días{" "}
          <span className="roadmap-blue-gradient">
            para lanzar tu negocio digital.
          </span>
        </h1>

        <p
          className={`${base} delay-200 ${visible ? shown : hidden} mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed`}
        >
          Deja tu nombre y correo.{" "}
          <span className="text-white font-medium">
            Recibe gratis un plan de acción personalizado
          </span>{" "}
          con los pasos exactos para monetizar tu conocimiento.
        </p>

        <div
          className={`${base} delay-300 ${visible ? shown : hidden} mt-10 flex flex-wrap items-center gap-3`}
        >
          <a
            href="#obtener-roadmap"
            className="roadmap-cta-btn inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Quiero mi roadmap gratis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/emprendedores-360"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#3b82f6]/50 hover:text-[#60a5fa]"
          >
            Conocer el programa completo
          </a>
        </div>

        <div
          className={`${base} delay-[400ms] ${visible ? shown : hidden} mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]`}
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            100% gratis
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            Personalizado para tu nicho
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
            Entrega en 48 horas
          </span>
        </div>
      </div>
    </section>
  );
}
