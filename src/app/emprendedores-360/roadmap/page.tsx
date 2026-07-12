import type { Metadata } from "next";
import {
  Map,
  Target,
  TrendingUp,
  Zap,
  Star,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { RoadmapHero } from "./hero";
import { LeadForm } from "./lead-form";
import { BRAND } from "@/lib/utils";

export const metadata: Metadata = {
  title:
    "Roadmap Personalizado para Emprendedores — Emprendedores 360",
  description:
    "Recibe gratis tu roadmap personalizado de 90 días para lanzar tu negocio digital. Estrategia paso a paso para coaches, consultores y profesionales que quieren monetizar su conocimiento.",
  alternates: { canonical: "/emprendedores-360/roadmap" },
  openGraph: {
    title: "Roadmap Personalizado — Emprendedores 360",
    description:
      "Tu plan de acción de 90 días para lanzar un negocio digital rentable. Gratis y personalizado.",
    type: "website",
    url: "/emprendedores-360/roadmap",
    images: [
      {
        url: "/og-emprendedores-360.png",
        width: 1200,
        height: 630,
        alt: "Roadmap Personalizado — Emprendedores 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap Personalizado — Emprendedores 360",
    description:
      "Tu plan de acción de 90 días para lanzar un negocio digital rentable.",
    images: ["/og-emprendedores-360.png"],
  },
};

const FEATURES = [
  {
    icon: Map,
    title: "Plan paso a paso",
    body: "Recibes un roadmap claro de 90 días adaptado a tu nicho, tu audiencia y tus recursos actuales. Sin ambigüedades.",
  },
  {
    icon: Target,
    title: "Estrategia personalizada",
    body: "Analizamos tu situación y te entregamos las acciones exactas que necesitas ejecutar, en el orden correcto.",
  },
  {
    icon: TrendingUp,
    title: "Enfocado en resultados",
    body: "Cada fase del roadmap está diseñada para generar tracción real: primeros clientes, primeras ventas, primeros ingresos.",
  },
];

const TESTIMONIALS = [
  {
    name: "Carolina M.",
    role: "Coach de vida · Venezuela",
    quote:
      "El roadmap me dio la claridad que necesitaba. En 60 días ya tenía mi primer producto digital vendido y una lista de 200 suscriptores.",
  },
  {
    name: "Andrés R.",
    role: "Consultor financiero · Colombia",
    quote:
      "Llevaba meses sin saber por dónde empezar. Con el plan de acción que me dieron, lancé mi webinar en 3 semanas y cerré 4 clientes.",
  },
  {
    name: "Lucía P.",
    role: "Psicóloga clínica · España",
    quote:
      "Lo que más me impresionó fue lo específico del plan. No era un PDF genérico — era exactamente lo que mi práctica necesitaba para crecer online.",
  },
];

const STEPS = [
  "Déjanos tu nombre y correo",
  "Respondemos con preguntas clave sobre tu negocio",
  "Te enviamos tu roadmap personalizado en 48h",
];

export default function RoadmapLandingPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)]">
      {/* ─── HERO ─── */}
      <RoadmapHero />

      {/* ─── CÓMO FUNCIONA ─── */}
      <section className="relative py-20 sm:py-28 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
              Así de simple
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.08]">
              3 pasos para recibir tu roadmap
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step} delay={i * 120}>
                <div className="flex flex-col items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] font-[var(--font-sora)] text-xl font-bold">
                    {i + 1}
                  </div>
                  <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="relative py-20 sm:py-28 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
              Qué incluye tu roadmap
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              No es un PDF genérico.{" "}
              <span className="roadmap-blue-gradient">
                Es tu plan de acción.
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Cada roadmap se construye a medida según tu experiencia, tu
              audiencia y tu punto de partida.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8 hover:border-[#3b82f6]/30 hover:bg-[var(--card-hover)] transition-all duration-300">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-[var(--font-sora)] text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFICIOS RÁPIDOS ─── */}
      <section className="relative py-20 sm:py-28 border-y border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-5 w-5 text-[#3b82f6]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#3b82f6] font-semibold">
                  Lo que obtienes gratis
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Diagnóstico de tu punto de partida digital",
                  "Roadmap de 90 días personalizado para tu nicho",
                  "Las 3 acciones inmediatas que debes ejecutar esta semana",
                  "Recomendación de modelo de monetización ideal para tu caso",
                  "Acceso prioritario a recursos exclusivos de Emprendedores 360",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="relative py-20 sm:py-28 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
              Historias reales
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.02]">
              Emprendedores que ya{" "}
              <span className="roadmap-blue-gradient">
                tienen su plan.
              </span>
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map(({ name, role, quote }, i) => (
              <ScrollReveal key={name} delay={i * 100}>
                <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-[#3b82f6]/20 mb-4" />
                  <p className="text-[var(--muted-foreground)] leading-relaxed flex-1 italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <div>
                      <p className="font-[var(--font-sora)] text-sm font-semibold text-white">
                        {name}
                      </p>
                      <p className="text-xs text-[var(--subtle-foreground)]">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-24 sm:py-32 border-t border-[var(--border)]">
        <div className="absolute inset-0 roadmap-hero-bg opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
              Tu próximo paso
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              Recibe tu roadmap{" "}
              <span className="roadmap-blue-gradient">personalizado.</span>
            </h2>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed text-lg">
              Déjanos tu nombre y correo. En 48 horas recibirás un plan de
              acción diseñado exclusivamente para tu negocio.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <LeadForm />
          </ScrollReveal>

          <p className="mt-6 text-xs text-[var(--subtle-foreground)]">
            100% gratis · Sin spam · Tus datos están seguros
          </p>
        </div>
      </section>

      {/* ─── FOOTER MÍNIMO ─── */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--subtle-foreground)]">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
          <a
            href="/emprendedores-360"
            className="inline-flex items-center gap-1.5 text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            Conocer Emprendedores 360
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>

      {/* ─── JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Roadmap Personalizado para Emprendedores",
            description:
              "Lead magnet: roadmap personalizado de 90 días para lanzar un negocio digital.",
            url: "https://masmarketingagency.com/emprendedores-360/roadmap",
            isPartOf: {
              "@type": "WebSite",
              name: BRAND.name,
              url: "https://masmarketingagency.com",
            },
          }),
        }}
      />
    </main>
  );
}
