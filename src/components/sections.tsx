"use client";

import { useState, useRef, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Search,
  Palette,
  Share2,
  MailCheck,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Star,
  Plus,
  Minus,
  Phone,
  Mail,
  MapPin,
  LineChart,
  Users,
  Clock3,
  TrendingUp,
  Camera,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { FAQS } from "./faqs";
import {
  WHATSAPP_URL,
  BRAND,
  INSTAGRAM_URL,
  whatsappLinkWith,
} from "@/lib/utils";
import { InstagramIcon } from "./icons";

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section
      id="top"
      className="relative hero-bg grain overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-10">
          <div className="flex-1 max-w-3xl">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.03] px-3.5 py-1.5 text-xs sm:text-sm text-[var(--muted-foreground)] backdrop-blur hover:border-[var(--gold)]/50 hover:text-white transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-60" />
                <span className="relative rounded-full bg-[var(--gold)] h-2 w-2" />
              </span>
              Agenda activa · síguenos en Instagram
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <h1
              className="reveal font-[var(--font-sora)] mt-6 text-[44px] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-[-0.03em] text-white"
              style={{ animationDelay: "80ms" }}
            >
              Marketing que{" "}
              <span className="text-gold-gradient">convierte</span>.
              <br />
              Webs que{" "}
              <span className="italic font-[var(--font-sora)] font-light text-white/90">
                venden
              </span>
              .
            </h1>

            <p
              className="reveal mt-7 max-w-xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed"
              style={{ animationDelay: "180ms" }}
            >
              Somos el equipo que diseña tu página, lanza tus campañas y mide
              cada peso invertido. Sin promesas vacías — solo resultados que
              puedes ver en tu cuenta bancaria.
            </p>

            <div
              className="reveal mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              style={{ animationDelay: "280ms" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-black font-semibold hover:bg-[var(--gold-bright)] transition-all shadow-[0_14px_40px_-12px_var(--gold-glow)]"
              >
                Quiero mi página web
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.03] px-7 py-4 text-white font-medium hover:border-white/40 hover:bg-white/[0.06] transition-all"
              >
                Ver servicios
              </a>
            </div>

            <div
              className="reveal mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg"
              style={{ animationDelay: "380ms" }}
            >
              <HeroStat value="+50" label="Proyectos entregados" />
              <HeroStat value="4.8×" label="ROAS promedio" />
              <HeroStat value="7-21d" label="Tiempo de entrega" />
            </div>
          </div>

          <div
            className="reveal relative flex-1 w-full max-w-md lg:max-w-none"
            style={{ animationDelay: "220ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-[var(--subtle-foreground)] leading-tight">
        {label}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full">
      {/* Back card (metrics) */}
      <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)]/70 backdrop-blur-sm" />

      {/* Front card (browser mock) */}
      <div className="absolute inset-0 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[#141414] to-[#0a0a0a] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="ml-3 text-[11px] text-[var(--subtle-foreground)] font-mono">
            masmarketingagency.com
          </span>
        </div>
        <div className="p-5 sm:p-6 flex flex-col gap-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
              Dashboard live
            </div>
            <div className="mt-1 text-sm font-semibold text-white">
              Campaña abril — Ads + Landing
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MiniStat label="Conversiones" value="1,284" trend="+38%" />
            <MiniStat label="ROAS" value="6.2×" trend="+1.4" />
            <MiniStat label="CPL" value="$1.42" trend="-22%" negative />
            <MiniStat label="CTR" value="4.8%" trend="+0.7" />
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-black/40 p-4">
            <div className="flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
              <span>Ingresos generados</span>
              <span className="text-[var(--gold)] font-semibold">+$18,420</span>
            </div>
            <div className="mt-3 flex items-end gap-1 h-14">
              {[28, 36, 32, 44, 58, 52, 68, 74, 82, 72, 92, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-bright)] opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -left-4 sm:-left-6 top-10 rounded-xl border border-[var(--border-strong)] bg-[#0c0c0c] px-3.5 py-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-[var(--subtle-foreground)] uppercase tracking-wide">
              Nueva conversión
            </div>
            <div className="text-xs text-white font-medium">
              Lead + $240 ticket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  trend,
  negative,
}: {
  label: string;
  value: string;
  trend: string;
  negative?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-black/30 p-3">
      <div className="text-[10px] text-[var(--subtle-foreground)] uppercase tracking-wide">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-lg font-[var(--font-sora)] font-bold text-white">
          {value}
        </span>
        <span
          className={`text-[10px] font-medium ${
            negative ? "text-[#5fd28b]" : "text-[var(--gold)]"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Trust Strip                                 */
/* -------------------------------------------------------------------------- */

const LOGOS = [
  "Delta Studio",
  "Cromo.",
  "NOVA coffee",
  "Vértice",
  "Arum",
  "Pulse Media",
  "Koda",
  "Latitud 7",
  "Mantra",
  "Solaris",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Marcas que confían en nosotros"
      className="relative border-y border-[var(--border)] bg-[var(--surface)] py-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-[var(--subtle-foreground)]">
          Equipos y marcas que han crecido con nosotros
        </p>
      </div>

      <div className="mt-6 overflow-hidden relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent z-10"
          aria-hidden="true"
        />
        <div className="marquee-track flex gap-12 sm:gap-16 whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="font-[var(--font-sora)] text-xl sm:text-2xl font-semibold text-[var(--muted-foreground)]/60 tracking-tight shrink-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Services                                  */
/* -------------------------------------------------------------------------- */

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  href?: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Páginas web",
    desc: "Landing, corporativa o tienda online. Rápidas, con SEO técnico y pensadas para convertir, no solo para verse bonitas.",
    tags: ["Next.js", "Shopify", "WordPress"],
    href: "/paginas-web",
  },
  {
    icon: Megaphone,
    title: "Publicidad digital",
    desc: "Campañas de Meta Ads y Google Ads con creativos, segmentación y reporte claro. Cada peso se mide.",
    tags: ["Meta Ads", "Google Ads", "TikTok"],
    href: "/campanas-digitales",
  },
  {
    icon: Search,
    title: "SEO & posicionamiento",
    desc: "Tráfico orgánico que no caduca. Auditoría técnica, contenido estratégico y autoridad de dominio real.",
    tags: ["On-page", "Link building", "Local SEO"],
    href: "/seo-posicionamiento",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Identidad visual, tono de voz y narrativa. Tu marca deja de parecerse a todas las demás.",
    tags: ["Logo", "Manual", "Rebranding"],
    href: "/branding",
  },
  {
    icon: Share2,
    title: "Redes sociales",
    desc: "Contenido que se guarda, se comparte y convierte seguidores en clientes reales. Instagram, TikTok, LinkedIn.",
    tags: ["Contenido", "Community", "Estrategia"],
  },
  {
    icon: MailCheck,
    title: "Email & automatización",
    desc: "Flujos que venden mientras duermes: bienvenida, recuperación de carrito, reactivación y newsletters.",
    tags: ["Klaviyo", "Mailchimp", "Flujos"],
  },
  {
    icon: MessageCircle,
    title: "Agentes de WhatsApp con IA",
    desc: "Conversación humanizada 24/7. Tu negocio atiende, agenda y convierte mientras duermes.",
    tags: ["IA", "24/7", "Conversacional"],
    href: "/agentes-whatsapp",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title={
            <>
              Todo lo que necesitas para{" "}
              <span className="text-gold-gradient">crecer online</span>
            </>
          }
          description="Un solo equipo que entiende marca, web y publicidad. Menos reuniones entre proveedores y más resultados que mostrar."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Paquete integral
            </p>
            <h3 className="mt-2 font-[var(--font-sora)] text-xl sm:text-2xl font-semibold text-white">
              Página web + campañas desde el día uno
            </h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              Ideal para negocios que quieren lanzar en 30 días y empezar a
              vender rápido.
            </p>
          </div>
          <a
            href={whatsappLinkWith(
              "Hola, me interesa el paquete integral de web + campañas"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shrink-0"
          >
            Solicitar cotización
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <article
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--gold)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
          <Icon className="h-5 w-5" />
        </div>
        {service.href ? (
          <span
            className="grid h-7 w-7 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--gold)] group-hover:border-[var(--gold)] group-hover:bg-[var(--gold-soft)] transition-all"
            aria-hidden="true"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span className="text-[11px] font-mono text-[var(--subtle-foreground)]">
            0{index + 1}
          </span>
        )}
      </div>
      <h3 className="relative mt-6 font-[var(--font-sora)] text-xl font-semibold text-white">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
        {service.desc}
      </p>
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-strong)] text-[var(--muted-foreground)]"
          >
            {t}
          </span>
        ))}
      </div>
      {service.href && (
        <Link
          href={service.href}
          aria-label={`Ver más sobre ${service.title}`}
          className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
        />
      )}
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Audit Local (NEW)                             */
/* -------------------------------------------------------------------------- */

const LOCAL_SERVICES = [
  {
    icon: MapPin,
    title: "Google Maps + Google My Business",
    desc: "Optimizamos tu ficha: fotos, horarios, categorías, descripción y respuestas automáticas a reviews. Tu negocio aparece arriba cuando buscan en tu zona.",
    bullets: [
      "Optimización completa de ficha",
      "Respuesta a reviews",
      "Publicaciones semanales",
    ],
    hook: "Plan a tu medida según rubro y ubicación.",
    cta: "Cotiza por WhatsApp",
    tag: "Lo que ya buscan",
  },
  {
    icon: Camera,
    title: "Fotografía profesional simple",
    desc: "20-30 fotos de tu local, productos o platos en una sesión de 1-2 horas. Listas para Instagram, WhatsApp y catálogo digital. Vas a usarlas mañana mismo.",
    bullets: [
      "20-30 fotos editadas",
      "Sesión de 1-2 horas",
      "Entrega en 48h",
    ],
    hook: "Sesión personalizada según tu local y productos.",
    cta: "Pídeme tu cotización",
    tag: "Resultado visible",
  },
  {
    icon: FileText,
    title: "Catálogo digital para WhatsApp",
    desc: "PDF profesional o link clickeable con tu menú, precios y fotos. Lo mandas por WhatsApp en un click. La forma más rápida de vender desde el chat.",
    bullets: [
      "Diseño profesional",
      "PDF + versión clickeable",
      "Actualizable",
    ],
    hook: "Costo según cantidad de productos. Cotiza en 5 minutos.",
    cta: "Cotiza tu catálogo",
    tag: "Vende ya",
  },
  {
    icon: Share2,
    title: "Gestión de Instagram",
    desc: "12 posts mensuales + historias + diseño básico. Contenido planificado para que tu Instagram trabaje en piloto automático mientras atiendes el negocio.",
    bullets: [
      "12 posts + historias",
      "Diseño y copy incluidos",
      "Calendario mensual",
    ],
    hook: "Te armamos un plan según frecuencia y alcance.",
    cta: "Pregunta por tu plan",
    tag: "Crecimiento orgánico",
  },
];

const AUDIT_BENEFITS = [
  "Revisión de tu Google My Business",
  "Estado de tu Instagram y WhatsApp Business",
  "Análisis de competencia local",
  "Recomendaciones priorizadas por impacto",
];

export function AuditLocal() {
  return (
    <section
      id="local"
      className="relative py-24 sm:py-32 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--gold)] blur-[140px] opacity-20" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--gold)] blur-[140px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Para negocios locales"
          title={
            <>
              Tu negocio ya tiene{" "}
              <span className="text-gold-gradient">presencia digital</span>.
              <br />
              Hagámosla vender.
            </>
          }
          description="Si ya usas WhatsApp, Instagram o Google Maps, no hace falta empezar de cero. Empezamos por una auditoría gratuita y mejoramos lo que ya tienes — paso a paso, sin gastar en lo que no funciona."
        />

        {/* Featured Audit Card */}
        <div className="mt-14">
          <div className="relative rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold-soft)] via-[var(--card)] to-[var(--card)] p-8 sm:p-12 overflow-hidden">
            <div
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[var(--gold)] opacity-10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--gold)] font-semibold">
                  <Sparkles className="h-3 w-3" />
                  Punto de partida
                </span>
                <h3 className="mt-5 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white leading-[1.05] tracking-tight">
                  Auditoría digital{" "}
                  <span className="text-gold-gradient">gratuita</span> + plan de
                  acción.
                </h3>
                <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
                  Antes de proponerte nada, revisamos cómo te ven tus clientes
                  online ahora mismo. Te entregamos un reporte claro con qué
                  está bien, qué urge cambiar y qué priorizar para crecer.
                </p>
                <a
                  href={whatsappLinkWith(
                    "Hola, quiero solicitar la auditoría digital gratuita para mi negocio local"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-shine mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors shadow-[0_14px_40px_-12px_var(--gold-glow)]"
                >
                  Solicitar mi auditoría gratis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-xs text-[var(--subtle-foreground)]">
                  30 minutos · 100% por WhatsApp · Sin compromiso
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-black/40 p-6 sm:p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gold-soft)] text-[var(--gold)]">
                    <ClipboardCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--gold)] font-semibold">
                      Qué incluye
                    </p>
                    <p className="text-sm text-white font-medium">
                      Reporte personalizado
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {AUDIT_BENEFITS.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[var(--muted-foreground)]"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-services grid */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Después de la auditoría
              </p>
              <h3 className="mt-3 font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Mejoramos lo que ya usas
              </h3>
            </div>
            <span className="hidden sm:block text-xs text-[var(--subtle-foreground)]">
              Toma uno · combina varios · escala cuando quieras
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LOCAL_SERVICES.map((s, i) => (
              <LocalServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalServiceCard({
  service,
  index,
}: {
  service: (typeof LOCAL_SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <article
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all duration-500 overflow-hidden flex flex-col"
    >
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--gold)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between mb-5">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[var(--gold)] border border-[var(--gold)]/30 bg-[var(--gold-soft)] rounded-full px-2.5 py-1 font-semibold">
          {service.tag}
        </span>
      </div>

      <h4 className="relative font-[var(--font-sora)] text-lg sm:text-xl font-semibold text-white leading-tight">
        {service.title}
      </h4>
      <p className="relative mt-2.5 text-sm text-[var(--muted-foreground)] leading-relaxed">
        {service.desc}
      </p>

      <ul className="relative mt-5 space-y-2 flex-1">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]"
          >
            <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-[var(--gold)]/80 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 pt-5 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--muted-foreground)] leading-snug italic">
          &ldquo;{service.hook}&rdquo;
        </p>
        <a
          href={whatsappLinkWith(
            `Hola, me interesa el servicio de ${service.title} para mi negocio local. ¿Podrían enviarme una cotización?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-shine mt-4 group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          {service.cta}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>

      <span className="absolute top-3 right-3 text-[10px] font-mono text-[var(--subtle-foreground)] opacity-0 group-hover:opacity-100 transition-opacity">
        L0{index + 1}
      </span>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Benefits                                  */
/* -------------------------------------------------------------------------- */

const BENEFITS = [
  {
    icon: Users,
    title: "Equipo especializado",
    desc: "Diseñadores, desarrolladores, media buyers y copywriters bajo un mismo techo.",
  },
  {
    icon: Clock3,
    title: "Entregamos rápido",
    desc: "Sprints semanales, no meses de espera. Primera versión en 7 días.",
  },
  {
    icon: LineChart,
    title: "Métricas de verdad",
    desc: "Reportes claros con ROAS, leads y tiempo de retorno real por canal.",
  },
  {
    icon: TrendingUp,
    title: "Escalable contigo",
    desc: "Empezamos pequeño si hace falta. Crecemos contigo sin romper nada.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Por qué MAS
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              No vendemos humo.{" "}
              <span className="text-gold-gradient">Vendemos resultados.</span>
            </h2>
            <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
              Llevamos años haciendo esto. Sabemos lo que funciona, lo que no, y
              lo que cuesta cada cosa. Trabajamos como si tu negocio fuera el
              nuestro — porque cuando te va bien, a nosotros también.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-white font-medium link-animated"
            >
              Agenda una llamada gratis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/30 transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gold-soft)] text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-sora)] text-lg font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Process                                   */
