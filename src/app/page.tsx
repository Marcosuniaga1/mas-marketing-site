import { Nav } from "@/components/nav";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import {
  Hero,
  Services,
  About,
  Gallery,
  Testimonials,
  InstagramFeed,
  Location,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <InstagramFeed />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Consultorio Popular Odontológico",
            alternateName: "Consultorio Popular Odontológico — Dra. Xiurica Sánchez",
            description:
              "Consultorio odontológico dirigido por la Dra. Xiurica Sánchez en San Fernando de Apure. Ortodoncia, estética dental, prótesis, endodoncia, limpieza, blanqueamiento, extracciones y rayos X periapicales.",
            telephone: "+58 414-486-2906",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Calle Muñoz entre Calle Plaza y Calle Palo Fuerte, detrás de la Panadería Zaimar, Plaza Negro Primero",
              addressLocality: "San Fernando de Apure",
              addressRegion: "Apure",
              addressCountry: "VE",
            },
            openingHours: [
              "Mo-Fr 09:00-12:00",
              "Mo-Fr 14:00-17:00",
              "Sa 09:00-13:00",
            ],
            sameAs: ["https://www.instagram.com/cpoxiuricasanchez/"],
            medicalSpecialty: [
              "Orthodontics",
              "CosmeticDentistry",
              "Endodontics",
              "Prosthodontics",
            ],
          }),
        }}
      />
    </>
  );
}
