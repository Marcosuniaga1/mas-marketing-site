import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cpoxiuricasanchez.com"),
  title: {
    default:
      "Consultorio Popular Odontológico — Dra. Xiurica Sánchez · San Fernando de Apure",
    template: "%s | Consultorio Popular Odontológico",
  },
  description:
    "Consultorio Popular Odontológico de la Dra. Xiurica Sánchez en San Fernando de Apure. Ortodoncia, estética dental, prótesis, endodoncia, limpieza, blanqueamiento, extracciones y rayos X. Agenda por WhatsApp.",
  keywords: [
    "odontología",
    "dentista",
    "ortodoncia",
    "Consultorio Popular Odontológico",
    "San Fernando de Apure",
    "Xiurica Sánchez",
    "limpieza dental",
    "brackets",
    "blanqueamiento",
    "prótesis",
    "endodoncia",
    "Apure",
    "Venezuela",
  ],
  authors: [
    { name: "Consultorio Popular Odontológico · Dra. Xiurica Sánchez" },
  ],
  openGraph: {
    title:
      "Consultorio Popular Odontológico — Dra. Xiurica Sánchez",
    description:
      "Sonrisas sanas, cuidado cercano en San Fernando de Apure. Agenda tu consulta por WhatsApp.",
    locale: "es_VE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
