"use client";

import type { ReactNode } from "react";

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

// Enlace que registra un evento GA4 con el gtag cargado en el layout raíz.
export function TrackedLink({
  href,
  event,
  className,
  children,
}: {
  href: string;
  event: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        const gtag = (window as unknown as { gtag?: Gtag }).gtag;
        gtag?.("event", event, { transport_type: "beacon", link_url: href });
      }}
    >
      {children}
    </a>
  );
}
