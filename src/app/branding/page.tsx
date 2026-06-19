import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Tag,
  PenTool,
  Palette,
  Type,
  BookOpen,
  UserCircle,
  Mic,
  Share2,
  Target,
  Search,
  Lightbulb,
  Send,
  CheckCircle2,
  Rocket,
  RefreshCw,
  BadgeCheck,
  Trophy,
  ShoppingBag,
  Building2,
  Plus,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero más información sobre el servicio de branding e identidad de marca.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "Branding e Identidad de Marca — Logo, Manual y Posicionamiento",
  description:
    "Servicio de branding e identidad de marca en LATAM, España y EE.UU. Naming, logo profesional, manual de marca, buyer persona, elevator pitch y posicionamiento estratégico. Diagnóstico inicial gratuito.",
  alternates: { canonical: "/branding" },
  openGraph: {
    title: "Branding e Identidad de Marca — MAS Marketing Agency",
    description:
      "Una marca que se recuerda. Naming, logo, manual de marca y posicionamiento — todo en un solo proceso.",
    type: "website",
    url: "/branding",
    images: [
      {
        url: "/og-branding.png",
        width: 1200,
        height: 630,
        alt: "Branding e Identidad de Marca — Una marca que se recuerda.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding e Identidad de Marca — MAS Marketing Agency",
    description:
      "Naming · Logo · Manual de marca · Posicionamiento.",
    images: ["/og-branding.png"],
  },
};

const INCLUDED = [
  {
    icon: Tag,
    title: "Naming",
    body: "Definición del nombre de marca con criterios de recordación, disponibilidad y posicionamiento.",
  },
  {
    icon: PenTool,
    title: "Logo profesional",
    body: "Diseño de logotipo que representa la esencia y valores de tu negocio.",
  },
  {
    icon: Palette,
    title: "Paleta de colores",
    body: "Selección estratégica de colores con su significado y aplicación correcta.",
  },
  {
    icon: Type,
    title: "Tipografía de marca",
    body: "Fuentes que comunican la personalidad de tu negocio en cada pieza.",
  },
  {
    icon: BookOpen,
    title: "Manual de marca",
    body: "Guía completa de uso correcto de todos los elementos visuales.",
  },
  {
    icon: UserCircle,
    title: "Análisis de buyer persona",
    body: "Perfil detallado de tu cliente ideal para que toda la comunicación apunte a quien decide comprar.",
  },
  {
    icon: Mic,
    title: "Elevator pitch",
    body: "Mensaje de presentación de tu marca claro, memorable y efectivo en 60 segundos.",
  },
  {
    icon: Share2,
    title: "Perfiles en redes sociales",
    body: "Creación y setup profesional de tus cuentas con la identidad de marca aplicada.",
  },
  {
    icon: Target,
    title: "Análisis de posicionamiento",
    body: "Cómo te diferencias de la competencia y qué lugar ocupas en la mente de tu cliente.",
  },
];

const AUDIENCE = [
  { icon: Rocket, label: "Emprendedores que comienzan" },
  { icon: RefreshCw, label: "Negocios renovando imagen" },
  { icon: BadgeCheck, label: "Profesionales monetizando expertise" },
  { icon: Trophy, label: "Coaches y consultores" },
  { icon: ShoppingBag, label: "Tiendas y e-commerce" },
  { icon: Building2, label: "Negocios que quieren ser elegidos" },
];

const PROCESS = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    body: "Analizamos tu presencia actual, tu competencia y tu cliente ideal.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Estrategia de marca",
    body: "Definimos naming, posicionamiento, buyer persona y elevator pitch.",
  },
  {
    n: "03",
    icon: Palette,
    title: "Identidad visual",
    body: "Diseñamos logo, paleta, tipografía y manual de marca.",
  },
  {
    n: "04",
    icon: Send,
    title: "Implementación",
    body: "Aplicamos la identidad en tus perfiles de redes sociales y materiales digitales.",
  },
];

