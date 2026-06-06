import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Layers,
  Package,
  Compass,
  CheckCircle2,
  Camera,
  Trophy,
  Users,
  Briefcase,
  Brain,
  HeartPulse,
  Mic,
  GraduationCap,
  BadgeCheck,
  DollarSign,
  Video,
  Rocket,
  Plus,
  Clock,
  Sparkle,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero más información sobre Emprendedores 360 Done for You.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "Emprendedores 360 Done for You — Monetiza tu conocimiento sin frustrarte con la tecnología",
  description:
    "Servicio Done for You para coaches, consultores, terapeutas, psicólogos y educadores. Construimos tu negocio digital completo — estrategia, Low Ticket, Webinar y High Ticket — para que monetices tu conocimiento en LATAM, España y EE.UU.",
  alternates: { canonical: "/emprendedores-360" },
  openGraph: {
    title:
      "Emprendedores 360 Done for You — MAS Marketing Agency",
    description:
      "Convierte tu conocimiento en un negocio digital rentable. Tú eres el experto. Nosotros hacemos el resto.",
    type: "website",
    url: "/emprendedores-360",
    images: [
      {
        url: "/og-emprendedores-360.png",
        width: 1200,
        height: 630,
        alt: "Emprendedores 360 — Convierte tu conocimiento en un negocio digital rentable.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emprendedores 360 Done for You — MAS Marketing Agency",
    description:
      "Done for You para coaches, consultores y terapeutas que quieren monetizar su conocimiento.",
    images: ["/og-emprendedores-360.png"],
  },
};

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "La tecnología te bloquea",
    body: "Plataformas, funnels, páginas de venta... no sabes por dónde empezar.",
  },
  {
    icon: Layers,
    title: "No sabes aterrizar el contenido",
    body: "Tienes ideas y experiencia pero no logras estructurar un programa claro.",
  },
  {
    icon: Package,
    title: "No sabes empaquetar tu propuesta",
    body: "Tu conocimiento vale mucho pero no encuentras cómo presentarlo como producto de alto valor.",
  },
  {
    icon: Compass,
    title: "El marketing te resulta ajeno",
    body: "No sabes cómo atraer clientes ni construir un embudo de ventas efectivo.",
  },
];

const WE_DO = [
  "Estrategia de contenido completa",
  "Estructura del Low Ticket ($7)",
  "Guion y estructura del Webinar",
  "Diseño completo del High Ticket",
  "Secuencias de email y marketing",
  "Páginas de venta y funnels",
  "Plan de lanzamiento paso a paso",
];

const AUDIENCE = [
  { icon: Trophy, label: "Coaches" },
  { icon: Users, label: "Mentores" },
  { icon: Briefcase, label: "Consultores" },
  { icon: Brain, label: "Psicólogos" },
  { icon: HeartPulse, label: "Terapeutas" },
  { icon: Mic, label: "Conferenciantes" },
  { icon: GraduationCap, label: "Educadores" },
  { icon: BadgeCheck, label: "Profesionales" },
];

const PHASES = [
  {
    n: "Fase 1",
    badge: "$7",
    icon: DollarSign,
    title: "Low Ticket",
    body: "Producto de entrada de bajo costo. Genera confianza, construye lista de compradores y financia el lanzamiento. Incluye 5 lecciones en video cortas y accionables.",
  },
  {
    n: "Fase 2",
    badge: "Gratis",
    icon: Video,
    title: "Webinar",
    body: "Educas a tu audiencia, demuestras tu autoridad y llevas prospectos calificados directamente al High Ticket.",
  },
  {
    n: "Fase 3",
    badge: "Premium",
    icon: Rocket,
    title: "High Ticket",
    body: "3 bloques de formación intensiva (4 semanas c/u). 12 semanas de acompañamiento total. Tu producto estrella de mayor valor y transformación.",
  },
];

