"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("sending");

    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hola, soy ${name.trim()}. Quiero recibir mi roadmap personalizado de Emprendedores 360. Mi correo es: ${email.trim()}`,
      );
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
        "_blank",
        "noopener,noreferrer",
      );
      setStatus("success");
    }, 600);
  }

  if (status === "success") {
    return (
      <div
        id="obtener-roadmap"
        className="mt-10 rounded-2xl border border-[#3b82f6]/30 bg-[#3b82f6]/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#3b82f6]" />
        <h3 className="mt-4 font-[var(--font-sora)] text-2xl font-bold text-white">
          ¡Listo!
        </h3>
        <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
          Completa el mensaje en WhatsApp para que podamos preparar tu roadmap
          personalizado. Te responderemos en menos de 48 horas.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
          }}
          className="mt-6 text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
        >
          Enviar otro correo
        </button>
      </div>
    );
  }

  return (
    <form
      id="obtener-roadmap"
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-left">
          <label
            htmlFor="lead-name"
            className="block text-sm font-medium text-[var(--muted-foreground)] mb-1.5"
          >
            Tu nombre
          </label>
          <input
            id="lead-name"
            type="text"
            required
            placeholder="Ej: María García"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-white placeholder:text-[var(--subtle-foreground)] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30"
          />
        </div>
        <div className="text-left">
          <label
            htmlFor="lead-email"
            className="block text-sm font-medium text-[var(--muted-foreground)] mb-1.5"
          >
            Tu correo
          </label>
          <input
            id="lead-email"
            type="email"
            required
            placeholder="maria@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-white placeholder:text-[var(--subtle-foreground)] outline-none transition-all duration-300 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/30"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Preparando...
          </>
        ) : (
          <>
            Quiero mi roadmap gratis
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
