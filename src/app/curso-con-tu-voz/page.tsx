import type { Metadata } from "next";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { VideoConSonido } from "@/components/video-con-sonido";
import { LegalFooter } from "@/components/legal-footer";
import { TrackedLink } from "@/app/ig/tracked-link";
import { whatsappLinkWith } from "@/lib/utils";

// Landing mínima para anuncios: una sola acción posible (agendar).
const AGENDA_URL = whatsappLinkWith(
  "Hola Marco, vi el video «Tu curso, con tu voz» y quiero agendar una llamada sin compromiso.",
);

export const metadata: Metadata = {
  title: { absolute: "Tu curso, con tu voz · MAS Marketing Agency" },
  description: "Tu curso vendiendo. Tu energía, para tu vida. Mira el video de 2 minutos.",
  alternates: { canonical: "/curso-con-tu-voz" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Tu curso, con tu voz — MAS Marketing Agency",
    description: "Tu curso vendiendo. Tu energía, para tu vida.",
    type: "website",
    url: "/curso-con-tu-voz",
    images: [{ url: "/videos/tu-curso-con-tu-voz-poster.jpg", width: 1280, height: 720, alt: "Tu curso, con tu voz" }],
  },
};

export default function CursoConTuVoz() {
  return (
    <div className="flex min-h-screen flex-col hero-bg">
      <main className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <section className="relative mx-auto max-w-6xl px-5 pt-6 pb-14 text-center sm:px-8 sm:pt-7">
          <p className="reveal text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Tu curso, con tu voz · Done for You</p>
          <h1 className="reveal mt-4 font-[var(--font-sora)] text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
            Tu curso vendiendo. <span className="text-gold-gradient">Tu energía, para tu vida.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
            Mira el video de 2 minutos. Te cuento cómo construimos tu curso por ti.
          </p>

          <div
            className="mx-auto mt-6"
            // El video se ajusta al alto de la pantalla para que título, video y botón quepan sin hacer scroll.
            style={{ maxWidth: "min(100%, 64rem, calc((100svh - 295px) * 16 / 9))" }}
          >
            <VideoConSonido
              src="/videos/tu-curso-con-tu-voz.mp4"
              poster="/videos/tu-curso-con-tu-voz-poster.jpg"
              title="Tu curso, con tu voz"
            />
          </div>

          <div className="mt-2 flex flex-col items-center gap-1.5">
            <ChevronDown className="baja-flecha h-7 w-7 text-[var(--gold)]" aria-hidden="true" />
            <TrackedLink
              href={AGENDA_URL}
              event="dfy_min_click_agenda"
              className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-4 text-base font-bold text-black transition-colors hover:bg-[var(--gold-bright)] sm:px-8 sm:text-lg"
            >
              Agenda una llamada sin compromiso
              <ArrowUpRight className="h-5 w-5" />
            </TrackedLink>
            <p className="text-sm text-[var(--muted-foreground)]">Conversamos por WhatsApp y agendamos 30 minutos, sin costo.</p>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
}
