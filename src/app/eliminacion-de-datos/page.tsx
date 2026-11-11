import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/utils";
import { LegalFooter } from "@/components/legal-footer";

export const metadata: Metadata = {
  title: "Eliminación de datos",
  description: "Cómo pedir a MAS Marketing Agency que elimine tus datos personales.",
  alternates: { canonical: "/eliminacion-de-datos" },
};

export default function EliminacionDeDatos() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 text-[var(--muted-foreground)] sm:px-8 [&_p]:mt-3 [&_p]:leading-relaxed [&_li]:mt-2">
        <Link href="/" className="text-sm text-[var(--gold)]">← {BRAND.name}</Link>
        <h1 className="mt-6 font-[var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">Eliminación de datos</h1>
        <p>Puedes pedirnos que eliminemos los datos personales que tengamos sobre ti. Así de simple:</p>
        <ol className="list-decimal pl-5">
          <li>
            Escribe a <a className="text-[var(--gold)]" href={`mailto:${BRAND.email}?subject=Eliminar%20mis%20datos`}>{BRAND.email}</a> con
            el asunto «Eliminar mis datos».
          </li>
          <li>Indica el nombre, teléfono o correo con el que te comunicaste con nosotros.</li>
          <li>En un máximo de 30 días eliminamos tus datos y te lo confirmamos por correo.</li>
        </ol>
        <p>
          Más detalles en nuestra <Link className="text-[var(--gold)]" href="/politica-de-privacidad">Política de privacidad</Link>.
        </p>
      </main>
      <LegalFooter />
    </div>
  );
}