const FAQS = [
  {
    q: "¿Puedo contratar solo el logo sin el manual de marca?",
    a: "Podemos adaptarlo según tu necesidad. Sin embargo, recomendamos el proceso completo — un logo sin manual de marca genera inconsistencias en la comunicación que afectan la percepción del negocio.",
  },
  {
    q: "¿Cuánto tarda el proceso completo?",
    a: "Entre 7 y 15 días hábiles dependiendo de la complejidad del proyecto y la velocidad de retroalimentación del cliente.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Solo necesitas tener claro a qué te dedicas y a quién le vendes. El resto lo construimos juntos desde el diagnóstico.",
  },
];

export default function Branding() {
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
              Branding &amp; Identidad de Marca
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Una marca que se recuerda.{" "}
              <span className="text-gold-gradient">
                Un negocio que se elige.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Diseñamos tu identidad visual y estratégica desde cero — naming,
              logo, manual de marca y posicionamiento — para que tu negocio
              comunique quién es antes de decir una sola palabra.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero mi marca
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
                <Tag className="h-4 w-4 text-[var(--gold)]" />
                Naming + Posicionamiento
              </div>
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-[var(--gold)]" />
                Identidad visual completa
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[var(--gold)]" />
                Manual de marca incluido
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------- QUÉ INCLUYE -------------------------- */}
        <section
          id="incluye"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué incluye?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Una marca, construida con{" "}
              <span className="text-gold-gradient">criterio y estrategia.</span>
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-sora)] text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- AUDIENCE --------------------------- */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para quién es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Para cualquier negocio que quiera{" "}
              <span className="text-gold-gradient">
                ser reconocido y elegido.
              </span>
            </h2>

            <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {AUDIENCE.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-black transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-[var(--font-sora)] text-sm font-semibold text-white text-center leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- INVERSIÓN -------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
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
                  Diagnóstico de marca
                </div>
                <div className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
                  Gratuito
                </div>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                  Análisis de tu presencia actual y diagnóstico de marca. Sin
                  costo, sin compromiso.
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] group-hover:gap-2.5 transition-all">
                  Solicitar diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  Identidad visual e implementación
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
        <section id="proceso" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              El proceso
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Cuatro pasos.{" "}
              <span className="text-gold-gradient">
                De diagnóstico a despliegue.
              </span>
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
        <section
          id="faq"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
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
        <section className="relative py-24 sm:py-32 border-t border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Primera impresión
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Tu marca es la primera impresión.{" "}
              <span className="text-gold-gradient">
                Que sea la correcta.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Empieza con un diagnóstico gratuito de tu marca y descubre qué
              está comunicando hoy — y qué debería comunicar.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/auditoria-gratuita"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-7 py-4 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver auditoría gratuita
              </Link>
            </div>

            <p className="mt-8 text-sm text-[var(--subtle-foreground)]">
              Diagnóstico de marca gratis · Implementación desde $500 USD
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BreadcrumbJsonLd pageName="Branding" pageUrl="/branding" />

      {/* --------------------- JSON-LD: Service ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://masmarketingagency.com/branding#service",
            name: "Branding e Identidad de Marca",
            serviceType: "Brand Identity Design / Brand Strategy",
            category: "Branding",
            description:
              "Servicio de branding e identidad de marca: naming, logo profesional, paleta de colores, tipografía, manual de marca, buyer persona, elevator pitch, configuración de perfiles en redes sociales y análisis de posicionamiento estratégico.",
            url: "https://masmarketingagency.com/branding",
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
                "Diagnóstico de marca gratuito. Identidad visual e implementación completa desde $500 USD — a consultar según alcance.",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Entregables del servicio de branding",
              itemListElement: INCLUDED.map((i, idx) => ({
                "@type": "Offer",
                position: idx + 1,
                itemOffered: {
                  "@type": "Service",
                  name: i.title,
                  description: i.body,
                },
              })),
            },
            audience: {
              "@type": "Audience",
              audienceType:
                "Emprendedores que comienzan, negocios que quieren renovar su imagen, profesionales que quieren monetizar su expertise, coaches y consultores, tiendas y e-commerce — cualquier negocio que quiera ser reconocido y elegido.",
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
            "@id": "https://masmarketingagency.com/branding#faq",
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
