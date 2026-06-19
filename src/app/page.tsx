import { Nav } from "@/components/nav";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import {
  Hero,
  TrustStrip,
  Services,
  AuditLocal,
  Benefits,
  Process,
  Cases,
  Testimonials,
  FAQ,
  Contact,
  Footer,
} from "@/components/sections";
import { FAQS } from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <AuditLocal />
        <Benefits />
        <Process />
        <Cases />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://masmarketingagency.com/#organization",
            name: "MAS Marketing Agency",
            description:
              "Agencia de marketing digital especializada en creación de páginas web, publicidad digital, SEO, branding y gestión de redes sociales.",
            url: "https://masmarketingagency.com",
            logo: {
              "@type": "ImageObject",
              url: "https://masmarketingagency.com/logo.png",
              width: 512,
              height: 512,
            },
            image: "https://masmarketingagency.com/logo.png",
            telephone: "+584129991787",
            address: {
              "@type": "PostalAddress",
              addressCountry: "VE",
              addressLocality: "Caracas",
              addressRegion: "Distrito Capital",
            },
            founder: {
              "@type": "Person",
              name: "Marco Suniaga",
              url: "https://masmarketingagency.com/sobre-nosotros",
            },
            sameAs: [
              "https://www.instagram.com/mas.marketingagency/",
              "https://www.linkedin.com/in/mas-marketing-agency/",
              "https://www.facebook.com/proyectoida",
            ],
            areaServed: ["VE", "CO", "MX", "US", "ES", "PA"],
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
              bestRating: "5",
            },
            serviceType: [
              "Web Design",
              "Digital Marketing",
              "SEO",
              "Branding",
              "Social Media Management",
              "Paid Advertising",
              "Email Marketing",
              "Google My Business Optimization",
              "Local Business Audit",
              "Professional Photography",
              "WhatsApp Catalog Design",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
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
