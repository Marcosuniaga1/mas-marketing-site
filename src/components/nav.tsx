"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { WHATSAPP_URL, BRAND, INSTAGRAM_URL } from "@/lib/utils";
import { InstagramIcon } from "./icons";

type NavLink = { href: string; label: string };
type NavItem =
  | NavLink
  | { label: string; href?: string; children: NavLink[] };

const LINKS: NavItem[] = [
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { href: "/auditoria-gratuita", label: "Auditoría Gratuita" },
      { href: "/paginas-web", label: "Páginas Web" },
      { href: "/campanas-digitales", label: "Campañas Digitales" },
      { href: "/seo-posicionamiento", label: "SEO & Posicionamiento" },
      { href: "/branding", label: "Branding" },
      { href: "/agentes-whatsapp", label: "Agentes WhatsApp" },
      { href: "/emprendedores-360", label: "Emprendedores 360" },
      { href: "/#local", label: "Negocios locales" },
    ],
  },
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
            {LINKS.map((l) => {
              if ("children" in l) {
                return (
                  <div
                    key={l.label}
                    className="group relative"
                  >
                    <a
                      href={l.href ?? "#"}
                      className="link-animated inline-flex items-center gap-1 hover:text-white transition-colors"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {l.label}
                      <ChevronDown className="h-3.5 w-3.5 text-[var(--gold)] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </a>
                    <div
                      className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 z-50"
                      role="menu"
                    >
                      <div className="min-w-[240px] rounded-2xl border border-[var(--border-strong)] bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] p-2">
                        {l.children.map((c) => (
                          <a
                            key={c.href}
                            href={c.href}
                            role="menuitem"
                            className="block px-4 py-3 rounded-xl text-sm text-[var(--muted-foreground)] hover:bg-[var(--gold-soft)] hover:text-white focus-visible:bg-[var(--gold-soft)] focus-visible:text-white outline-none transition-colors"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="link-animated hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              );
            })}
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
            {LINKS.map((l, i) => {
              if ("children" in l) {
                return (
                  <details
                    key={l.label}
                    className="group reveal py-3 border-b border-[var(--border)]"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-3xl font-[var(--font-sora)] font-semibold text-white">
                      {l.label}
                      <ChevronDown className="h-6 w-6 text-[var(--gold)] transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="mt-4 pl-4 flex flex-col gap-1 border-l border-[var(--gold)]/30">
                      {l.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-lg text-[var(--muted-foreground)] hover:text-white py-2 pl-4 transition-colors"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="reveal text-3xl font-[var(--font-sora)] font-semibold text-white py-3 border-b border-[var(--border)]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {l.label}
                </a>
              );
            })}
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
