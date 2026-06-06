import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BRAND, WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre nosotros — Marco Suniaga, Director",
  description:
    "Marco Suniaga, Director de MAS Marketing Agency. Estratega con +10 años de experiencia uniendo artes escénicas, PNL e IA para campañas digitales rentables en LATAM, España y EE.UU.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre nosotros — MAS Marketing Agency",
    description:
      "Marco Suniaga, Director de MAS Marketing Agency. +10 años diseñando campañas digitales rentables para LATAM, España y EE.UU.",
    type: "profile",
    url: "/sobre-nosotros",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre nosotros — MAS Marketing Agency",
    description:
      "Marco Suniaga, Director. Estratega de marketing con +10 años de experiencia.",
  },
};

const ORG_ID = "https://masmarketingagency.com/#organization";
const PERSON_ID = "https://masmarketingagency.com/sobre-nosotros#marco-suniaga";

const SERVICES = [
  "Páginas web",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Branding",
  "Redes sociales",
];

const MARKETS = [
  "Venezuela (HQ)",
  "Colombia",
  "México",
  "Panamá",
  "España",
  "Estados Unidos",
];

const HIGHLIGHTS = [
  {
    title: "+10 años de experiencia",
    body: "Trayectoria multidisciplinaria en marketing digital, artes escénicas y comunicación.",
  },
  {
    title: "Métodos integrativos",
    body: "PNL e hipnoterapia aplicadas a la captación y experiencia de cliente.",
  },
  {
    title: "Marketing + IA",
    body: "Usamos los métodos más innovadores en IA para acelerar productos, servicios y resultados.",
  },
];

export default function SobreNosotros() {
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
              Sobre nosotros
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Estrategas que unen{" "}
              <span className="text-gold-gradient">arte, mente y datos.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              {BRAND.name} es una agencia fundada en Venezuela que diseña
              campañas digitales rentables para empresas de LATAM, España y
              Estados Unidos. Páginas web, publicidad, branding y
              automatización — con un enfoque humano y respaldado por IA.
            </p>
          </div>
        </section>

        {/* -------------------------- FOUNDER BIO ------------------------- */}
        <section
          id="fundador"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-square w-full max-w-[280px] rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--card)] to-black overflow-hidden">
                <div className="absolute inset-0 grid place-items-center">
                  <Image
                    src="/logo.png"
                    alt="Marco Suniaga — MAS Marketing Agency"
                    width={140}
                    height={140}
                    className="opacity-90"
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/20 rounded-2xl" />
              </div>

              <div className="mt-6 space-y-1">
                <div className="font-[var(--font-sora)] text-xl font-semibold text-white">
                  Marco Suniaga
                </div>
                <div className="text-sm text-[var(--gold)] uppercase tracking-[0.2em]">
                  Director
                </div>
                <div className="text-sm text-[var(--muted-foreground)] pt-2">
                  {BRAND.name}
                </div>
                <a
                  href="https://www.linkedin.com/in/mas-marketing-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-animated inline-flex items-center gap-1.5 mt-3 text-sm text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Bio del fundador
              </p>
              <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
                Marketing que combina escena,{" "}
                <span className="text-gold-gradient">mente e inteligencia artificial.</span>
              </h2>

              <div className="mt-8 space-y-6 text-[var(--muted-foreground)] text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Marco Suniaga</span>{" "}
                  es estratega de marketing experto en diseñar campañas
                  efectivas, creativas y rentables en el universo digital.
                </p>
                <p>
                  Con más de 10 años de experiencia, une su amplia trayectoria
                  en las artes escénicas para mentorizar a emprendedores en sus
                  estrategias de comunicación.
                </p>
                <p>
                  Utiliza su experiencia en{" "}
                  <span className="text-white font-medium">
                    PNL e Hipnoterapia
                  </span>{" "}
                  para generar experiencias de captación integrativa e
                  inmersiva de clientes.
                </p>
                <p>
                  Con la aparición de la IA, aplica los métodos más innovadores
                  para la generación de productos, servicios y resultados para
                  sus clientes.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
                  >
                    <div className="font-[var(--font-sora)] text-base font-semibold text-white">
                      {h.title}
                    </div>
                    <div className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {h.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- AGENCY ----------------------------- */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                La agencia
              </p>
              <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
                Fundada en Venezuela.{" "}
                <span className="text-gold-gradient">Sirviendo a tres continentes.</span>
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed text-lg">
                {BRAND.name} trabaja con marcas en {MARKETS.length} mercados.
                Cada cuenta es atendida por un equipo dedicado de
                diseñadores, desarrolladores, media buyers y copywriters —
                todo coordinado desde un tablero compartido por cliente.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-2">
                {MARKETS.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[var(--gold)] shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                Qué hacemos
              </p>
              <h3 className="mt-4 font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.1]">
                Seis servicios, un solo objetivo: convertir.
              </h3>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-white"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ----------------------------- CTA ------------------------------ */}
        <section className="relative py-20 sm:py-24 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
              ¿Listo para hablar con{" "}
              <span className="text-gold-gradient">Marco</span> y su equipo?
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Auditoría inicial gratuita. Respuesta en minutos por WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Escribir por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver formulario
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* ----------------------- JSON-LD: Person ----------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": PERSON_ID,
            name: "Marco Suniaga",
            jobTitle: "Director",
            description:
              "Estratega de marketing experto en diseñar campañas efectivas, creativas y rentables en el universo digital. Con más de 10 años de experiencia, une su trayectoria en las artes escénicas para mentorizar a emprendedores en sus estrategias de comunicación. Utiliza PNL e hipnoterapia para generar experiencias de captación integrativa e inmersiva, y aplica los métodos más innovadores en IA para la generación de productos, servicios y resultados.",
            worksFor: { "@id": ORG_ID },
            sameAs: ["https://www.linkedin.com/in/mas-marketing-agency/"],
            knowsAbout: [
              "Marketing Digital",
              "Estrategia Digital",
              "Meta Ads",
              "Google Ads",
              "SEO",
              "Branding",
              "Programación Neurolingüística",
              "Hipnoterapia",
              "Inteligencia Artificial",
              "Artes Escénicas",
            ],
            url: "https://masmarketingagency.com/sobre-nosotros",
          }),
        }}
      />

      {/* --------------------- JSON-LD: Organization -------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": ORG_ID,
            name: "MAS Marketing Agency",
            legalName: "MAS Marketing Agency",
            url: "https://masmarketingagency.com",
            logo: "https://masmarketingagency.com/logo.png",
            image: "https://masmarketingagency.com/og-image.png",
            description:
              "Agencia de marketing digital fundada en Venezuela. Especializada en páginas web, Meta y Google Ads, SEO, branding y redes sociales para empresas en LATAM, España y Estados Unidos.",
            foundingLocation: {
              "@type": "Place",
              name: "Venezuela",
              address: {
                "@type": "PostalAddress",
                addressCountry: "VE",
                addressLocality: "Venezuela",
              },
            },
            founder: { "@id": PERSON_ID },
            email: BRAND.email,
            telephone: "+58 412 999 1787",
            areaServed: ["VE", "CO", "MX", "US", "ES", "PA"],
            sameAs: [
              "https://www.instagram.com/mas.marketingagency/",
              "https://www.linkedin.com/in/mas-marketing-agency/",
              "https://www.facebook.com/proyectoida",
            ],
          }),
        }}
      />
    </>
  );
}
