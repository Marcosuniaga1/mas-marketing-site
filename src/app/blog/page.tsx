import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Clock, Cpu, Bot, Network, Radio, Braces, BrainCircuit } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { NeuralBg, CircuitSeparator } from "@/components/neural-bg";
import { getAllPosts } from "@/lib/blog";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Inteligencia Artificial": <BrainCircuit className="h-3 w-3" />,
  "Marketing Digital": <Network className="h-3 w-3" />,
  "SEO": <Radio className="h-3 w-3" />,
  "Branding": <Sparkles className="h-3 w-3" />,
  "Automatización": <Bot className="h-3 w-3" />,
  "Desarrollo Web": <Braces className="h-3 w-3" />,
  "Tecnología": <Cpu className="h-3 w-3" />,
};

export const metadata: Metadata = {
  title: "Blog — Estrategias de Marketing Digital, IA y Negocios",
  description:
    "Artículos sobre marketing digital, inteligencia artificial, SEO, branding y estrategias para hacer crecer tu negocio en LATAM y España.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — MAS Marketing Agency",
    description:
      "Artículos sobre marketing digital, IA y estrategias de negocio.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — MAS Marketing Agency",
    description:
      "Artículos sobre marketing digital, IA y estrategias de negocio.",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="relative">
        {/* ------------------------------ HERO ------------------------------ */}
        <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
          {/* neural network background */}
          <NeuralBg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(212,175,55,0.12), transparent 70%)",
            }}
          />
          {/* bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--background), transparent)",
            }}
          />

          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-mono backdrop-blur-sm">
              <BrainCircuit className="h-3.5 w-3.5" />
              Blog
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] neural-pulse" />
            </div>

            <h1 className="reveal mt-6 font-[var(--font-sora)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Ideas que{" "}
              <span className="text-gold-gradient">impulsan negocios.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Estrategias, tendencias y guías prácticas sobre marketing digital,
              inteligencia artificial y crecimiento de negocios.
            </p>
          </div>
        </section>

        {/* ---------------------- CIRCUIT SEPARATOR ----------------------- */}
        <CircuitSeparator />

        {/* ------------------------------ POSTS ----------------------------- */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {posts.length === 0 ? (
              <p className="text-center text-[var(--muted-foreground)] text-lg py-20">
                Próximamente — estamos preparando contenido para ti.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-card group rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all flex flex-col"
                  >
                    {/* featured image */}
                    <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-black overflow-hidden">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-grid opacity-40" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
                      {/* circuit corner overlay */}
                      <svg
                        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        viewBox="0 0 80 80"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M80 0 L80 30 L60 30 L60 50 L40 50 L40 70 L20 70 L20 80" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none" />
                        <circle cx="80" cy="0" r="2.5" fill="rgba(212,175,55,0.6)" />
                        <circle cx="60" cy="30" r="2" fill="rgba(212,175,55,0.5)" />
                        <circle cx="40" cy="50" r="2" fill="rgba(212,175,55,0.5)" />
                        <circle cx="20" cy="70" r="2" fill="rgba(212,175,55,0.5)" />
                      </svg>
                      {/* circuit corner bottom-left */}
                      <svg
                        className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"
                        viewBox="0 0 64 64"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M0 64 L0 40 L16 40 L16 24 L32 24 L32 8" stroke="rgba(212,175,55,0.3)" strokeWidth="1" fill="none" />
                        <circle cx="0" cy="64" r="2" fill="rgba(212,175,55,0.4)" />
                        <circle cx="16" cy="40" r="1.5" fill="rgba(212,175,55,0.4)" />
                        <circle cx="32" cy="24" r="1.5" fill="rgba(212,175,55,0.4)" />
                      </svg>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* meta row */}
                      <div className="flex items-center gap-3 text-xs font-mono text-[var(--subtle-foreground)]">
                        <span className="inline-flex items-center gap-1.5 rounded border border-[var(--gold)]/25 bg-[var(--gold)]/5 px-2 py-0.5 text-[var(--gold)]">
                          {CATEGORY_ICONS[post.category] ?? <Cpu className="h-3 w-3" />}
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime} min
                        </span>
                      </div>

                      <h2 className="mt-3 font-[var(--font-sora)] text-lg font-semibold text-white leading-snug group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <time
                          dateTime={post.date}
                          className="text-xs font-mono text-[var(--subtle-foreground)]"
                        >
                          {new Date(post.date + "T12:00:00").toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                        <span className="inline-flex items-center gap-1 text-sm text-[var(--gold)] font-medium group-hover:gap-2 transition-all">
                          Leer
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BreadcrumbJsonLd pageName="Blog" pageUrl="/blog" />
    </>
  );
}
