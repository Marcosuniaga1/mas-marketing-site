import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Bot, BrainCircuit, Cpu, Network, Radio, Sparkles, Braces } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { NeuralBg, CircuitSeparator } from "@/components/neural-bg";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { whatsappLinkWith } from "@/lib/utils";

const SERVICE_LABELS: Record<string, string> = {
  "/agentes-whatsapp": "Agentes de WhatsApp con IA",
  "/paginas-web": "Páginas Web Profesionales",
  "/campanas-digitales": "Campañas Digitales",
  "/seo-posicionamiento": "SEO y Posicionamiento",
  "/branding": "Branding e Identidad de Marca",
  "/emprendedores-360": "Emprendedores 360",
  "/auditoria-gratuita": "Auditoría Gratuita",
};

const SERVICE_WA_MESSAGES: Record<string, string> = {
  "/agentes-whatsapp": "Hola, quiero más información sobre el Agente de WhatsApp con IA para mi negocio.",
  "/paginas-web": "Hola, quiero solicitar un presupuesto para mi página web.",
  "/campanas-digitales": "Hola, quiero más información sobre las campañas digitales en Meta y Google Ads.",
  "/seo-posicionamiento": "Hola, quiero más información sobre los servicios de SEO y posicionamiento.",
  "/branding": "Hola, quiero más información sobre el servicio de branding e identidad de marca.",
  "/emprendedores-360": "Hola, quiero más información sobre Emprendedores 360 Done for You.",
  "/auditoria-gratuita": "Hola, quiero solicitar mi auditoría digital gratuita.",
};

const DEFAULT_WA_MESSAGE = "Hola, leí su blog y quiero saber más sobre los servicios de MAS Marketing Agency.";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Inteligencia Artificial": <BrainCircuit className="h-3 w-3" />,
  "Marketing Digital": <Network className="h-3 w-3" />,
  "SEO": <Radio className="h-3 w-3" />,
  "Branding": <Sparkles className="h-3 w-3" />,
  "Automatización": <Bot className="h-3 w-3" />,
  "Desarrollo Web": <Braces className="h-3 w-3" />,
  "Tecnología": <Cpu className="h-3 w-3" />,
};

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.featuredImage || "/og-image.png";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Marco Suniaga"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const serviceLabel =
    SERVICE_LABELS[post.relatedService] ?? "nuestros servicios";
  const waMessage =
    SERVICE_WA_MESSAGES[post.relatedService] ?? DEFAULT_WA_MESSAGE;
  const waHref = whatsappLinkWith(waMessage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Marco Suniaga",
      url: "https://masmarketingagency.com/sobre-nosotros",
    },
    publisher: {
      "@type": "Organization",
      name: "MAS Marketing Agency",
      url: "https://masmarketingagency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://masmarketingagency.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://masmarketingagency.com/blog/${post.slug}`,
    },
    image: post.featuredImage
      ? `https://masmarketingagency.com${post.featuredImage}`
      : "https://masmarketingagency.com/og-image.png",
    wordCount: post.content.trim().split(/\s+/).length,
    articleSection: post.category,
    inLanguage: "es",
  };

  return (
    <>
      <Nav />
      <main className="relative">
        {/* ----------------------------- HERO ------------------------------ */}
        <section className="relative pt-36 pb-12 sm:pt-44 sm:pb-16 overflow-hidden">
          <NeuralBg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--background), transparent)",
            }}
          />

          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>

            {/* meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--subtle-foreground)]">
              <span className="inline-flex items-center gap-1.5 rounded border border-[var(--gold)]/25 bg-[var(--gold)]/5 px-2 py-0.5 text-[var(--gold)]">
                {CATEGORY_ICONS[post.category] ?? <Cpu className="h-3 w-3" />}
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date + "T12:00:00").toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime} min de lectura
              </span>
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.08] text-white">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              {post.excerpt}
            </p>

            {/* author with AI agent indicator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--surface)]">
                  <Image
                    src="/logo.png"
                    alt="Marco Suniaga"
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                </div>
                {/* AI agent indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-[var(--surface)] border border-[var(--border-strong)]">
                  <Bot className="h-3 w-3 text-[var(--gold)]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/sobre-nosotros"
                    className="text-sm font-semibold text-white hover:text-[var(--gold)] transition-colors"
                  >
                    Marco Suniaga
                  </Link>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--gold)]">
                    <span className="agent-pulse h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                    AI-Assisted
                  </span>
                </div>
                <p className="text-xs text-[var(--subtle-foreground)]">
                  Director, MAS Marketing Agency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- FEATURED IMAGE ------------------------- */}
        {post.featuredImage && (
          <div className="mx-auto max-w-4xl px-5 sm:px-8 pb-8">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* ---------------------- CIRCUIT SEPARATOR ----------------------- */}
        <CircuitSeparator className="my-4" />

        {/* -------------------------- CONTENT ----------------------------- */}
        <section className="relative py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <article className="blog-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        {/* ---------------------- CIRCUIT SEPARATOR ----------------------- */}
        <CircuitSeparator />

        {/* ----------------------------- CTA ------------------------------ */}
        <section className="relative py-12 sm:py-16 pb-28 bg-[var(--surface)]">
          <div className="absolute inset-0 blog-dots opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-mono">
              <Network className="h-3.5 w-3.5" />
              Servicio relacionado
            </p>
            <h2 className="mt-4 font-[var(--font-sora)] text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.05]">
              ¿Te interesa{" "}
              <span className="text-gold-gradient">{serviceLabel}</span>?
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Agenda una llamada gratuita y te explicamos cómo podemos
              ayudarte.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shine inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                Hablemos por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              {post.relatedService && (
                <Link
                  href={post.relatedService}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-medium text-white hover:border-[var(--gold)]/40 transition-colors"
                >
                  Conoce el servicio
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ---------------------- CIRCUIT SEPARATOR ----------------------- */}
        <CircuitSeparator />

        {/* ---------------------- RELATED POSTS --------------------------- */}
        {related.length > 0 && (
          <section className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <h2 className="font-[var(--font-sora)] text-2xl font-bold text-white tracking-tight">
                También te puede interesar
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="blog-card group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6 transition-all relative overflow-hidden"
                  >
                    {/* circuit corner */}
                    <svg
                      className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      viewBox="0 0 64 64"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M64 0 L64 24 L48 24 L48 40 L32 40 L32 56" stroke="rgba(212,175,55,0.35)" strokeWidth="1" fill="none" />
                      <circle cx="64" cy="0" r="2" fill="rgba(212,175,55,0.5)" />
                      <circle cx="48" cy="24" r="1.5" fill="rgba(212,175,55,0.4)" />
                      <circle cx="32" cy="40" r="1.5" fill="rgba(212,175,55,0.4)" />
                    </svg>

                    <div className="relative flex items-center gap-3 text-xs font-mono text-[var(--subtle-foreground)]">
                      <span className="inline-flex items-center gap-1.5 rounded border border-[var(--gold)]/25 bg-[var(--gold)]/5 px-2 py-0.5 text-[var(--gold)]">
                        {CATEGORY_ICONS[r.category] ?? <Cpu className="h-3 w-3" />}
                        {r.category}
                      </span>
                      <span>{r.readingTime} min</span>
                    </div>
                    <h3 className="relative mt-3 font-[var(--font-sora)] text-base font-semibold text-white leading-snug group-hover:text-[var(--gold)] transition-colors">
                      {r.title}
                    </h3>
                    <p className="relative mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
      <BreadcrumbJsonLd pageName={post.title} pageUrl={`/blog/${post.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
