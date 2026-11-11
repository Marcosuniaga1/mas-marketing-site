import Link from "next/link";
import { BRAND } from "@/lib/utils";

// Pie mínimo para landings de anuncios: solo páginas legales y avisos de plataformas.
export function LegalFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 text-center text-xs leading-relaxed text-[var(--muted-foreground)] sm:px-8">
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Páginas legales">
        <Link href="/politica-de-privacidad" className="hover:text-white">
          Política de privacidad
        </Link>
        <Link href="/eliminacion-de-datos" className="hover:text-white">
          Eliminación de datos
        </Link>
      </nav>
      <p className="mx-auto mt-5 max-w-3xl">
        Este sitio no forma parte de Meta Platforms, Inc., Google LLC ni TikTok, y no está respaldado por ellas.
        Facebook e Instagram son marcas registradas de Meta Platforms, Inc.; Google y YouTube, de Google LLC; TikTok, de
        ByteDance Ltd.
      </p>
      <p className="mx-auto mt-3 max-w-3xl">
        Los plazos y resultados dependen de cada proyecto y de la entrega oportuna de la información necesaria.
      </p>
      <p className="mt-4">
        © {new Date().getFullYear()} {BRAND.name} · {BRAND.email}
      </p>
    </footer>
  );
}
