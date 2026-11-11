import type { Metadata } from "next";
import { ArrowUpRight, ChevronDown, AudioLines, FileText, Clapperboard, GraduationCap, Megaphone, CheckCircle2 } from "lucide-react";
import { LegalFooter } from "@/components/legal-footer";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { VideoConSonido } from "@/components/video-con-sonido";
import { TrackedLink } from "@/app/ig/tracked-link";
import { whatsappLinkWith } from "@/lib/utils";

const AGENDA_URL = whatsappLinkWith(
  "Hola Marco, vi el video «Tu curso, con tu voz» y quiero agendar una llamada sin compromiso.",
);

export const metadata: Metadata = {
  title: "Tu curso, con tu voz — Lo construimos por ti",
  description:
    "Para coaches, terapeutas, mentoras y educadoras que aman enseñar y quieren su energía para su vida. Producimos tu curso con tu voz, montamos tu academia y la ponemos a vender.",
  alternates: { canonical: "/tu-curso-con-tu-voz" },
  openGraph: {
    title: "Tu curso, con tu voz — MAS Marketing Agency",
    description: "Tu curso vendiendo. Tu energía, para tu vida. Mira el video de 2 minutos.",
    type: "website",
    url: "/tu-curso-con-tu-voz",
    images: [{ url: "/videos/tu-curso-con-tu-voz-poster.jpg", width: 1280, height: 720, alt: "Tu curso, con tu voz" }],
  },
};

const STEPS = [
  { icon: AudioLines, title: "Tu voz", body: "Escuchamos cómo enseñas: tu manera de explicar, tus palabras, tus ejemplos." },
  { icon: FileText, title: "Tus guiones", body: "Escribimos tus lecciones para que suenen a ti, a partir de lo que ya sabes." },
  { icon: Clapperboard, title: "Tus videolecciones", body: "Las producimos en video animado, con tu propia voz. Tú te quedas detrás de cámara." },
  { icon: GraduationCap, title: "Tu academia", body: "La montamos con el nombre que tú elijas, con página de venta y cobro listos." },
  { icon: Megaphone, title: "Tus campañas", body: "Campañas que trabajan todos los días mientras tú sigues con tu vida." },
];

const TU_PARTE = ["Decir sí", "Unas fotos", "Tu firma"];

const ACADEMIAS = [
  { name: "Academia Zyan Renace · Rebeca Trujillo", url: "https://rebecatrujillo.somosaula.com/" },
  { name: "Consciencia Vital · Gloria Dupont", url: "https://institutoconcienciavital.com/" },
];

function AgendaButton({ event }: { event: string }) {
  return (
    <TrackedLink
      href={AGENDA_URL}
      event={event}
      className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-base sm:text-lg font-bold text-black hover:bg-[var(--gold-bright)] transition-colors"
    >
      Agenda una llamada sin compromiso
      <ArrowUpRight className="h-5 w-5" />
    </TrackedLink>
  );
}

export default function TuCursoConTuVoz() {
  return (
    <>
      <BreadcrumbJsonLd pageName="Tu curso, con tu voz" pageUrl="/tu-curso-con-tu-voz" />
      <main className="relative">
        {/* ------------------------- HERO + VIDEO ------------------------- */}
        <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-24 hero-bg overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <p className="reveal text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Tu curso, con tu voz · Done for You</p>
            <h1 className="reveal mt-5 font-[var(--font-sora)] text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-white">
              Tu curso vendiendo.{" "}
              <span className="text-gold-gradient">Tu energía, para tu vida.</span>
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Mira el video de 2 minutos. Te cuento cómo construimos tu curso por ti.
            </p>

            <div className="mt-10">
              <VideoConSonido
                src="/videos/tu-curso-con-tu-voz.mp4"
                poster="/videos/tu-curso-con-tu-voz-poster.jpg"
                title="Tu curso, con tu voz"
              />
            </div>

            {/* El botón al que apunta el cierre del video */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <ChevronDown className="baja-flecha h-8 w-8 text-[var(--gold)]" aria-hidden="true" />
              <AgendaButton event="dfy_click_agenda_video" />
              <p className="text-sm text-[var(--muted-foreground)]">Conversamos por WhatsApp y agendamos 30 minutos, sin costo.</p>
            </div>
          </div>
        </section>

        {/* --------------------------- CÓMO LO HACEMOS --------------------------- */}
        <section className="relative py-20 sm:py-24 border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Cómo lo hacemos</p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
              En 14 días tienes tu curso. <span className="text-gold-gradient">En 28, tu academia vendiendo.</span>
            </h2>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm text-[var(--gold)]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-[var(--font-sora)] text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------ TU PARTE ------------------------------ */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Tu parte</p>
              <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05]">
                Cabe en <span className="text-gold-gradient">un día.</span>
              </h2>
              <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Del resto nos encargamos nosotros: guiones, lecciones, videos, academia y campañas.
              </p>
            </div>
            <ul className="space-y-4">
              {TU_PARTE.map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5">
                  <CheckCircle2 className="h-7 w-7 shrink-0 text-[var(--gold)]" />
                  <span className="font-[var(--font-sora)] text-2xl font-semibold text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------- ACADEMIAS ---------------------------- */}
        <section className="relative py-20 sm:py-24 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Ya funcionan</p>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl sm:text-4xl font-bold text-white tracking-tight">Academias que ya montamos</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {ACADEMIAS.map((a) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 text-left text-white hover:border-[var(--gold)] transition-colors"
                >
                  <span className="font-medium">{a.name}</span>
                  <ArrowUpRight className="h-5 w-5 text-[var(--gold)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center gap-3">
              <AgendaButton event="dfy_click_agenda_final" />
              <p className="text-sm text-[var(--muted-foreground)]">Sin compromiso. Te escucho y te digo si esto encaja contigo.</p>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </>
  );
}
