import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/utils";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo MAS Marketing Agency recoge, usa y protege tus datos personales.",
  alternates: { canonical: "/politica-de-privacidad" },
};

const UPDATED = "10 de noviembre de 2026";

export default function PoliticaDePrivacidad() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 text-[var(--muted-foreground)] sm:px-8 [&_h2]:mt-10 [&_h2]:font-[var(--font-sora)] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_li]:mt-2">
        <Link href="/" className="text-sm text-[var(--gold)]">← {BRAND.name}</Link>
        <h1 className="mt-6 font-[var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">Política de privacidad</h1>
        <p>Última actualización: {UPDATED}.</p>

        <h2>Quiénes somos</h2>
        <p>
          {BRAND.name} es responsable del tratamiento de los datos que se recogen en masmarketingagency.com. Para cualquier
          consulta sobre privacidad, escríbenos a <a className="text-[var(--gold)]" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
        </p>

        <h2>Qué datos recogemos</h2>
        <ul className="list-disc pl-5">
          <li>Los datos que nos das al escribirnos por WhatsApp, correo o formularios: nombre, teléfono, correo y lo que nos cuentes sobre tu proyecto.</li>
          <li>Datos de navegación anónimos o seudónimos a través de Google Analytics: páginas visitadas, botones pulsados, dispositivo y país aproximado.</li>
        </ul>

        <h2>Para qué los usamos</h2>
        <ul className="list-disc pl-5">
          <li>Responder tu consulta y agendar la llamada que solicitas.</li>
          <li>Enviarte la información o propuesta que nos pidas.</li>
          <li>Medir y mejorar el sitio y nuestras campañas.</li>
        </ul>
        <p>Usamos tus datos con tu consentimiento o para atender la solicitud que nos haces. No los vendemos.</p>

        <h2>Con quién se comparten</h2>
        <p>
          Trabajamos con proveedores que procesan datos por nuestra cuenta: Google (Analytics), Meta (WhatsApp) y Netlify
          (alojamiento del sitio). Cada uno aplica su propia política de privacidad.
        </p>

        <h2>Cookies</h2>
        <p>Google Analytics usa cookies para medir visitas. Puedes bloquearlas o borrarlas desde la configuración de tu navegador.</p>

        <h2>Cuánto tiempo los guardamos</h2>
        <p>Guardamos tus datos de contacto mientras exista una relación comercial o hasta que nos pidas eliminarlos.</p>

        <h2>Tus derechos</h2>
        <p>
          Puedes pedirnos acceder a tus datos, corregirlos o eliminarlos en cualquier momento. Te explicamos cómo en{" "}
          <Link className="text-[var(--gold)]" href="/eliminacion-de-datos">Eliminación de datos</Link>.
        </p>
      </main>
      <LegalFooter />
    </div>
  );
}
