"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const haloPos = useRef({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!pointer.matches) return;

    setActive(true);
    const reducedMotion = motion.matches;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const isClickable = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || tag === "SELECT" || tag === "LABEL") return true;
      if (el.getAttribute("role") === "button") return true;
      if ((el as HTMLElement).onclick) return true;
      return false;
    };

    const onOver = (e: MouseEvent) => {
      hovering.current = isClickable(e.target as Element);
    };

    let raf: number;
    const tick = () => {
      const lerp = reducedMotion ? 1 : 0.15;
      haloPos.current.x += (mouse.current.x - haloPos.current.x) * lerp;
      haloPos.current.y += (mouse.current.y - haloPos.current.y) * lerp;

      if (haloRef.current) {
        const size = hovering.current ? 48 : 32;
        const half = size / 2;
        const opacity = hovering.current ? 0.6 : 0.3;
        haloRef.current.style.width = `${size}px`;
        haloRef.current.style.height = `${size}px`;
        haloRef.current.style.opacity = String(opacity);
        haloRef.current.style.transform = `translate(${haloPos.current.x - half}px, ${haloPos.current.y - half}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#C4A050",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-100px, -100px)",
        }}
      />
      <div
        ref={haloRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid #C4A050",
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-100px, -100px)",
          transition: "width 0.25s ease-out, height 0.25s ease-out, opacity 0.25s ease-out",
        }}
      />
    </>
  );
}
