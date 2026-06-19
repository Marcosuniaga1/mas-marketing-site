import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Clock,
  Bot,
  CheckCircle2,
  Calendar,
  Mail,
  FileSpreadsheet,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Home as HomeIcon,
  Scale,
  ShoppingBag,
  XCircle,
  Plus,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WHATSAPP_NUMBER, BRAND } from "@/lib/utils";

const WHATSAPP_CTA_MESSAGE =
  "Hola, quiero más información sobre el Agente de WhatsApp con IA para mi negocio.";
const WHATSAPP_CTA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_CTA_MESSAGE,
)}`;

const ORG_ID = "https://masmarketingagency.com/#organization";

export const metadata: Metadata = {
  title: "Agentes de WhatsApp con IA — Atención 24/7 sin contratar personal",
  description:
    "Agentes conversacionales de WhatsApp con IA: responden preguntas libres como una secretaria real, agendan citas y captan clientes 24/7. Configuración personalizada por MAS Marketing Agency.",
  alternates: { canonical: "/agentes-whatsapp" },
  openGraph: {
    title: "Agentes de WhatsApp con IA — MAS Marketing Agency",
    description:
      "Atención 24/7 con conversación humanizada — no chatbot de botones. Integración con calendario, Gmail y Sheets. Pensado para negocios locales y digitales.",
    type: "website",
    url: "/agentes-whatsapp",
    images: [
      {
        url: "/og-agentes-whatsapp.png",
        width: 1200,
        height: 630,
        alt: "Agentes de WhatsApp con IA — Tu negocio atiende 24/7.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de WhatsApp con IA — MAS Marketing Agency",
    description:
      "Atención conversacional 24/7 que responde preguntas libres y lleva al cliente a una cita.",
    images: ["/og-agentes-whatsapp.png"],
  },
};

const CONTRAST = [
  {
    bad: "Chatbot con botones",
    good: "Conversación libre como una persona",
  },
  {
    bad: "Respuestas predeterminadas",
    good: "Respuestas según el contexto del negocio",
  },
  {
    bad: "Árbol de menús que frustra",
    good: "Diálogo natural que entiende y guía",
  },
  {
    bad: "Cliente abandona la conversación",
    good: "Cliente termina con cita, visita o llamada",
  },
];

const INCLUDED = [
  {
    icon: Bot,
    title: "Configuración personalizada",
    body: "El agente aprende el tono, los servicios, los horarios y las preguntas frecuentes de tu negocio. Le ponemos nombre y personalidad acordes a tu marca.",
  },
  {
    icon: Sparkles,
    title: "Mantenimiento mensual",
    body: "Ajustamos el agente cada mes con base en las conversaciones reales: nuevas preguntas, cambios de precios, promociones y mejoras de tono.",
  },
  {
    icon: Calendar,
    title: "Integración con calendario",
    body: "El agente lee tu disponibilidad y agenda citas directamente en Google Calendar — sin que tengas que confirmar manualmente.",
  },
  {
    icon: Mail,
    title: "Integración con Gmail",
    body: "Cuando el cliente lo pide, el agente envía confirmaciones, presupuestos o documentos por correo desde tu cuenta.",
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets o Excel",
    body: "Cada conversación, lead y cita queda registrada en una hoja viva — accesible para tu equipo en tiempo real.",
  },
  {
    icon: MessageCircle,
    title: "Nombre y personalidad de marca",
    body: "El agente se presenta como parte de tu equipo, no como una IA genérica. Tu cliente siente que habla con tu negocio.",
  },
];

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Clínicas y consultorios",
    body: "Agenda primera consulta, responde sobre tratamientos y direcciones, filtra urgencias.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    body: "Toma reservas, responde sobre carta y horarios, gestiona pedidos a domicilio.",
  },
  {
    icon: HomeIcon,
    title: "Inmobiliarias",
    body: "Califica leads, comparte fichas de propiedades, coordina visitas con el asesor.",
  },
  {
    icon: Scale,
    title: "Despachos legales",
    body: "Recibe el caso, agenda la primera consulta y envía la lista de documentos necesarios.",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas y e-commerce",
    body: "Resuelve dudas de producto, gestiona pedidos, recupera carritos abandonados.",
  },
  {
    icon: Building2,
    title: "Cualquier negocio con WhatsApp",
    body: "Si te llegan consultas por WhatsApp, te sirve un Agente. Lo adaptamos a tu rubro.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico del negocio",
    body: "Una reunión de 30 minutos para entender tus servicios, tono, horarios, FAQs y qué necesitas que el agente haga (agendar, calificar, vender, soportar).",
  },
  {
    n: "02",
    title: "Configuración del agente",
    body: "Construimos el agente con tu marca: nombre, personalidad, base de conocimiento, integraciones con calendario, Gmail y Sheets. Lo probamos contigo antes de salir.",
  },
  {
    n: "03",
    title: "Activación y monitoreo",
    body: "Conectamos el agente a tu WhatsApp Business y monitoreamos las primeras semanas. Mensualmente afinamos respuestas y agregamos lo que vaya apareciendo.",
  },
];

const FAQS = [
  {
    q: "¿El agente reemplaza a mi equipo?",
    a: "No. El agente atiende la primera línea de consultas 24/7 y libera a tu equipo para enfocarse en lo que realmente importa. Cuando la situación lo requiere, escala a una persona real.",
  },
  {
    q: "¿Qué pasa cuando el agente no sabe responder algo?",
    a: "El agente está entrenado para manejar esa situación con naturalidad — reconoce el límite, informa al cliente y escala internamente sin que la conversación se corte.",
  },
  {
    q: "¿Funciona para cualquier tamaño de negocio?",
    a: "Sí. Lo configuramos según las dimensiones y necesidades de cada negocio — desde un consultorio individual hasta una cadena con múltiples sedes.",
  },
];

export default function AgentesWhatsApp() {
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
              Agentes de WhatsApp con IA
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Atiende a tus clientes{" "}
              <span className="text-gold-gradient">24/7</span> sin contratar
              más personal.
            </h1>

            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Un Agente de WhatsApp con IA conversa como una secretaria real en
              el lobby de tu negocio. Responde preguntas libres, guía al
              cliente y lo lleva a una cita, llamada o visita — todos los días,
              a toda hora.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero mi Agente
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold text-white hover:border-[var(--gold)] transition-colors"
              >
                Cómo funciona
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                Disponible 24/7, 365 días
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[var(--gold)]" />
                Conversación natural, no botones
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-[var(--gold)]" />
                Personalidad de tu marca
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------- WHAT IT IS ------------------------- */}
        <section
          id="que-es"
          className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué es?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              No es un chatbot.{" "}
              <span className="text-gold-gradient">Es un agente.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Olvídate de los menús con números, los árboles de botones y las
              respuestas predeterminadas. Un Agente de WhatsApp con IA es una
              conversación real: entiende lo que el cliente pregunta, responde
              según el contexto de tu negocio y avanza hacia el objetivo —
              agendar, vender, calificar o resolver.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {CONTRAST.map((c) => (
                <div
                  key={c.bad}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--subtle-foreground)]" />
                    <div className="text-[var(--muted-foreground)] line-through decoration-[var(--subtle-foreground)]/60">
                      {c.bad}
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                    <div className="text-white font-medium">{c.good}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------- INCLUDED -------------------------- */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Qué incluye?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Todo lo que tu agente necesita,{" "}
              <span className="text-gold-gradient">listo desde el día uno.</span>
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/40 hover:bg-[var(--card-hover)] transition-all"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--gold)] group-hover:border-[var(--gold)]/60 transition-colors">
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

        {/* --------------------------- INDUSTRIES ------------------------- */}
        <section className="relative py-20 sm:py-28 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Para qué negocios?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Si te llegan consultas por WhatsApp,{" "}
              <span className="text-gold-gradient">te sirve un Agente.</span>
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-[var(--font-sora)] text-lg font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------ HOW IT WORKS -------------------------- */}
        <section id="como-funciona" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              ¿Cómo funciona?
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Tres pasos.{" "}
              <span className="text-gold-gradient">Sin fricción.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Del diagnóstico a tener tu Agente conversando con clientes —
              típicamente entre 7 y 14 días.
            </p>

            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="font-[var(--font-sora)] text-5xl font-bold text-[var(--gold)]/30">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-[var(--font-sora)] text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {s.body}
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
        <section className="relative py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
              Precio
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              A consultar — según el{" "}
              <span className="text-gold-gradient">tamaño de tu negocio.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)] leading-relaxed text-lg">
              El precio cambia según volumen de mensajes, integraciones, idiomas
              y nivel de personalización. En 15 minutos por WhatsApp te damos
              un rango exacto para tu caso.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Quiero mi Agente
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
              Auditoría inicial gratuita · Respuesta en minutos
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BreadcrumbJsonLd pageName="Agentes WhatsApp" pageUrl="/agentes-whatsapp" />

      {/* --------------------- JSON-LD: Service ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://masmarketingagency.com/agentes-whatsapp#service",
            name: "Agentes de WhatsApp con IA",
            serviceType: "AI Chatbot Development",
            category: "Conversational AI",
            description:
              "Agentes conversacionales de WhatsApp con IA que atienden clientes 24/7 con conversación humanizada. Configuración personalizada por industria, mantenimiento mensual e integraciones con Google Calendar, Gmail y Google Sheets o Excel.",
            url: "https://masmarketingagency.com/agentes-whatsapp",
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
              "@type": "BusinessAudience",
              audienceType:
                "Clínicas, restaurantes, inmobiliarias, despachos legales, tiendas y cualquier negocio que reciba consultas por WhatsApp.",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "PriceSpecification",
                description:
                  "Precio a consultar según dimensiones del negocio, volumen de mensajes, integraciones y personalización.",
              },
              availability: "https://schema.org/InStock",
              url: WHATSAPP_CTA_URL,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Qué incluye el Agente de WhatsApp",
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
              "https://masmarketingagency.com/agentes-whatsapp#faq",
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
