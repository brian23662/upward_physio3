import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn merges Tailwind classes intelligently — later classes win conflicts.
 * Example: cn("p-4", condition && "p-6") → "p-6" when condition is true.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
