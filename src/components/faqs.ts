// Server-safe FAQ data. Imported by both the client FAQ component
// (sections.tsx) and the server page.tsx (for FAQPage JSON-LD).
// MUST NOT contain a "use client" directive — otherwise Next.js 16's
// RSC build will turn `FAQS` into a client-reference proxy when read
// from a Server Component, and `.map()` will throw at runtime.

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: "¿Cuánto tarda mi página web?",
    a: "Depende del alcance. Una landing entre 7 y 10 días, una página corporativa completa 14 a 21 días, y un e-commerce 21 a 35 días. Tendrás una primera versión para revisar antes del día 7.",
  },
  {
    q: "¿Trabajan con marcas fuera de Venezuela?",
    a: "Sí. Tenemos clientes activos en Venezuela, Colombia, México, Panamá, España y Estados Unidos. Todo el trabajo se maneja por WhatsApp, video llamadas y un tablero compartido.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Cada proyecto tiene un panel con las métricas que importan: leads, ventas, ROAS, tráfico, conversiones. Lo recibes por email cada lunes y puedes entrar cuando quieras.",
  },
  {
    q: "Ya tengo una página. ¿Pueden mejorarla?",
    a: "Claro. Hacemos una auditoría gratis — velocidad, SEO, conversión — y te enviamos un diagnóstico con lo que se puede ganar y cuánto costaría hacerlo.",
  },
  {
    q: "¿Cuál es el costo?",
    a: "Varía según el proyecto. Lo mejor es hablarlo — en 15 minutos por WhatsApp te damos un rango y te explicamos qué incluye cada opción. Sin compromiso.",
  },
];