/* -------------------------------------------------------------------------- */

const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Te escuchamos. Analizamos tu negocio, tu cliente ideal y lo que están haciendo tus competidores.",
    duration: "1-3 días",
  },
  {
    step: "02",
    title: "Estrategia",
    desc: "Armamos un plan con metas concretas, presupuesto por canal y KPIs que podemos medir cada semana.",
    duration: "3-5 días",
  },
  {
    step: "03",
    title: "Ejecución",
    desc: "Diseñamos, desarrollamos y lanzamos. Te mantenemos al tanto con un canal directo por WhatsApp o Slack.",
    duration: "2-4 semanas",
  },
  {
    step: "04",
    title: "Optimización",
    desc: "Revisamos datos, testeamos hipótesis y escalamos lo que funciona. Mejoramos mes a mes.",
    duration: "Continuo",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Nuestro proceso"
          title={
            <>
              Cuatro pasos,{" "}
              <span className="text-gold-gradient">cero improvisación</span>
            </>
          }
          description="Trabajamos con un método probado. Nada queda al aire, nada se improvisa. Siempre sabes en qué fase estamos."
        />

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {PROCESS.map((p, i) => (
            <li
              key={p.step}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 hover:border-[var(--gold)]/40 transition-colors"
            >
              {i < PROCESS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-[var(--border-strong)] to-transparent z-10"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-sora)] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--gold)] to-[var(--gold-deep)]">
                  {p.step}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--subtle-foreground)] border border-[var(--border)] rounded-full px-2 py-0.5">
                  {p.duration}
                </span>
              </div>
              <h3 className="mt-6 font-[var(--font-sora)] text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Cases                                    */
/* -------------------------------------------------------------------------- */

const CASES = [
  {
    client: "Clínica estética Vitae",
    industry: "Salud & bienestar",
    result: "+320%",
    metric: "leads mensuales",
    desc: "Rediseño completo de la web + campañas de Meta Ads segmentadas. Dupliamos las citas en 90 días.",
    tag: "Web · Ads · SEO",
  },
  {
    client: "NOVA coffee",
    industry: "Alimentos & bebidas",
    result: "4.8×",
    metric: "ROAS promedio",
    desc: "Identidad, web y gestión de redes. De una cafetería local a una marca con fila los fines de semana.",
    tag: "Branding · Social",
  },
  {
    client: "Arum tienda",
    industry: "E-commerce de moda",
    result: "$28K",
    metric: "facturación mensual",
    desc: "E-commerce en Shopify + email marketing + creativos. De cero a primeros seis meses rentables.",
    tag: "E-commerce · Email",
  },
];

export function Cases() {
  return (
    <section
      id="casos"
      className="relative py-24 sm:py-32 border-b border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Casos reales
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Clientes que pasaron de{" "}
              <span className="italic font-light">dudar</span> a facturar.
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white link-animated"
          >
            Más casos en Instagram
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <article
              key={c.client}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--gold)]/40 transition-all"
            >
              <div
                className="relative h-48 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-black overflow-hidden"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[var(--font-sora)] text-5xl font-bold text-gold-gradient">
                    {c.result}
                  </span>
                </div>
                <span className="absolute bottom-3 left-4 text-[11px] text-[var(--subtle-foreground)]">
                  {c.metric}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-[var(--subtle-foreground)]">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-[var(--subtle-foreground)]">
                  {c.industry}
                </p>
                <h3 className="mt-1 font-[var(--font-sora)] text-lg font-semibold text-white">
                  {c.client}
                </h3>
                <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {c.desc}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-[var(--gold)]">
                  {c.tag}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Testimonials                                */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "Pasamos de querer una página bonita a tener un motor de ventas real. En dos meses doblamos las citas mensuales.",
    name: "Ana Villareal",
    role: "Dueña · Clínica Vitae",
  },
  {
    quote:
      "El equipo entiende de números, no solo de diseño. Por primera vez veo claramente cuánto me cuesta traer un cliente y cuánto vale.",
    name: "Jorge Pérez",
    role: "Gerente · Arum Tienda",
  },
  {
    quote:
      "Llevo cuatro campañas con ellos. Siempre cumplen los plazos y siempre nos sorprenden con algo creativo que funciona.",
    name: "Marcela Rivas",
    role: "Dirección · NOVA coffee",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title={
            <>
              Lo que dicen los que ya trabajan{" "}
              <span className="text-gold-gradient">con nosotros</span>
            </>
          }
          description="Nada habla mejor que alguien que ha puesto su negocio en nuestras manos."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 flex flex-col"
            >
              <div
                className="flex gap-0.5 text-[var(--gold)]"
                aria-label="5 estrellas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-white leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--border)]">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                     FAQ                                    */
/* -------------------------------------------------------------------------- */

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Respuestas{" "}
              <span className="text-gold-gradient">sin rodeos</span>
            </>
          }
          description="Si no encuentras lo que buscas, escríbenos por WhatsApp. Respondemos en minutos."
          align="center"
        />

        <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-[var(--font-sora)] text-base sm:text-lg font-semibold text-white">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--gold)]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 -mt-2 text-[var(--muted-foreground)] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Contact                                  */
/* -------------------------------------------------------------------------- */

export function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const service = (data.get("service") as string) || "";
    const message = (data.get("message") as string) || "";

    const text =
      `Hola MAS, soy ${name}.%0A` +
      `Email: ${email}%0A` +
      (phone ? `Teléfono: ${phone}%0A` : "") +
      `Servicio: ${service}%0A` +
      `Mensaje: ${message}`;

    window.open(
      `https://wa.me/584129991787?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Contacto
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Cuéntanos qué necesitas.
            </h2>
            <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
              Respondemos el mismo día. Si prefieres, escríbenos directo por
              WhatsApp o mándanos un mensaje por Instagram.
            </p>

            <div className="mt-10 space-y-5">
              <ContactLine
                icon={<Phone className="h-4 w-4" />}
                label="Llamada o WhatsApp"
                value={BRAND.phoneDisplay}
                href={WHATSAPP_URL}
              />
              <ContactLine
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={BRAND.email}
                href={`mailto:${BRAND.email}`}
              />
              <ContactLine
                icon={<InstagramIcon className="h-4 w-4" />}
                label="Instagram"
                value={`@${"mas.marketingagency"}`}
                href={INSTAGRAM_URL}
              />
              <ContactLine
                icon={<MapPin className="h-4 w-4" />}
                label="Base"
                value={BRAND.location}
              />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="name" required autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Teléfono"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]"
                >
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue="Página web"
                  className="rounded-xl border border-[var(--border-strong)] bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--gold)] transition-colors"
                >
                  <option>Página web</option>
                  <option>Publicidad digital</option>
                  <option>SEO</option>
                  <option>Branding</option>
                  <option>Redes sociales</option>
                  <option>Email marketing</option>
                  <option>Paquete integral</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]"
              >
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tengo un negocio de... y me gustaría..."
                className="rounded-xl border border-[var(--border-strong)] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-[var(--subtle-foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="gold-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-black font-semibold hover:bg-[var(--gold-bright)] transition-colors"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Abriendo WhatsApp…
                </>
              ) : (
                <>
                  Enviar y abrir WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-xs text-[var(--subtle-foreground)]">
              Al enviar aceptas que te contactemos por el medio elegido. Nada de
              spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]"
      >
        {label} {required && <span className="text-[var(--gold)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-[var(--border-strong)] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-[var(--subtle-foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
      />
    </div>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--gold)]">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-[var(--subtle-foreground)]">
          {label}
        </div>
        <div className="mt-0.5 text-white font-medium">{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }
  return content;
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative grid h-14 w-14 place-items-center rounded-full overflow-hidden border border-[var(--gold)]/40 bg-black">
                <Image
                  src="/logo.png"
                  alt="MAS Marketing Agency"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-[var(--font-sora)] font-bold text-white">
                {BRAND.short}
                <span className="text-[var(--gold)]"> marketing</span>
              </span>
            </div>
            <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed max-w-sm">
              {BRAND.claim}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shine mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-black font-semibold text-sm hover:bg-[var(--gold-bright)] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Hablemos ahora
            </a>
          </div>

          <FooterCol
            title="Servicios"
            links={[
              { label: "Páginas web", href: "#servicios" },
              { label: "Publicidad digital", href: "#servicios" },
              { label: "SEO", href: "#servicios" },
              { label: "Branding", href: "#servicios" },
              { label: "Redes sociales", href: "#servicios" },
            ]}
          />
          <FooterCol
            title="Empresa"
            links={[
              { label: "Proceso", href: "#proceso" },
              { label: "Testimonios", href: "/testimonios" },
              { label: "Contacto", href: "#contacto" },
            ]}
          />
          <FooterCol
            title="Contacto"
            links={[
              { label: BRAND.phoneDisplay, href: WHATSAPP_URL, external: true },
              { label: BRAND.email, href: `mailto:${BRAND.email}` },
              {
                label: "@mas.marketingagency",
                href: INSTAGRAM_URL,
                external: true,
              },
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--subtle-foreground)]">
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--muted-foreground)] hover:text-white hover:border-[var(--gold)]/60 transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--muted-foreground)] hover:text-white hover:border-[var(--gold)]/60 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="md:col-span-2 lg:col-span-2">
      <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-[var(--muted-foreground)] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Section Header                               */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
        {title}
      </h2>
      <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