const DELIVERABLES = [
  {
    title: "Propuesta estratégica digital completa",
    body: "Perfil de autoridad, avatar del cliente y plan de pre-producción 30 días.",
  },
  {
    title: "Estructura completa del Low Ticket",
    body: "5 lecciones detalladas, copy de la página de venta y orden de entrega.",
  },
  {
    title: "Guion y estructura del Webinar gratuito",
    body: "100 minutos divididos en 7 bloques — del hook al cierre del High Ticket.",
  },
  {
    title: "Diseño del programa High Ticket",
    body: "12 semanas semana a semana, 3 bloques de formación intensiva (4 semanas c/u).",
  },
  {
    title: "Secuencias de email post-LT y post-webinar",
    body: "Flujos automáticos que convierten visitantes en compradores y compradores en clientes High Ticket.",
  },
  {
    title: "Copy de lanzamiento para Instagram y WhatsApp",
    body: "Posts, stories, broadcasts y plantillas listas para los días clave del lanzamiento.",
  },
  {
    title: "Plan de acción post-lanzamiento (72 horas)",
    body: "Qué hacer hora a hora durante el cierre — promociones, recordatorios y bonos.",
  },
];

const FAQS = [
  {
    q: "¿Necesito tener seguidores para empezar?",
    a: "No. El sistema está diseñado para funcionar desde cero. La estrategia de pre-producción de 30 días construye la audiencia antes del lanzamiento.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar listo todo?",
    a: "Depende del ritmo de cada emprendedor, pero el roadmap completo está pensado para ejecutarse en 90 días desde la llamada de diagnóstico.",
  },
  {
    q: "¿Qué pasa si no sé grabar videos?",
    a: "Lo acompañamos en eso también. El guion, la estructura y el formato están listos — tú solo hablas frente a la cámara.",
  },
];

