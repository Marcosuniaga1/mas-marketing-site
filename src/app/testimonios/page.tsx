import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { InstagramIcon } from "@/components/icons";

const WA_CTA = "https://wa.me/584129991787?text=Hola%20MAS%2C%20quiero%20empezar%20mi%20proyecto";

const POST_URL = "https://www.instagram.com/p/DYvc6ojpMQG/";

const TESTIMONIALS = [
  {
    name: "Mariale Velazco",
    role: "Mentora de mujeres emprendedoras",
    photo: "/testimonios/mariale.jpg",
    instagram: "https://www.instagram.com/soymarialevelazco",
    quote:
      "Marco Suniaga a través de su Agencia Mas Marketing Agency me ha dado mucha claridad. Yo no sabía cómo hacer para lanzar mis productos o cursos, él me dio una estrategia que va desde un Low Ticket hasta un High Ticket en el servicio que ellos llaman Emprendedores 360. Lo bueno es que se encargan de todo: me arman la estrategia, me crean las campañas, las páginas, los guiones, todo. Yo solo grabo mis clases. Eso me ha gustado mucho.",
  },
  {
    name: "Sulma Marte",
    role: "Asesora Redes Sociales | Social Media y Community Manager",
    photo: "/testimonios/sulma.jpg",
    instagram: "https://www.instagram.com/sulmamarte11/",
    quote:
      "Trabajar con Marco Suniaga, su agencia y el programa Emprendedores 360 ha marcado un antes y un después en la estrategia de mi negocio. Me han ayudado a estructurar un embudo impecable, empezando con un infoproducto de cinco lecciones como low ticket que no solo me está permitiendo expandirme y monetizar desde ya, sino que construye el camino perfecto hacia el programa high ticket de mis cursos de marketing digital. Más allá del conocimiento técnico, valoro enormemente el apoyo constante y la visión estratégica.",
  },
  {
    name: "Yasmín Perdomo",
    role: "Speaker, Mentora de empresarias",
    photo: "/testimonios/yasmin.jpg",
    instagram: "https://www.instagram.com/yasminperdomop/",
    quote:
      "La Agencia Mas Marketing Agency dirigida por Marco Suniaga me ha dado acompañamiento personalizado para el lanzamiento de mis cursos. Yo tengo un libro escrito, Empresarias en tacones, de allí se desprenden una serie de servicios, mentorías, talleres y cursos. Pero de tantas ideas que tengo, me sentía abrumada. Marco me ha hecho aterrizar estas ideas y convertirlas en productos y servicios claros, desde la idea inicial hasta la entrega final a mis clientes. Ya tengo mis 5 lecciones del Low Ticket y mi producto High Ticket listos. Yo solo grabo mis clases y ellos se encargan del resto. Me siento muy contenta con su programa Emprendedores 360.",
  },
];

export const metadata: Metadata = {
  title:
    "Testimonios — Resultados Reales de Nuestros Clientes | MAS Marketing Agency",
  description:
    "Conoce los testimonios de emprendedores y profesionales que confiaron en MAS Marketing Agency. Resultados reales con Emprendedores 360, diseño web y campañas digitales.",
  alternates: { canonical: "/testimonios" },
  openGraph: {
    title: "Testimonios — Resultados Reales | MAS Marketing Agency",
    description:
      "Lo que dicen quienes ya trabajaron con nosotros — resultados reales de emprendedores en LATAM.",
    type: "website",
    url: "/testimonios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonios — Resultados Reales | MAS Marketing Agency",
    description:
      "Lo que dicen quienes ya trabajaron con nosotros — resultados reales.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAS Marketing Agency",
  url: "https://masmarketingagency.com",
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Organization",
      name: "MAS Marketing Agency",
    },
  })),
};

export default function Testimonios() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 hero-bg overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              <Sparkles className="h-3.5 w-3.5" />
              Testimonios
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Lo que dicen quienes ya{" "}
              <span className="text-gold-gradient">trabajaron con nosotros.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Resultados reales de emprendedores y profesionales que confiaron
              en MAS Marketing Agency.
            </p>
          </div>
        </section>

        {/* -------------------- EMPRENDEDORES 360 TESTIMONIALS ------------ */}
        <section className="relative py-16 sm:py-24 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Emprendedores 360
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
              Historias de quienes ya{" "}
              <span className="text-gold-gradient">están creciendo.</span>
            </h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 hover:border-[var(--gold)]/40 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover border-2 border-[var(--gold)]/40"
                    />
                    <div className="min-w-0">
                      <h3 className="font-[var(--font-sora)] font-semibold text-white text-base leading-tight truncate">
                        {t.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--muted-foreground)] leading-snug line-clamp-2">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-sm text-[var(--muted-foreground)] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Ver perfil en Instagram
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------- DISEÑO WEB ------------------------- */}
        <section className="relative py-16 sm:py-24 border-b border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Diseño Web
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
              Resultados que{" "}
              <span className="text-gold-gradient">se ven.</span>
            </h2>

            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-[540px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 sm:p-4">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={POST_URL}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "12px",
                    boxShadow: "none",
                    margin: 0,
                    minWidth: "326px",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <a
                    href={POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver este post en Instagram
                  </a>
                </blockquote>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-[var(--muted-foreground)]">
              Kenia Carpio — Actriz —{" "}
              <a
                href="https://www.instagram.com/keniacarpio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] hover:underline"
              >
                @keniacarpio
              </a>
            </p>

            <p className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
              ¿No carga el post?{" "}
              <a
                href={POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] hover:underline inline-flex items-center gap-1"
              >
                Verlo en Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
        </section>

        {/* ------------------------------ CTA ----------------------------- */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <h2 className="font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.05]">
              ¿Quieres ser el próximo{" "}
              <span className="text-gold-gradient">caso de éxito?</span>
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WA_CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Empieza tu proyecto
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
