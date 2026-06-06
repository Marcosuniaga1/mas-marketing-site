"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, BRAND, INSTAGRAM_URL } from "@/lib/utils";
import { InstagramIcon } from "./icons";

const LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#local", label: "Negocios locales" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#casos", label: "Casos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/#contacto", label: "Contacto" },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#060606]/80 border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[68px] flex items-center justify-between">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label={`${BRAND.name} · ir al inicio`}
          >
            <span
              aria-hidden="true"
              className="relative grid h-12 w-12 place-items-center rounded-full overflow-hidden border border-[var(--gold)]/40 bg-black transition-all duration-500 group-hover:border-[var(--gold)] group-hover:shadow-[0_0_0_4px_var(--gold-soft)]"
            >
              <Image
                src="/logo.png"
                alt="MAS Marketing Agency"
                width={48}
                height={48}
                priority
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-[var(--font-sora)] font-bold tracking-tight text-[15px] sm:text-base">
              {BRAND.short}
              <span className="text-[var(--gold)]"> marketing</span>
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-7 text-sm text-[var(--muted-foreground)]"
            aria-label="Navegación principal"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-animated hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de MAS Marketing Agency"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--muted-foreground)] hover:text-white hover:border-[var(--gold)]/60 transition-all"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shine group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-black font-semibold text-sm hover:bg-[var(--gold-bright)] transition-colors"
            >
              Hablemos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--border-strong)] text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-[#040404]/95 backdrop-blur-xl pt-[68px]"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="reveal text-3xl font-[var(--font-sora)] font-semibold text-white py-3 border-b border-[var(--border)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-black font-semibold"
              >
                Hablemos por WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border-strong)] text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
