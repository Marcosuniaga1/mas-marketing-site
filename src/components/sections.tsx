import Image from "next/image";
import {
  Sparkles,
  Smile,
  Wrench,
  Syringe,
  Heart,
  Shield,
  Gem,
  Stethoscope,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Scan,
} from "lucide-react";
import { WHATSAPP_URL, BRAND, ADDRESS_LINES, MAPS_QUERY } from "@/lib/utils";

function Instagram({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-bg grain relative pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            San Fernando de Apure · Venezuela
          </span>
          <h1 className="mt-5 font-display text-[44px] sm:text-6xl lg:text-[76px] leading-[1.02] tracking-[-0.02em] text-foreground">
            Una sonrisa{" "}
            <em className="not-italic text-primary">cuidada</em>{" "}
            cambia cómo te ves.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Bienvenido al <strong className="font-semibold text-foreground">{BRAND.name}</strong> —
            atención dirigida por la <strong className="font-semibold text-foreground">{BRAND.doctor}</strong>.
            Tratamiento con tiempo, calma y un plan claro. Ortodoncia, estética,
            prótesis, endodoncia y más.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(13,127,122,0.55)] hover:bg-primary-hover transition"
            >
              Agendar mi cita
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              Ver servicios
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "+8", v: "años atendiendo Apure" },
              { k: "9", v: "tratamientos disponibles" },
              { k: "100%", v: "trato humano y cercano" },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4">
                <dt className="font-display text-3xl sm:text-4xl text-foreground tabular-nums">
                  {s.k}
                </dt>
                <dd className="text-[13px] text-muted-foreground leading-snug">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-muted shadow-[0_30px_80px_-30px_rgba(13,42,45,0.35)]">
            <Image
              src="/images/dra-consulta.jpg"
              alt="Dra. Xiurica Sánchez en el consultorio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/95 backdrop-blur px-4 py-3.5 flex items-center gap-3 shadow-lg border border-border">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <Calendar size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-[12px] text-muted-foreground">Próxima disponibilidad</p>
                <p className="text-sm font-semibold text-foreground">
                  Esta semana · cupos limitados
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-2 rounded-2xl bg-accent text-[#2a1e07] px-4 py-3 shadow-lg rotate-[-4deg]">
            <Gem size={16} strokeWidth={2} aria-hidden="true" />
            <span className="text-[13px] font-semibold">Trato humano</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Wrench,
    name: "Ortodoncia",
    desc: "Brackets convencionales con plan completo — estudios, colocación y controles mensuales.",
  },
  {
    icon: Sparkles,
    name: "Estética dental",
    desc: "Diseño de sonrisa, carillas directas e indirectas con acabados naturales.",
  },
  {
    icon: Heart,
    name: "Restauraciones",
    desc: "Resinas para caries, fracturas y reconstrucciones. Color adaptado a tu diente.",
  },
  {
    icon: Gem,
    name: "Prótesis",
    desc: "Totales, parciales y removibles. Devolvemos función y estética con piezas bien adaptadas.",
  },
  {
    icon: Syringe,
    name: "Endodoncia",
    desc: "Tratamiento de conducto con anestesia efectiva. Salvamos la pieza cuando es posible.",
  },
  {
    icon: Smile,
    name: "Limpieza dental",
    desc: "Remoción de sarro, pulido y flúor. La base de toda boca sana.",
  },
  {
    icon: Shield,
    name: "Blanqueamiento",
    desc: "Tonos más claros en sesión controlada, sin sensibilidad extrema.",
  },
  {
    icon: Stethoscope,
    name: "Extracciones (simples y cordales)",
    desc: "Desde piezas sencillas hasta cordales incluidos. Postoperatorio acompañado.",
  },
  {
    icon: Scan,
    name: "Rayos X periapicales",
    desc: "Radiografías digitales en sede para diagnóstico preciso y planes informados.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Servicios
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-foreground">
            Odontología integral en{" "}
            <span className="italic text-primary">un mismo lugar</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Nueve tratamientos cubiertos bajo el mismo consultorio. Primera
            consulta con diagnóstico y plan de tratamiento claro antes de
            empezar cualquier procedimiento.
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {SERVICES.map((s) => (
            <li
              key={s.name}
              className="group relative bg-card p-7 flex flex-col min-h-[200px] transition hover:bg-muted/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl text-foreground leading-snug">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            Los precios dependen del diagnóstico y la extensión del tratamiento.
            Consulta sin compromiso por WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition"
          >
            Consultar precios
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(13,42,45,0.35)]">
            <Image
              src="/images/dra-ortodoncia.jpg"
              alt="Dra. Xiurica Sánchez con modelo de ortodoncia"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/95 backdrop-blur border border-border px-4 py-3 text-sm">
              <p className="font-semibold text-foreground">Dra. Xiurica Sánchez</p>
              <p className="text-muted-foreground text-[13px]">
                Odontóloga · formación en ortodoncia
              </p>
            </div>
          </div>
          <div className="mt-4 relative aspect-[4/3] rounded-2xl overflow-hidden hidden sm:block">
            <Image
              src="/images/dra-paciente.jpg"
              alt="Consulta con paciente en el Consultorio Popular Odontológico"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Sobre la doctora
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.02em] text-foreground">
            Odontología sin prisa, con{" "}
            <span className="italic text-primary">criterio</span>.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-[17px] leading-relaxed">
            <p>
              Soy la <strong className="text-foreground font-semibold">Dra. Xiurica Sánchez</strong>.
              Dirijo el <strong className="text-foreground font-semibold">Consultorio Popular Odontológico</strong> en
              San Fernando de Apure porque creo que una sonrisa sana no
              debería ser un lujo.
            </p>
            <p>
              Me formé como odontóloga general y profundicé en ortodoncia
              (Espaço Científico Prof. Lawrence F. Andrews). Actualizo
              protocolos año tras año — pero el método sigue igual:
              explicar bien, cuidar el postoperatorio y estar disponible
              cuando tengas dudas.
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Planes de pago flexibles",
              "Urgencias atendidas el mismo día",
              "Rayos X periapicales en sede",
              "Protocolos de bioseguridad al día",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 text-primary shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const GALLERY_CASES = [
  {
    src: "/images/antes-despues-resina.jpg",
    alt: "Caso real de restauración con resina — antes y después",
    label: "Restauración con resina",
    tag: "Estética",
  },
  {
    src: "/images/ortodoncia-brackets.jpg",
    alt: "Tratamiento de ortodoncia con brackets convencionales",
    label: "Ortodoncia con brackets",
    tag: "Ortodoncia",
    rotate: true,
  },
  {
    src: "/images/dra-paciente.jpg",
    alt: "Paciente satisfecha tras tratamiento odontológico",
    label: "Experiencia pediátrica",
    tag: "Atención",
  },
  {
    src: "/images/dra-ortodoncia.jpg",
    alt: "Formación especializada en ortodoncia",
    label: "Formación continua",
    tag: "Clínica",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Galería
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.02em] text-foreground">
              Casos reales.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Resultados publicados con autorización. Si quieres ver más
              antes/después específicos a tu caso, escríbeme por WhatsApp
              y te los envío.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary-hover inline-flex items-center gap-1"
          >
            Pedir más casos <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_CASES.map((c) => (
            <li key={c.src} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                    c.rotate ? "rotate-90 scale-125" : ""
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-4">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-background/80">
                    {c.tag}
                  </span>
                  <p className="text-background text-sm font-semibold mt-1">
                    {c.label}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Andreína R.",
    role: "Paciente de ortodoncia",
    rating: 5,
    quote:
      "Me trataron el miedo al dentista en la primera cita. Dos años después terminé mis brackets y la experiencia fue de diez.",
  },
  {
    name: "Luis G.",
    role: "Blanqueamiento",
    rating: 5,
    quote:
      "Siempre explica todo antes de hacerlo. Salí con la sonrisa que quería y sin molestias al día siguiente.",
  },
  {
    name: "María A.",
    role: "Limpieza + resinas",
    rating: 5,
    quote:
      "La clínica es impecable. La doctora tiene paciencia real — no te siente un número.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-foreground text-background relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-accent-soft font-semibold">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.02em]">
            Lo que dicen mis{" "}
            <span className="italic text-accent">pacientes</span>.
          </h2>
        </div>
        <ul className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="relative rounded-2xl bg-background/[0.04] border border-background/10 p-7 backdrop-blur"
            >
              <Quote
                size={28}
                className="text-accent/80 mb-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="text-background/90 text-[17px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-background">{t.name}</p>
                  <p className="text-[13px] text-background/60">{t.role}</p>
                </div>
                <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrellas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const FEED = [
  "/images/fachada.jpg",
  "/images/dra-consulta.jpg",
  "/images/dra-paciente.jpg",
  "/images/antes-despues-resina.jpg",
  "/images/dra-ortodoncia.jpg",
  "/images/dra-casual.jpg",
];

export function InstagramFeed() {
  return (
    <section id="instagram" className="py-20 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Instagram
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-[-0.02em] text-foreground">
              @cpoxiuricasanchez
            </h2>
          </div>
          <a
            href="https://www.instagram.com/cpoxiuricasanchez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition"
          >
            <Instagram size={16} aria-hidden="true" />
            Seguir en Instagram
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {FEED.map((src, i) => (
            <li key={src + i}>
              <a
                href="https://www.instagram.com/cpoxiuricasanchez/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-lg overflow-hidden bg-muted border border-border"
                aria-label={`Ver publicación ${i + 1} en Instagram`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 16vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 bg-foreground/55 transition">
                  <Instagram size={22} className="text-background" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Location() {
  const hours = [
    { day: "Lunes a Viernes", time: "9:00 AM – 12:00 PM · 2:00 PM – 5:00 PM" },
    { day: "Sábados", time: "9:00 AM – 1:00 PM" },
    { day: "Domingos", time: "Cerrado" },
  ];
  return (
    <section id="ubicacion" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Ubicación y horarios
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.02em] text-foreground">
            Visítanos en{" "}
            <span className="italic text-primary">Apure</span>.
          </h2>
          <div className="mt-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-30px_rgba(13,42,45,0.35)]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada del Consultorio Popular Odontológico"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <ul className="mt-8 space-y-5 text-[15px]">
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Consultorio</p>
                {ADDRESS_LINES.map((line) => (
                  <p key={line} className="text-muted-foreground leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Teléfono / WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  +58 414-486-2906
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Horarios</p>
                <ul className="mt-1 space-y-1">
                  {hours.map((h) => (
                    <li key={h.day} className="flex flex-col sm:flex-row sm:gap-3 text-muted-foreground">
                      <span className="sm:w-36 sm:shrink-0 font-medium text-foreground/80">{h.day}</span>
                      <span className="text-foreground/70 tabular-nums text-[13.5px]">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_-30px_rgba(13,42,45,0.35)]">
            <iframe
              title="Mapa de ubicación del Consultorio Popular Odontológico"
              src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Agendamiento
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-[-0.02em] text-foreground">
            Reserva tu{" "}
            <span className="italic text-primary">consulta</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Cuéntanos qué necesitas y te respondemos en máximo 24 horas.
            Si prefieres una respuesta inmediata, WhatsApp es lo más rápido.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition group"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#25D366]/10 text-[#1fb859]">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M16 3C8.8 3 3 8.8 3 16c0 2.2.6 4.3 1.6 6.1L3 29l7.1-1.6c1.7.9 3.7 1.5 5.9 1.5 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">WhatsApp directo</p>
                <p className="text-[13px] text-muted-foreground">+58 414-486-2906</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            </a>
            <a
              href="mailto:contacto@cpoxiuricasanchez.com?subject=Quiero%20agendar%20una%20cita"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition group"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-[13px] text-muted-foreground">
                  contacto@cpoxiuricasanchez.com
                </p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            action="mailto:contacto@cpoxiuricasanchez.com"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(13,42,45,0.25)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                defaultValue="Consulta general"
              >
                <option>Consulta general</option>
                <option>Ortodoncia</option>
                <option>Estética dental</option>
                <option>Restauraciones</option>
                <option>Prótesis</option>
                <option>Endodoncia</option>
                <option>Limpieza dental</option>
                <option>Blanqueamiento</option>
                <option>Extracciones (simples o cordales)</option>
                <option>Rayos X periapicales</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Cuéntanos un poco más
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-y"
                placeholder="¿Qué te gustaría lograr con tu sonrisa?"
              />
            </div>
            <button
              type="submit"
              className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(13,127,122,0.55)] hover:bg-primary-hover transition"
            >
              Enviar solicitud
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <p className="mt-3 text-[12px] text-muted-foreground">
              Al enviar, abres tu cliente de correo con los datos precargados.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-semibold"
            >
              C
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold text-background">
                {BRAND.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-background/50">
                {BRAND.doctor}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm max-w-sm leading-relaxed">
            Odontología integral en San Fernando de Apure. Ortodoncia,
            estética, prótesis y salud bucal con trato cercano.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/cpoxiuricasanchez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20 transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-background/20 transition"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M16 3C8.8 3 3 8.8 3 16c0 2.2.6 4.3 1.6 6.1L3 29l7.1-1.6c1.7.9 3.7 1.5 5.9 1.5 7.2 0 13-5.8 13-13S23.2 3 16 3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-soft/80 font-semibold">
            Secciones
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#servicios" className="hover:text-background transition">Servicios</a></li>
            <li><a href="#sobre-mi" className="hover:text-background transition">Sobre la doctora</a></li>
            <li><a href="#galeria" className="hover:text-background transition">Casos reales</a></li>
            <li><a href="#testimonios" className="hover:text-background transition">Testimonios</a></li>
            <li><a href="#ubicacion" className="hover:text-background transition">Ubicación</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.18em] text-accent-soft/80 font-semibold">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {ADDRESS_LINES.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background transition">
                +58 414-486-2906
              </a>
            </li>
            <li>Lun–Vie · 9:00 AM – 12:00 PM · 2:00 PM – 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-background/60">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-center">
            Built with Claude Web Builder by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background hover:text-accent-soft transition"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
