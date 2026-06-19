import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Search,
  Bot,
  ClipboardCheck,
  Settings,
  FileText,
  Link as LinkIcon,
  BarChart3,
  Layers,
  Lightbulb,
  Code2,
  CheckCircle2,
  Crown,
  Plus,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero más información sobre los servicios de SEO y posicionamiento.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "SEO y Posicionamiento en Google e IA — Aparece Primero",
  description:
    "Servicios de SEO y visibilidad en IA para negocios en LATAM, España y EE.UU. Optimización técnica, contenido, autoridad de dominio y aparición en ChatGPT, Perplexity y Google AI Overviews.",
  alternates: { canonical: "/seo-posicionamiento" },
  openGraph: {
    title:
      "SEO y Posicionamiento en Google e IA — MAS Marketing Agency",
    description:
      "Aparece primero en Google. Y también en ChatGPT, Perplexity y AI Overviews. SEO 360 + visibilidad en IA.",
    type: "website",
    url: "/seo-posicionamiento",
    images: [
      {
        url: "/og-seo-posicionamiento.png",
        width: 1200,
        height: 630,
        alt: "SEO y Posicionamiento — Aparece primero en Google. Y también en la IA.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SEO y Posicionamiento en Google e IA — MAS Marketing Agency",
    description:
      "SEO clásico + visibilidad en IA (GEO/AEO) para negocios en LATAM.",
    images: ["/og-seo-posicionamiento.png"],
  },
};

const VISIBILITY_TYPES = [
  {
    icon: Search,
    name: "SEO Clásico",
    sub: "Google · Bing · Yahoo",
    body: "Aparecer en los primeros resultados de Google cuando alguien busca tu servicio. Optimización técnica, contenido y autoridad.",
    bullets: [
      "Optimización técnica del sitio",
      "Contenido orientado a búsquedas reales",
      "Construcción de autoridad de dominio",
      "Resultados sostenibles a mediano plazo",
    ],
  },
  {
    icon: Bot,
    name: "Visibilidad IA",
    sub: "GEO · AEO · LLMO",
    body: "Ser citado por ChatGPT, Perplexity, Google AI Overviews y Claude cuando alguien hace una pregunta relacionada con tu negocio. El futuro del SEO.",
    bullets: [
      "Optimización para asistentes de IA",
      "llms.txt + schema JSON-LD avanzado",
      "Estructura de respuesta extractable",
      "Señales de E-E-A-T y citabilidad",
    ],
  },
];

const INCLUDED = [
  { icon: ClipboardCheck, label: "Auditoría SEO completa (técnica + contenido + autoridad)" },
  { icon: Settings, label: "Optimización on-page (títulos, metas, estructura, velocidad)" },
  { icon: FileText, label: "Estrategia de contenido orientada a posicionamiento" },
  { icon: LinkIcon, label: "Link building y autoridad de dominio" },
  { icon: Bot, label: "Optimización para visibilidad en IA (llms.txt, schema JSON-LD, E-E-A-T)" },
  { icon: BarChart3, label: "Reportes mensuales con métricas claras" },
  { icon: Layers, label: "SEO 360: auditoría + implementación completa de soluciones técnicas y de contenido" },
];

const PROCESS = [
  {
    n: "01",
    icon: Search,
    title: "Auditoría gratuita",
    body: "Analizamos tu sitio y te mostramos exactamente qué está fallando.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Estrategia",
    body: "Diseñamos el plan de acción priorizado según tu negocio y competencia.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Implementación",
    body: "Aplicamos todas las soluciones técnicas, de contenido y de visibilidad en IA.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Seguimiento",
    body: "Reportes mensuales con evolución de posiciones, tráfico y visibilidad.",
  },
];

const FAQS = [
  {
    q: "¿Cuánto tarda en verse resultados en Google?",
    a: "El SEO es una inversión a mediano plazo. Los primeros movimientos se ven entre 30 y 90 días. Resultados sólidos y sostenibles entre 3 y 6 meses.",
  },
  {
    q: "¿Qué es la visibilidad en IA y por qué importa?",
    a: "Cada vez más personas preguntan directamente a ChatGPT, Perplexity o Google AI en lugar de hacer búsquedas tradicionales. Si tu sitio no está optimizado para ser citado por esos sistemas, estás perdiendo visibilidad frente a competidores que sí lo están.",
  },
  {
    q: "¿El SEO 360 incluye la auditoría?",
    a: "Sí. La auditoría completa está incluida en el SEO 360 — no es un costo adicional.",
  },
];

export default function SeoPosicionamiento() {
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
              SEO &amp; Posicionamiento
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Aparece primero en Google.{" "}
              <span className="text-gold-gradient">Y también en la IA.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Optimizamos tu sitio para que Google lo encuentre, lo entienda y
              lo recomiende — y para que los asistentes de IA como ChatGPT y
              Perplexity te citen cuando alguien pregunte por tu negocio.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero posicionarme
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#incluye"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver qué incluye
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-[var(--gold)]" />
                Google · Bing · AI Overviews
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-[var(--gold)]" />
                ChatGPT · Perplexity · Claude
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[var(--gold)]" />
                Reportes mensuales claros
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- VISIBILITY TYPES ----------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Dos tipos de visibilidad
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Posicionamos tu negocio en{" "}
              <span className="text-gold-gradient">
                Google y en los asistentes de IA.
              </span>
            </h2>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {VISIBILITY_TYPES.map(({ icon: Icon, name, sub, body, bullets }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gold-soft)] text-[var(--gold)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="font-[var(--font-sora)] text-2xl font-bold text-white">
                        {name}
                      </div>
                      <div className="text-sm text-[var(--muted-foreground)]">
                        {sub}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-white"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------- QUÉ INCLUYE -------------------------- */}
        <section id="incluye" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué incluye?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              SEO de extremo a extremo,{" "}
              <span className="text-gold-gradient">técnico y editorial.</span>
            </h2>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {INCLUDED.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-white font-medium leading-relaxed">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------- SERVICIO DESTACADO SEO 360 ---------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Servicio destacado
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              SEO 360.{" "}
              <span className="text-gold-gradient">Todo incluido.</span>
            </h2>

            <div className="relative mt-14 rounded-3xl border-2 border-[var(--gold)]/60 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--card)] p-8 sm:p-10 overflow-hidden">
              <div
                className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--gold)]/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)] text-black">
                    <Crown className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-[var(--gold)]/50 bg-black/30 text-[var(--gold)] font-semibold">
                    Servicio completo
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Desde
                  </div>
                  <div className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-gold-gradient">
                    $500 USD
                  </div>
                </div>
              </div>

              <h3 className="relative mt-8 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
                SEO 360 — Auditoría e Implementación Completa
              </h3>
              <p className="relative mt-4 text-[var(--muted-foreground)] leading-relaxed text-lg">
                No solo te decimos qué está mal —{" "}
                <span className="text-white font-medium">lo arreglamos</span>.
                Auditoría técnica completa, implementación de todas las
                soluciones, optimización para Google y para IA, y seguimiento
                de resultados. Todo incluido.
              </p>

              <div className="relative mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
                >
                  Hablar de SEO 360
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <span className="text-sm text-[var(--muted-foreground)]">
                  · Precio a consultar según el proyecto
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- INVERSIÓN -------------------------- */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Inversión
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Dos puntos de entrada,{" "}
              <span className="text-gold-gradient">claros desde el inicio.</span>
            </h2>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <Link
                href="/auditoria-gratuita"
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 hover:border-[var(--gold)]/50 hover:bg-[var(--card-hover)] transition-all"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  Auditoría diagnóstica
                </div>
                <div className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
                  Gratuita
                </div>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                  Descubre qué está fallando en tu posicionamiento actual. Sin
                  costo, sin compromiso.
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] group-hover:gap-2.5 transition-all">
                  Solicitar auditoría
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  Implementación
                </div>
                <div className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <span className="text-gold-gradient">$500+</span>
                  <span className="text-[var(--muted-foreground)] text-2xl sm:text-3xl">
                    {" "}
                    USD
                  </span>
                </div>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                  Desde $500 USD según el alcance del proyecto.{" "}
                  <span className="text-white font-medium">A consultar.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- PROCESO ---------------------------- */}
        <section id="proceso" className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              El proceso
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Cuatro pasos.{" "}
              <span className="text-gold-gradient">Resultados medibles.</span>
            </h2>

            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map(({ n, icon: Icon, title, body }) => (
                <li
                  key={n}
                  className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div
                      className="font-[var(--font-sora)] text-4xl font-bold text-[var(--gold)]/20 select-none"
                      aria-hidden="true"
                    >
                      {n}
                    </div>
                  </div>
                  <h3 className="mt-5 font-[var(--font-sora)] text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
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
              Acción ahora
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Tu competencia ya está optimizando.{" "}
              <span className="text-gold-gradient">¿Y tú?</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Empieza con una auditoría gratuita y descubre en qué posición
              real está tu negocio.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/auditoria-gratuita"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicitar auditoría gratuita
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-7 py-4 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Hablar con un experto
              </a>
            </div>

            <p className="mt-8 text-sm text-[var(--subtle-foreground)]">
              Auditoría gratis · Implementación desde $500 USD
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BreadcrumbJsonLd pageName="SEO y Posicionamiento" pageUrl="/seo-posicionamiento" />

      {/* --------------------- JSON-LD: Service ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://masmarketingagency.com/seo-posicionamiento#service",
            name: "SEO y Posicionamiento en Google e IA",
            serviceType: "Search Engine Optimization / Generative Engine Optimization",
            category: "SEO & AI Visibility",
            description:
              "Posicionamiento en Google y visibilidad en asistentes de IA (ChatGPT, Perplexity, Google AI Overviews, Claude). Auditoría técnica, optimización on-page, contenido estratégico, link building y optimización para citabilidad por LLMs.",
            url: "https://masmarketingagency.com/seo-posicionamiento",
            provider: {
              "@id": ORG_ID,
              "@type": "Organization",
              name: BRAND.name,
              url: "https://masmarketingagency.com",
              telephone: "+58 412 999 1787",
              email: BRAND.email,
            },
            areaServed: ["VE", "CO", "MX", "US", "ES", "PA"],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "0",
              highPrice: "500",
              offerCount: 2,
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
              description:
                "Auditoría diagnóstica gratuita. Implementación de soluciones desde $500 USD según alcance — a consultar.",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de SEO disponibles",
              itemListElement: [
                {
                  "@type": "Offer",
                  position: 1,
                  price: "0",
                  priceCurrency: "USD",
                  itemOffered: {
                    "@type": "Service",
                    name: "Auditoría SEO gratuita",
                    description:
                      "Diagnóstico completo de SEO técnico, contenido, autoridad y visibilidad en IA, sin costo y sin compromiso.",
                    url: "https://masmarketingagency.com/auditoria-gratuita",
                  },
                },
                {
                  "@type": "Offer",
                  position: 2,
                  priceCurrency: "USD",
                  price: "500",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: "Desde $500 USD — a consultar según alcance",
                  },
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO 360 — Auditoría e Implementación Completa",
                    description:
                      "Auditoría técnica completa + implementación de todas las soluciones técnicas y de contenido + optimización para Google y para IA + seguimiento mensual.",
                  },
                },
              ],
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
              "https://masmarketingagency.com/seo-posicionamiento#faq",
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
