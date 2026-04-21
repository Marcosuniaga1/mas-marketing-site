"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, BRAND } from "@/lib/utils";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre la doctora" },
  { href: "#galeria", label: "Casos reales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 py-4"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-semibold"
          >
            C
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[14px] sm:text-[15px] font-semibold tracking-tight text-foreground">
              {BRAND.name}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {BRAND.doctor}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-muted transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 sm:px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_6px_20px_-8px_rgba(13,127,122,0.6)] hover:bg-primary-hover transition"
            aria-label="Agendar cita por WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={2.25} aria-hidden="true" />
            <span className="hidden sm:inline">Agendar por WhatsApp</span>
            <span className="sm:hidden">Agendar</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-muted transition"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-border bg-background"
        >
          <ul className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-foreground/90 hover:bg-muted transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
