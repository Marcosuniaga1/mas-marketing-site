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
  FAQS,
} from "@/components/sections";

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
            name: "MAS Marketing Agency",
            description:
              "Agencia de marketing digital especializada en creación de páginas web, publicidad digital, SEO, branding y gestión de redes sociales.",
            url: "https://masmarketingagency.com",
            logo: "https://masmarketingagency.com/logo.png",
            image: "https://masmarketingagency.com/logo.png",
            telephone: "+58 412 999 1787",
            address: {
              "@type": "PostalAddress",
              addressCountry: "VE",
              addressLocality: "Venezuela",
            },
            sameAs: ["https://www.instagram.com/mas.marketingagency/"],
            areaServed: ["VE", "CO", "MX", "US", "ES", "PA"],
            priceRange: "$$",
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
