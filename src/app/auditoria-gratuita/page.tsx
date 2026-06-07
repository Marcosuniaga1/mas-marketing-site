import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Monitor,
  Share2,
  Megaphone,
  Search,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Calendar,
  FileCheck,
  Gift,
  ShieldCheck,
  Clock,
  Plus,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero solicitar mi auditoría digital gratuita.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title:
    "Auditoría Digital Gratuita — Descubre por qué tu negocio no vende online | MAS Marketing Agency",
  description:
    "Auditoría digital gratuita para negocios en LATAM, España y EE.UU. Analizamos página web, redes sociales, publicidad y SEO — y te entregamos un plan de acción concreto. Sin costo. Sin compromiso.",
  alternates: { canonical: "/auditoria-gratuita" },
  openGraph: {
    title: "Auditoría Digital Gratuita — MAS Marketing Agency",
    description:
      "Descubre qué está frenando tu negocio online. Diagnóstico completo y plan de acción — sin costo, sin compromiso.",
    type: "website",
    url: "/auditoria-gratuita",
    images: [
      {
        url: "/og-auditoria-gratuita.png",
        width: 1200,
        height: 630,
        alt: "Auditoría Digital Gratuita — Descubre qué está frenando tu negocio.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auditoría Digital Gratuita — MAS Marketing Agency",
    description:
      "Diagnóstico completo de tu presencia digital + plan de acción. Sin costo.",
    images: ["/og-auditoria-gratuita.png"],
  },
};

const AUDIT_AREAS = [
  {
    icon: Monitor,
    title: "Página web",
    body: "Velocidad, diseño, estructura, llamadas a la acción y conversión.",
  },
  {
    icon: Share2,
    title: "Redes sociales",
    body: "Presencia, consistencia de marca, contenido y engagement.",
  },
  {
    icon: Megaphone,
    title: "Publicidad digital",
    body: "Si estás corriendo anuncios, revisamos si están bien configurados y qué está fallando.",
  },
  {
    icon: Search,
    title: "SEO y posicionamiento",
    body: "Cómo apareces en Google y qué oportunidades estás perdiendo.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    body: "Si aplica, revisamos tu ficha y cómo mejorarla.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    body: "Configuración, automatización y uso como canal de ventas.",
  },
];

const DELIVERABLES = [
  "Diagnóstico completo de tu presencia digital actual",
  "Identificación de los 3 problemas principales que frenan tus resultados",
  "Plan de acción priorizado con pasos concretos",
  "Recomendación de los servicios que realmente necesitas (sin vender lo que no aplica)",
  "Todo en una llamada de 30-45 minutos por WhatsApp o videollamada",
];

const RELATABLE = [
  "Tienes página web pero no recibes consultas ni clientes por ella.",
  "Estás invirtiendo en publicidad pero no ves resultados claros.",
  "Tu negocio tiene presencia en redes pero no convierte.",
  "Quieres empezar con publicidad digital pero no sabes por dónde.",
  "Sientes que tu competencia aparece antes que tú en Google.",
];

const PROCESS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    body: "Cuéntanos brevemente sobre tu negocio y qué no está funcionando.",
  },
  {
    n: "02",
    icon: Calendar,
    title: "Agendamos la llamada",
    body: "En menos de 24 horas coordinamos una sesión de 30-45 minutos.",
  },
  {
    n: "03",
    icon: FileCheck,
    title: "Recibes tu plan",
    body: "Al finalizar la llamada tienes un diagnóstico claro y los próximos pasos.",
  },
];

const FAQS = [
  {
    q: "¿La auditoría es realmente gratuita?",
    a: "Sí, sin costo y sin compromiso de contratación. El objetivo es que conozcas exactamente qué mejorar — si después quieres que lo hagamos nosotros, perfecto. Si no, te vas con el diagnóstico igual.",
  },
  {
    q: "¿Cuánto dura la sesión?",
    a: "Entre 30 y 45 minutos por WhatsApp o videollamada, según tu disponibilidad.",
  },
  {
    q: "¿Necesito tener página web para pedir la auditoría?",
    a: "No. Auditamos lo que tengas — aunque sea solo Instagram o WhatsApp Business. Si no tienes nada, te decimos por dónde empezar.",
  },
];

