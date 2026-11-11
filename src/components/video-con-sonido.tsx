"use client";

import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

// Video que arranca en silencio (los navegadores solo permiten así la reproducción automática)
// con un botón animado que activa el sonido y reinicia el video desde el principio.
export function VideoConSonido({ src, poster, title }: { src: string; poster: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [conSonido, setConSonido] = useState(false);

  const activar = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.loop = false;
    v.currentTime = 0;
    void v.play();
    setConSonido(true);
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    gtag?.("event", "video_dfy_sonido", { video_title: title });
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--gold)]/40 bg-[#0A1128] shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]">
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={conSonido}
        aria-label={title}
        className="block h-full w-full"
      >
        Tu navegador no puede reproducir este video.
      </video>

      {!conSonido && (
        <button
          type="button"
          onClick={activar}
          aria-label="Activar el sonido y ver el video desde el principio"
          className="sonido-btn absolute left-1/2 top-1/2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[var(--gold)] px-4 py-2.5 text-sm font-bold text-black hover:bg-[var(--gold-bright)] sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
        >
          <Volume2 className="sonido-icon h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          Activar sonido
        </button>
      )}
    </div>
  );
}
