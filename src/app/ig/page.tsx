import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "./tracked-link";

const WA_EXPERTOS =
  "https://wa.me/584129991787?text=SISTEMA%20-%20Soy%20coach%2Fterapeuta%2Fconsultor";
const DEMO_NEGOCIOS = "https://tu-barberia.vercel.app";
const WA_NEGOCIOS =
  "https://wa.me/584129991787?text=SISTEMA%20-%20Tengo%20un%20negocio";

export const metadata: Metadata = {
  title: { absolute: "Elige tu camino · Más Marketing Agency" },
  description:
    "Expertos: lanza tu programa online. Negocios: apps y agentes IA de WhatsApp.",
  alternates: { canonical: "/ig" },
  robots: { index: false, follow: false },
};

const PATHS = [
  {
    tag: "🎓 COACHES, TERAPEUTAS Y CONSULTORES",
    title: "Quiero lanzar o vender mi programa online",
    body: "Agendas una llamada de diagnóstico. Revisamos tu mensaje y tu ángulo, y después te envío un roadmap de tu propuesta. Sin compromiso.",
    cta: "Agendar mi diagnóstico",
    href: WA_EXPERTOS,
    event: "ig_click_expertos",
  },
  {
    tag: "🏪 BARBERÍAS, CONSULTORIOS, RESTAURANTES Y NEGOCIOS LOCALES",
    title: "Quiero que mi negocio agende y responda solo",
    body: "Ves la demo real en 1 minuto: una app con el nombre de tu negocio y un agente de IA que responde tu WhatsApp. Si te sirve, lo conversamos.",
    cta: "Ver la demo de 1 minuto",
    href: DEMO_NEGOCIOS,
    event: "ig_click_negocios_demo",
    secondary: {
      label: "Prefiero escribir por WhatsApp",
      href: WA_NEGOCIOS,
      event: "ig_click_negocios_whatsapp",
    },
  },
];

export default function IgPage() {
  return (
    <main className="relative min-h-screen hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-5 pt-8 pb-6 sm:px-8 sm:pt-12">
        <header className="flex justify-center">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full border border-[var(--gold)]/40 bg-black">
            <Image
              src="/logo.png"
              alt="MAS Marketing Agency"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover"
            />
          </span>
        </header>

        <section className="mt-6 text-center">
          <h1 className="font-[var(--font-sora)] text-[1.75rem] leading-[1.1] font-bold tracking-[-0.02em] text-white sm:text-5xl">
            Hago que tu negocio{" "}
            <span className="text-gold-gradient">venda y responda solo</span>
          </h1>
          <p className="mt-3 text-base text-[var(--muted-foreground)] sm:text-lg">
            Elige tu camino:
          </p>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-6">
          {PATHS.map((p) => (
            <article
              key={p.event}
              className="service-card flex flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] p-5 sm:p-7"
            >
              <p className="text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] text-[var(--gold)]">
                {p.tag}
              </p>
              <h2 className="mt-3 font-[var(--font-sora)] text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                {p.body}
              </p>

              <TrackedLink
                href={p.href}
                event={p.event}
                className="gold-shine mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-[var(--gold-bright)]"
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>

              {/* Reserva el alto del enlace secundario para alinear los botones lado a lado */}
              {!p.secondary && <span aria-hidden="true" className="hidden h-[52px] md:block" />}

              {p.secondary && (
                <TrackedLink
                  href={p.secondary.href}
                  event={p.secondary.event}
                  className="mt-2 inline-flex min-h-[44px] items-center justify-center text-sm text-[var(--muted-foreground)] underline underline-offset-4 transition-colors hover:text-[var(--gold)]"
                >
                  {p.secondary.label}
                </TrackedLink>
              )}
            </article>
          ))}
        </section>

        <p className="mt-6 text-center text-sm leading-relaxed text-[var(--muted-foreground)] sm:mt-8">
          Caso real: Mariale Velazco lanzó su primer curso con $54 en anuncios:
          105 inscritas y 15 ventas.{" "}
          <Link
            href="/testimonios"
            className="whitespace-nowrap text-[var(--gold)] underline underline-offset-4 hover:text-[var(--gold-bright)]"
          >
            Ver testimonios
          </Link>
        </p>

        <footer className="mt-auto pt-8 text-center text-xs text-[var(--subtle-foreground)]">
          Más Marketing Agency · +7 años
        </footer>
      </div>
    </main>
  );
}
