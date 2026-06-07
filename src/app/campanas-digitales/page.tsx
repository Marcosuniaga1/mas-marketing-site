import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Target,
  Search,
  Lightbulb,
  Settings,
  Users,
  ImageIcon,
  Video,
  Activity,
  TrendingUp,
  BarChart3,
  Filter,
  Phone,
  Rocket,
  CheckCircle2,
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Home as HomeIcon,
  Trophy,
  Briefcase,
  BadgeCheck,
  Plus,
  Info,
  DollarSign,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";
import { MetaIcon, GoogleIcon } from "@/components/icons";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero más información sobre las campañas digitales en Meta y Google Ads.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "Campañas Digitales Meta Ads & Google Ads — Gestión profesional desde $50 | MAS Marketing Agency",
  description:
    "Gestión completa de campañas publicitarias en Facebook, Instagram y Google Ads. Estrategia, creativos, optimización y reportes mensuales para negocios en LATAM. Honorario desde $50 USD.",
  alternates: { canonical: "/campanas-digitales" },
  openGraph: {
    title:
      "Campañas Digitales Meta Ads & Google Ads — MAS Marketing Agency",
    description:
      "Publicidad digital que genera clientes reales — Meta Ads, Google Ads y gestión completa.",
    type: "website",
    url: "/campanas-digitales",
    images: [
      {
        url: "/og-campanas-digitales.png",
        width: 1200,
        height: 630,
        alt: "Campañas Digitales — Publicidad digital que genera clientes reales.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Campañas Digitales Meta Ads & Google Ads — MAS Marketing Agency",
    description:
      "Gestión completa en Facebook, Instagram y Google. Estrategia, creativos y resultados medibles.",
    images: ["/og-campanas-digitales.png"],
  },
};

const PLATFORMS = [
  {
    icon: MetaIcon,
    name: "Meta Ads",
    sub: "Facebook & Instagram",
    body: "Campañas de captación, remarketing, tráfico a WhatsApp, generación de leads y ventas. Segmentación precisa por intereses, comportamiento y ubicación.",
    bullets: [
      "Captación de nuevos clientes",
      "Remarketing inteligente",
      "Tráfico directo a WhatsApp",
      "Generación de leads y ventas",
    ],
  },
  {
    icon: GoogleIcon,
    name: "Google Ads",
    sub: "Búsqueda · Display · YouTube",
    body: "Anuncios de búsqueda para capturar clientes que ya están buscando lo que ofreces. Máxima intención de compra.",
    bullets: [
      "Anuncios en el momento exacto de búsqueda",
      "Máxima intención de compra",
      "Cobertura en Search + Display + YouTube",
      "Tráfico calificado a tu sitio",
    ],
  },
];

const INCLUDED = [
  { icon: Lightbulb, label: "Estrategia de campaña personalizada" },
  { icon: Settings, label: "Configuración completa de la cuenta publicitaria" },
  { icon: Users, label: "Segmentación de audiencias" },
  { icon: ImageIcon, label: "Piezas gráficas para los anuncios" },
  { icon: Video, label: "Guiones para videos publicitarios" },
  { icon: Activity, label: "Gestión mensual activa" },
  { icon: TrendingUp, label: "Optimización y escalamiento" },
  { icon: BarChart3, label: "Reportes y métricas mensuales" },
  { icon: Filter, label: "Estrategia de funnels" },
];

const PROCESS = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    body: "Analizamos tu negocio, competencia y objetivos para definir la estrategia.",
  },
  {
    n: "02",
    icon: Settings,
    title: "Configuración",
    body: "Creamos o auditamos la cuenta, definimos audiencias, creamos los anuncios.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Lanzamiento y gestión",
    body: "Activamos las campañas y las optimizamos semana a semana.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Reportes",
    body: "Recibes métricas claras cada mes: alcance, leads, costo por resultado y ROAS.",
  },
];

const AUDIENCE = [
  { icon: Building2, label: "Negocios locales" },
  { icon: ShoppingBag, label: "Tiendas online" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Stethoscope, label: "Clínicas" },
  { icon: HomeIcon, label: "Inmobiliarias" },
  { icon: Trophy, label: "Coaches y consultores" },
  { icon: Briefcase, label: "Despachos profesionales" },
  { icon: BadgeCheck, label: "Otros profesionales" },
];

