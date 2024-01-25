import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function formatUnit(
//     measure: number | string,
//     options: {
//       unit: "L"
//     }
// );
