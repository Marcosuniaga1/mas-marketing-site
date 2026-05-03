import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masmarketingagency.com"),
  title: {
    default:
      "MAS Marketing Agency — Páginas Web, Marketing Digital y Branding",
    template: "%s | MAS Marketing Agency",
  },
  description:
    "Agencia de marketing digital especializada en creación de páginas web, campañas de Meta y Google Ads, SEO, branding y redes sociales. Convertimos visitas en clientes.",
  keywords: [
    "agencia de marketing",
    "creación de páginas web",
    "diseño web Venezuela",
    "marketing digital",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "branding",
    "redes sociales",
    "MAS Marketing Agency",
  ],
  authors: [{ name: "MAS Marketing Agency" }],
  creator: "MAS Marketing Agency",
  openGraph: {
    title: "MAS Marketing Agency — Marketing que convierte. Webs que venden.",
    description:
      "Creamos páginas web, campañas y marcas que generan resultados medibles para empresas que quieren crecer.",
    locale: "es_VE",
    type: "website",
    siteName: "MAS Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAS Marketing Agency",
    description:
      "Páginas web, publicidad digital, SEO y branding para marcas que quieren crecer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
