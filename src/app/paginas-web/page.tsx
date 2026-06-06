import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Target,
  Building2,
  ShoppingBag,
  Rocket,
  Palette,
  Smartphone,
  Zap,
  MessageCircle,
  Search,
  Clock,
  RefreshCw,
  CheckCircle2,
  Phone,
  FileText,
  Code2,
  Send,
  Trophy,
  Stethoscope,
  UtensilsCrossed,
  Home as HomeIcon,
  BadgeCheck,
  Plus,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero solicitar un presupuesto para mi página web.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "Páginas Web Profesionales desde $180 — Entrega en 5 días | MAS Marketing Agency",
  description:
    "Páginas web profesionales a medida desde $180 USD. Landing, corporativa, e-commerce y páginas para emprendedores. Entrega en 5 días hábiles. Servicio en LATAM, España y EE.UU.",
  alternates: { canonical: "/paginas-web" },
  openGraph: {
    title:
      "Páginas Web Profesionales — Tu página lista en 5 días | MAS Marketing Agency",
    description:
      "Desarrollo a medida, tecnología moderna y diseño orientado a convertir. Desde $180 USD.",
    type: "website",
    url: "/paginas-web",
    images: [
      {
        url: "/og-paginas-web.png",
        width: 1200,
        height: 630,
        alt: "Páginas Web Profesionales — Tu página lista en 5 días desde $180 USD.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Páginas Web Profesionales — Desde $180 USD | MAS Marketing Agency",
    description:
      "Landing, corporativa, e-commerce y páginas para emprendedores. Entrega en 5 días.",
    images: ["/og-paginas-web.png"],
  },
};

const PAGE_TYPES = [
  {
    icon: Target,
    title: "Landing Page",
    body: "Página de captura o venta para un producto o servicio específico. Ideal para campañas publicitarias.",
    priceFrom: "$180",
  },
  {
    icon: Building2,
    title: "Página Corporativa",
    body: "Presencia profesional completa para tu empresa. Servicios, equipo, contacto y credibilidad.",
    priceFrom: "$320",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    body: "Tienda online para vender tus productos directamente. Carrito, pagos y gestión de pedidos.",
    priceFrom: "$600",
  },
  {
    icon: Rocket,
    title: "Página para Emprendedores",
    body: "Diseñada para coaches, consultores y creadores de contenido que quieren vender su conocimiento online.",
    priceFrom: "$280",
  },
];

const INCLUDED = [
  { icon: Palette, label: "Diseño personalizado a tu marca" },
  { icon: Smartphone, label: "Versión móvil y escritorio optimizada" },
  { icon: Zap, label: "Velocidad de carga alta" },
  { icon: MessageCircle, label: "Formulario de contacto o WhatsApp integrado" },
  { icon: Search, label: "SEO básico incluido" },
  { icon: Clock, label: "Entrega en 5 días hábiles" },
  { icon: RefreshCw, label: "Revisiones incluidas" },
];

const PROCESS = [
  {
    n: "01",
    icon: Phone,
    title: "Llamada de diagnóstico gratuita",
    body: "Entendemos tu negocio, tu audiencia y el objetivo de la página.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Propuesta y diseño",
    body: "Te presentamos la estructura y el diseño antes de desarrollar.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Desarrollo",
    body: "Construimos tu página con tecnología moderna de alto rendimiento.",
  },
  {
    n: "04",
    icon: Send,
    title: "Entrega y ajustes",
    body: "Revisiones incluidas hasta que quedes conforme. Entrega en 5 días hábiles.",
  },
];

const AUDIENCE = [
  { icon: Building2, label: "Negocios locales" },
  { icon: Rocket, label: "Emprendedores" },
  { icon: Trophy, label: "Coaches y consultores" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: ShoppingBag, label: "Tiendas" },
  { icon: HomeIcon, label: "Inmobiliarias" },
  { icon: BadgeCheck, label: "Otros profesionales" },
];

const FAQS = [
  {
    q: "¿En 5 días realmente está lista?",
    a: "Sí, para proyectos estándar. El plazo empieza cuando tenemos toda la información del cliente: textos, logo, colores y referencias. Proyectos más complejos como e-commerce pueden tomar hasta 15 días.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Tu logo, colores de marca si los tienes, los textos principales y referencias de páginas que te gusten. Si no tienes algo, te ayudamos a definirlo.",
  },
  {
    q: "¿Incluye hosting y dominio?",
    a: "No están incluidos en el precio de desarrollo, pero te asesoramos para conseguirlos al mejor costo y los configuramos sin cargo adicional.",
  },
];

export default function PaginasWeb() {
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
              Páginas Web Profesionales
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Tu página web lista en{" "}
              <span className="text-gold-gradient">5 días.</span>{" "}
              Diseñada para vender.
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Desarrollo a medida, tecnología moderna de alto rendimiento y
              diseño orientado a convertir visitas en clientes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero mi página
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#tipos"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver tipos de páginas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                Entrega en 5 días hábiles
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[var(--gold)]" />
                Tecnología moderna · alto rendimiento
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                Desde $180 USD
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- TIPOS DE PÁGINAS ----------------------- */}
        <section
          id="tipos"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Tipos de páginas
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Una página para{" "}
              <span className="text-gold-gradient">cada objetivo.</span>
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {PAGE_TYPES.map(({ icon: Icon, title, body, priceFrom }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-[var(--gold)]/30 bg-black/30 text-[var(--gold)]">
                      Desde {priceFrom}
                    </div>
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

        {/* ------------------------- QUÉ INCLUYE -------------------------- */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué incluye cada página?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Todo lo esencial,{" "}
              <span className="text-gold-gradient">sin sorpresas.</span>
            </h2>

            <div className="mt-14 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-white font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- PRECIOS ---------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Precios
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Desde{" "}
              <span className="text-gold-gradient">$180</span> hasta{" "}
              <span className="text-gold-gradient">$600 USD</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Según el tipo y la complejidad del proyecto. Precio a consultar
              — agenda una llamada gratuita y te doy un presupuesto exacto en
              24 horas.
            </p>

            <div className="mt-10 flex items-center justify-center">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicitar presupuesto exacto
                <ArrowUpRight className="h-4 w-4" />
              </a>
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
              <span className="text-gold-gradient">Cinco días.</span>
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

        {/* -------------------------- AUDIENCE ---------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para quién es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Para cualquier negocio que necesite{" "}
              <span className="text-gold-gradient">
                presencia digital profesional.
              </span>
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
              ¿Listo para tener una{" "}
              <span className="text-gold-gradient">página que venda?</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Solicita tu presupuesto gratis. En 24 horas te enviamos un
              número exacto para tu proyecto.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicita tu presupuesto gratis
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
              Desde $180 USD · Llamada de diagnóstico gratuita
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
              "https://masmarketingagency.com/paginas-web#service",
            name: "Páginas Web Profesionales",
            serviceType: "Web Design and Development",
            category: "Web Development",
            description:
              "Desarrollo de páginas web a medida para negocios locales y digitales: landing, corporativa, e-commerce y páginas para emprendedores. Entrega en 5 días hábiles, diseño personalizado, SEO básico y tecnología moderna de alto rendimiento.",
            url: "https://masmarketingagency.com/paginas-web",
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
              lowPrice: "180",
              highPrice: "600",
              offerCount: PAGE_TYPES.length,
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tipos de páginas web disponibles",
              itemListElement: PAGE_TYPES.map((p, idx) => ({
                "@type": "Offer",
                position: idx + 1,
                priceCurrency: "USD",
                price: p.priceFrom.replace("$", ""),
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  description: `Desde ${p.priceFrom} USD`,
                },
                itemOffered: {
                  "@type": "Service",
                  name: p.title,
                  description: p.body,
                },
              })),
            },
            audience: {
              "@type": "Audience",
              audienceType:
                "Negocios locales, emprendedores, coaches y consultores, restaurantes, clínicas, tiendas, inmobiliarias y cualquier negocio que necesite presencia digital profesional.",
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
            "@id": "https://masmarketingagency.com/paginas-web#faq",
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