export default function Emprendedores360() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 hero-bg overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              <Sparkles className="h-3.5 w-3.5" />
              Emprendedores 360 · Done for You
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Convierte tu conocimiento en un{" "}
              <span className="text-gold-gradient">
                negocio digital rentable.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Tú eres el experto. Nosotros hacemos el resto.{" "}
              <span className="text-white font-medium">
                Estrategia · Contenido · Lanzamiento.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero empezar
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver cómo funciona
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                Roadmap de 90 días
              </div>
              <div className="flex items-center gap-2">
                <Sparkle className="h-4 w-4 text-[var(--gold)]" />
                Llamada de diagnóstico gratuita
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-[var(--gold)]" />
                Tú solo grabas
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- THE PROBLEM ------------------------ */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              El problema
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Tienes el conocimiento.{" "}
              <span className="text-gold-gradient">
                Lo que falta es el sistema.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Si te identificas con alguna de estas frases, este servicio es
              para ti.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {PROBLEMS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-sora)] text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------- YO ME ENCARGO / TÚ SOLO ------------------ */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Yo me encargo */}
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Yo me encargo
              </p>
              <h3 className="mt-3 font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.1]">
                De crear todo el{" "}
                <span className="text-gold-gradient">sistema digital.</span>
              </h3>

              <ul className="mt-8 space-y-3">
                {WE_DO.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tú solo grabas */}
            <div className="relative rounded-2xl border border-[var(--gold)]/40 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--card)] p-8 sm:p-10 grid place-items-center text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                  Tú solo
                </p>
                <h3 className="mt-3 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
                  Tienes que hacer{" "}
                  <span className="text-gold-gradient">esto:</span>
                </h3>

                <div className="mt-8 grid h-32 w-32 mx-auto place-items-center rounded-full border border-[var(--gold)]/50 bg-black/40">
                  <Camera className="h-14 w-14 text-[var(--gold)]" />
                </div>

                <p className="mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  GRABAR.
                </p>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed max-w-sm mx-auto">
                  Eso es todo. El experto eres tú. Nosotros construimos el
                  negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- AUDIENCE --------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para quién es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Para quien sabe mucho y{" "}
              <span className="text-gold-gradient">quiere transmitirlo.</span>
            </h2>

            <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-4">
              {AUDIENCE.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-black transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-[var(--font-sora)] text-base font-semibold text-white text-center">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-3xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Cualquier profesional que quiera monetizar su conocimiento en
              internet,{" "}
              <span className="text-white font-medium">
                sin frustrarse con la tecnología o el marketing.
              </span>
            </p>
          </div>
        </section>

        {/* --------------------------- PROCESO ---------------------------- */}
        <section id="proceso" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              El proceso
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Tres fases.{" "}
              <span className="text-gold-gradient">Un solo objetivo.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Del producto de entrada al programa premium — un embudo
              completo, diseñado y entregado en tu marca.
            </p>

            <ol className="mt-14 space-y-6">
              {PHASES.map(({ n, badge, icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 grid gap-6 sm:grid-cols-[140px_1fr] items-start"
                >
                  <div>
                    <div className="font-[var(--font-sora)] text-sm font-semibold uppercase tracking-[0.15em] text-[var(--gold)]">
                      {n}
                    </div>
                    <div className="mt-3 grid h-14 w-14 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold-soft)] text-[var(--gold)]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-[var(--gold)]/40 bg-black/30 text-[var(--gold)]">
                        {badge}
                      </span>
                    </div>
                    <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed text-lg">
                      {body}
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute top-4 right-4 font-[var(--font-sora)] text-7xl font-bold text-[var(--gold)]/10 select-none"
                  >
                    0{i + 1}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* -------------------------- DELIVERABLE ------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Qué incluye
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Lo que recibes,{" "}
              <span className="text-gold-gradient">listo para ejecutar.</span>
            </h2>

            <ul className="mt-14 space-y-4">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--gold)]" />
                  <div>
                    <h3 className="font-[var(--font-sora)] text-lg sm:text-xl font-semibold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-[var(--muted-foreground)] leading-relaxed">
                      {d.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------ FAQ ----------------------------- */}
        <section id="faq" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Lo que más{" "}
              <span className="text-gold-gradient">nos preguntan.</span>
            </h2>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
              {FAQS.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-[var(--font-sora)] text-base sm:text-lg font-semibold text-white">
                      {f.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--gold)] transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 -mt-2 text-[var(--muted-foreground)] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ CTA ----------------------------- */}
        <section className="relative py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Listo para empezar
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              ¿Estás listo para{" "}
              <span className="text-gold-gradient">
                monetizar tu conocimiento?
              </span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Agenda una llamada de diagnóstico gratuita. En 30 minutos te
              decimos si Emprendedores 360 es para ti y te damos el rango de
              inversión exacto para tu caso.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Agenda tu llamada de diagnóstico gratuita
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-7 py-4 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Conocer al equipo
              </Link>
            </div>

            <p className="mt-8 text-sm text-[var(--subtle-foreground)]">
              Precio a consultar · Incluye llamada de diagnóstico gratuita
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* --------------------- JSON-LD: Service ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://masmarketingagency.com/emprendedores-360#service",
            name: "Emprendedores 360 Done for You",
            serviceType: "Digital Business Setup / Online Course Production",
            category: "Done-For-You Business Setup",
            description:
              "Servicio Done-for-You para coaches, terapeutas, consultores, psicólogos, educadores y profesionales que quieren monetizar su conocimiento. Construimos el sistema digital completo — estrategia, Low Ticket, Webinar, High Ticket, emails y páginas de venta.",
            url: "https://masmarketingagency.com/emprendedores-360",
            provider: {
              "@id": ORG_ID,
              "@type": "Organization",
              name: BRAND.name,
              url: "https://masmarketingagency.com",
              telephone: "+58 412 999 1787",
              email: BRAND.email,
            },
            areaServed: ["VE", "CO", "MX", "US", "ES", "PA"],
            audience: {
              "@type": "Audience",
              audienceType:
                "Coaches, mentores, consultores, psicólogos, terapeutas, conferenciantes, educadores y profesionales que quieren monetizar su conocimiento en internet sin frustrarse con la tecnología ni el marketing.",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "PriceSpecification",
                description:
                  "Precio a consultar según dimensiones del proyecto. Incluye llamada de diagnóstico gratuita.",
              },
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Fases del programa Emprendedores 360",
              itemListElement: PHASES.map((p, idx) => ({
                "@type": "Offer",
                position: idx + 1,
                itemOffered: {
                  "@type": "Service",
                  name: `${p.n} · ${p.title}`,
                  description: p.body,
                },
              })),
            },
          }),
        }}
      />

      {/* --------------------- JSON-LD: FAQPage ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id":
              "https://masmarketingagency.com/emprendedores-360#faq",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
