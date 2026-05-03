import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "584129991787";
export const WHATSAPP_MESSAGE =
  "Quiero más información sobre creación de páginas web";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_HANDLE = "mas.marketingagency";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export const BRAND = {
  name: "MAS Marketing Agency",
  short: "MAS.",
  tagline: "Marketing que convierte. Webs que venden.",
  claim:
    "Agencia creativa que convierte visitas en clientes y marcas en referentes.",
  phoneDisplay: "+58 412 999 1787",
  email: "hola@masmarketingagency.com",
  location: "Venezuela · LATAM",
} as const;

export function whatsappLinkWith(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