export default function AuditoriaGratuita() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* ----------------------------- HERO ----------------------------- */}
        <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 hero-bg overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold-soft)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              <Gift className="h-3.5 w-3.5" />
              Auditoría Digital Gratuita
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Descubre por qué tu negocio{" "}
              <span className="text-gold-gradient">no está vendiendo online.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Analizamos tu presencia digital completa — página web, redes
              sociales, publicidad y posicionamiento — y te entregamos un plan
              de acción concreto.{" "}
              <span className="text-white font-medium">
                Sin costo. Sin compromiso.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero mi auditoría gratuita
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#auditamos"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Ver qué auditamos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-[var(--gold)]" />
                100% gratuita
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
                Sin compromiso
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                30–45 minutos
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------- WHAT WE AUDIT ----------------------- */}
        <section
          id="auditamos"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué auditamos?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Revisamos todo lo que{" "}
              <span className="text-gold-gradient">
                influye en tus resultados.
              </span>
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {AUDIT_AREAS.map(({ icon: Icon, title, body }) => (
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

        {/* -------------------------- WHAT YOU GET ------------------------ */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué recibes?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Te vas con un{" "}
              <span className="text-gold-gradient">plan en la mano.</span>
            </h2>

            <ul className="mt-14 space-y-4">
              {DELIVERABLES.map((d) => (
                <li
                  key={d}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" />
                  <span className="text-white font-medium text-lg leading-relaxed">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------------------------- RELATABLE --------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para quién es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Esta auditoría es{" "}
              <span className="text-gold-gradient">para ti si…</span>
            </h2>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 divide-y divide-[var(--border)]">
              {RELATABLE.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span
                    className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold-soft)] text-[var(--gold)]"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <p className="text-white text-lg leading-relaxed">{r}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[var(--muted-foreground)] text-lg">
              Si te identificas con{" "}
              <span className="text-white font-medium">al menos uno</span>,
              la auditoría te va a servir.
            </p>
          </div>
        </section>

        {/* ---------------------------- PROCESS --------------------------- */}
        <section id="proceso" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              El proceso
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Tres pasos.{" "}
              <span className="text-gold-gradient">Cero fricción.</span>
            </h2>

            <ol className="mt-14 grid gap-5 sm:grid-cols-3">
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
              Sin costo
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Tu negocio merece una{" "}
              <span className="text-gold-gradient">segunda opinión.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              Cientos de negocios en LATAM ya descubrieron qué los estaba
              frenando. La auditoría es gratuita —{" "}
              <span className="text-white font-medium">
                el costo de no hacerla no lo es.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Solicitar auditoría gratuita
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
              100% gratuita · Sin compromiso · 30–45 minutos
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
              "https://masmarketingagency.com/auditoria-gratuita#service",
            name: "Auditoría Digital Gratuita",
            serviceType: "Digital Audit / Marketing Consultation",
            category: "Free Marketing Consultation",
            description:
              "Auditoría digital sin costo y sin compromiso para negocios en LATAM, España y EE.UU. Analizamos página web, redes sociales, publicidad digital, SEO, Google Business Profile y WhatsApp Business — y entregamos un plan de acción concreto en una llamada de 30-45 minutos.",
            url: "https://masmarketingagency.com/auditoria-gratuita",
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
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
              description:
                "Auditoría digital 100% gratuita, sin compromiso de contratación. Diagnóstico + plan de acción priorizado, entregado en una llamada de 30-45 minutos.",
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Negocios con presencia digital que no están obteniendo resultados: páginas web que no convierten, campañas publicitarias sin retorno claro, redes sociales sin engagement comercial o ausencia de posicionamiento en Google.",
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
              "https://masmarketingagency.com/auditoria-gratuita#faq",
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
