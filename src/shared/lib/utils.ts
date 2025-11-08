import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// export const BACKEND_URL = "http://localhost:3000";
export const BACKEND_URL = "https://entertaiment-web-backend.vercel.app";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twofl = (text: string) => {
  const words = text.split(" ");
  const first = words[0].charAt(0) ?? "";
  const second = words[1].charAt(0) ?? "";
  return `${first}${second}`.toUpperCase();
};
