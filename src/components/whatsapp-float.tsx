"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/utils";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para agendar una cita"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center gap-3 rounded-full bg-[#25D366] pr-5 pl-3 py-3 text-white shadow-[0_14px_40px_-8px_rgba(37,211,102,0.55)] transition-all duration-500 hover:scale-[1.02] hover:bg-[#1fb859] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 ring-2 ring-white/30">
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.1 17.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.1-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.5zM16 3C8.8 3 3 8.8 3 16c0 2.2.6 4.3 1.6 6.1L3 29l7.1-1.6c1.7.9 3.7 1.5 5.9 1.5 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.2.9.9-4.1-.3-.4C5.5 19.8 5 18 5 16c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11.7-11 11.7z" />
        </svg>
      </span>
      <span className="hidden sm:flex flex-col text-left leading-tight">
        <span className="text-[11px] uppercase tracking-[0.14em] opacity-80">
          WhatsApp
        </span>
        <span className="text-sm font-semibold">Agenda tu cita</span>
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
    </a>
  );
}
