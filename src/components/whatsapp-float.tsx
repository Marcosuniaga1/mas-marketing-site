"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/utils";
import { InstagramIcon } from "./icons";

type ChatMsg = {
  from: "bot" | "user";
  text: string;
};

type Step = "greet" | "name" | "service" | "budget" | "ready";

const QUICK_SERVICES = [
  "Página web",
  "Publicidad digital",
  "SEO",
  "Branding",
  "Redes sociales",
  "No lo sé aún",
];

const BUDGETS = ["Menos de $500", "$500 – $1.500", "$1.500 – $5.000", "Más de $5.000", "Me ayudan a definirlo"];

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("greet");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      from: "bot",
      text: "¡Hola! Soy del equipo de MAS Marketing 👋",
    },
    {
      from: "bot",
      text: "¿Cómo te llamas? Así te atiendo mejor.",
    },
  ]);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        const el = document.getElementById("chat-scroll");
        if (el) el.scrollTop = el.scrollHeight;
      }, 50);
      return () => clearTimeout(t);
    }
  }, [messages, open]);

  const say = (text: string, from: "bot" | "user" = "bot", delay = 0) => {
    setTimeout(() => {
      setMessages((m) => [...m, { from, text }]);
    }, delay);
  };

  const handleName = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setName(trimmed);
    say(trimmed, "user");
    setInput("");
    say(`Encantados, ${trimmed}. ¿Qué necesitas hoy?`, "bot", 500);
    setStep("service");
  };

  const pickService = (s: string) => {
    setService(s);
    say(s, "user");
    say(
      "Perfecto. Para recomendarte mejor, ¿tienes un presupuesto aproximado en mente?",
      "bot",
      500
    );
    setStep("budget");
  };

  const pickBudget = (b: string) => {
    setBudget(b);
    say(b, "user");
    say(
      `Listo${name ? ", " + name : ""}. Voy a pasarte con un asesor por WhatsApp para darte una propuesta concreta.`,
      "bot",
      500
    );
    say("Haz clic abajo y continuamos la conversación allá 👇", "bot", 1100);
    setStep("ready");
  };

  const buildWaLink = () => {
    const msg =
      `Hola, soy ${name || "un visitante del sitio"}.%0A` +
      `Me interesa: ${service || "más información"}%0A` +
      (budget ? `Presupuesto estimado: ${budget}%0A` : "") +
      `Vengo desde la web de MAS Marketing.`;
    return `https://wa.me/584129991787?text=${msg}`;
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 bottom-24 right-4 sm:right-6 w-[min(92vw,360px)] origin-bottom-right rounded-2xl border border-[var(--border-strong)] bg-[#0b0b0b] shadow-[0_30px_80px_-12px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col reveal"
          role="dialog"
          aria-label="Chat con el equipo de MAS"
        >
          <div className="relative px-4 py-4 bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] border-b border-[var(--border)] flex items-center gap-3">
            <div className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gold)] text-black font-[var(--font-sora)] font-bold">
                M
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25d366] ring-2 ring-[#0b0b0b]"
                aria-label="En línea"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">
                Equipo MAS
              </div>
              <div className="text-[11px] text-[var(--muted-foreground)]">
                Respondemos en minutos · Online
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="grid h-8 w-8 place-items-center rounded-full text-[var(--muted-foreground)] hover:text-white hover:bg-white/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            id="chat-scroll"
            className="thin-scroll flex-1 max-h-[380px] overflow-y-auto px-4 py-5 space-y-3 bg-[#080808]"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-[var(--gold)] text-black rounded-br-sm"
                      : "bg-[#151515] text-white rounded-bl-sm border border-[var(--border)]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {step === "service" && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK_SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => pickService(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-strong)] text-white hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {step === "budget" && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => pickBudget(b)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[var(--border-strong)] text-white hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] transition-colors"
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}

            {step === "ready" && (
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 text-white font-semibold text-sm hover:bg-[#1fb859] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Continuar por WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-white font-medium text-sm hover:border-[var(--gold)]/60 transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" />
                  O mándanos un DM en Instagram
                </a>
              </div>
            )}
          </div>

          {(step === "greet" || step === "name") && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleName();
              }}
              className="border-t border-[var(--border)] bg-[#0b0b0b] p-3 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tu nombre..."
                className="flex-1 rounded-full border border-[var(--border-strong)] bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-[var(--subtle-foreground)] focus:outline-none focus:border-[var(--gold)]"
                autoFocus
              />
              <button
                type="submit"
                aria-label="Enviar"
                className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gold)] text-black hover:bg-[var(--gold-bright)] transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className="border-t border-[var(--border)] bg-[#060606] px-4 py-2.5 text-[10px] text-[var(--subtle-foreground)] flex items-center justify-between">
            <span>Chat · MAS Marketing Agency</span>
            <span className="text-[var(--gold)]">Seguro & privado</span>
          </div>
        </div>
      )}

      {/* Floating buttons stack */}
      <div
        className={`fixed z-40 bottom-5 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3 transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Instagram quick access */}
        {!open && (
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de MAS Marketing"
            className="group grid h-11 w-11 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_rgba(214,41,118,0.5)] transition-transform hover:scale-[1.05]"
            style={{
              background:
                "linear-gradient(135deg, #feda75 0%, #fa7e1e 30%, #d62976 60%, #962fbf 100%)",
            }}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        )}

        {/* Chat toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar chat" : "Abrir chat con nosotros"}
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[var(--gold)] text-black shadow-[0_14px_40px_-8px_var(--gold-glow)] transition-all hover:scale-[1.04] hover:bg-[var(--gold-bright)]"
        >
          {!open && (
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[var(--gold)] opacity-50 pulse-soft"
            />
          )}
          {open ? (
            <X className="relative h-5 w-5" />
          ) : (
            <MessageCircle className="relative h-5 w-5" />
          )}
        </button>

        {/* WhatsApp direct */}
        {!open && (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp directo"
            className="group flex items-center gap-3 rounded-full bg-[#25d366] pr-5 pl-2 py-2 text-white shadow-[0_14px_40px_-8px_rgba(37,211,102,0.55)] transition-all hover:scale-[1.02] hover:bg-[#1fb859]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 ring-2 ring-white/25">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase tracking-[0.14em] opacity-80">
                WhatsApp
              </span>
              <span className="text-sm font-semibold">Escríbenos</span>
            </span>
          </a>
        )}
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.1 17.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.1-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.5zM16 3C8.8 3 3 8.8 3 16c0 2.2.6 4.3 1.6 6.1L3 29l7.1-1.6c1.7.9 3.7 1.5 5.9 1.5 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.2.9.9-4.1-.3-.4C5.5 19.8 5 18 5 16c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11.7-11 11.7z" />
    </svg>
  );
}