const FAQS = [
  {
    q: "¿Cuánto presupuesto de pauta necesito para empezar?",
    a: "Recomendamos un mínimo de $100 USD/mes invertidos directamente en la plataforma (Meta o Google) para tener datos suficientes y permitir que las campañas optimicen. Ese presupuesto es independiente del honorario de gestión.",
  },
  {
    q: "¿Cuándo voy a ver resultados?",
    a: "Las primeras métricas aparecen entre los días 7 y 14 — alcance, costo por clic, primeros leads. La optimización profunda (bajar el costo por resultado y escalar) suele tomar entre 30 y 60 días, dependiendo del nicho y del volumen de datos.",
  },
  {
    q: "¿Trabajan con cualquier tipo de negocio?",
    a: "Trabajamos con la mayoría de los rubros. Las únicas excepciones son las categorías restringidas por las plataformas (juegos de azar, criptomonedas, sustancias controladas, etc.). En la llamada de diagnóstico confirmamos si tu negocio es elegible.",
  },
];

export default function CampanasDigitales() {
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
              Campañas Digitales · Meta Ads &amp; Google Ads
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Publicidad digital que genera{" "}
              <span className="text-gold-gradient">clientes reales,</span>{" "}
              no solo clics.
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Gestionamos tus campañas en Facebook, Instagram y Google de
              principio a fin — estrategia, creatividad, optimización y
              resultados medibles.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero más clientes
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
                <Target className="h-4 w-4 text-[var(--gold)]" />
                Segmentación quirúrgica
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[var(--gold)]" />
                Reportes mensuales claros
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[var(--gold)]" />
                Honorario desde $50 USD
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------- PLATFORMS --------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Plataformas
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Las dos plataformas{" "}
              <span className="text-gold-gradient">
                que más venden hoy.
              </span>
            </h2>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {PLATFORMS.map(({ icon: Icon, name, sub, body, bullets }) => (
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
              Todo lo que tu campaña necesita,{" "}
              <span className="text-gold-gradient">en un solo lugar.</span>
            </h2>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* -------------------------- INVERSIÓN --------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Inversión
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Dos números importantes,{" "}
              <span className="text-gold-gradient">claros desde el inicio.</span>
            </h2>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  Honorario de gestión
                </div>
                <div className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <span className="text-gold-gradient">$50</span>
                  <span className="text-[var(--muted-foreground)] text-2xl sm:text-3xl">
                    {" "}
                    – $700+
                  </span>
                </div>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                  USD al mes, según el alcance del proyecto. A consultar en la
                  llamada de diagnóstico.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                  Presupuesto de pauta
                </div>
                <div className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <span className="text-gold-gradient">Desde $100</span>
                  <span className="text-[var(--muted-foreground)] text-2xl sm:text-3xl">
                    /mes
                  </span>
                </div>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                  Inversión directa a Meta o Google.{" "}
                  <span className="text-white font-medium">
                    No incluida en el honorario.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                El presupuesto de pauta va directo a Meta o Google —{" "}
                <span className="font-semibold">
                  es independiente del honorario de gestión
                </span>
                . Te ayudamos a definir el monto óptimo según tu objetivo.
              </p>
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

        {/* -------------------------- AUDIENCE ---------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para quién es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Para negocios que quieren{" "}
              <span className="text-gold-gradient">clientes, no solo likes.</span>
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
              ¿Listo para conseguir clientes con{" "}
              <span className="text-gold-gradient">
                campañas que realmente funcionen?
              </span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Agenda una llamada de diagnóstico gratuita. Revisamos tu
              negocio, te decimos qué plataformas tienen más potencial y te
              damos un plan inicial sin compromiso.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicita tu diagnóstico gratuito
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
              Honorario desde $50 USD/mes · Pauta mínima recomendada $100/mes
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
              "https://masmarketingagency.com/campanas-digitales#service",
            name: "Campañas Digitales — Meta Ads & Google Ads",
            serviceType: "Digital Advertising Management",
            category: "Paid Media Management",
            description:
              "Gestión profesional de campañas publicitarias en Meta Ads (Facebook, Instagram) y Google Ads. Estrategia, configuración, creativos, optimización mensual y reportes claros para negocios en LATAM, España y EE.UU.",
            url: "https://masmarketingagency.com/campanas-digitales",
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
              lowPrice: "50",
              highPrice: "700",
              offerCount: 2,
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
              description:
                "Honorario de gestión desde $50 hasta $700+ USD/mes según el alcance. Presupuesto de pauta mínimo recomendado: $100 USD/mes (inversión directa a la plataforma, no incluida en el honorario).",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Plataformas publicitarias gestionadas",
              itemListElement: PLATFORMS.map((p, idx) => ({
                "@type": "Offer",
                position: idx + 1,
                itemOffered: {
                  "@type": "Service",
                  name: p.name,
                  description: p.body,
                },
              })),
            },
            audience: {
              "@type": "Audience",
              audienceType:
                "Negocios locales, tiendas online, restaurantes, clínicas, inmobiliarias, coaches y consultores, despachos profesionales — cualquier negocio que necesite clientes calificados a través de Meta Ads o Google Ads.",
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
              "https://masmarketingagency.com/campanas-digitales#faq",
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
