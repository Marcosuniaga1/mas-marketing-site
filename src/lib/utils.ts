import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "584144862906";
export const WHATSAPP_MESSAGE = "Quiero agendar una cita";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const BRAND = {
  name: "Consultorio Popular Odontológico",
  doctor: "Dra. Xiurica Sánchez",
  shortDoctor: "Dra. Xiurica",
} as const;

export const ADDRESS_LINES = [
  "Calle Muñoz entre Calle Plaza y Calle Palo Fuerte",
  "Detrás de la Panadería Zaimar, Plaza Negro Primero",
  "San Fernando de Apure, Venezuela",
] as const;

export const MAPS_QUERY = encodeURIComponent(
  "Calle Muñoz, Plaza Negro Primero, San Fernando de Apure, Venezuela"
);
