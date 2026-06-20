import Link from "next/link";
// ── IMPORT COMPONENT RAINBOW BUTTON ASLI DARI SHADCN ──
import { RainbowButton } from "@/components/ui/rainbow-button";

interface ButtonProps {
  label: string;
  href?: string;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "outlineLight"
    | "white"
    | "rainbow";
  className?: string;
}

export default function Button({
  label,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  // ── STRUKTUR VARIAN TOMBOL STANDAR (UNTUK SEMUA KECUALI RAINBOW) ──
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-500 rounded-none cursor-pointer select-none z-10";

  const variants = {
    primary: "bg-success text-white shadow-sm hover:bg-primary hover:shadow-md",

    secondary:
      "bg-secondary text-white shadow-sm hover:bg-primary hover:shadow-md",

    accent: "bg-accent text-white shadow-sm hover:bg-primary hover:shadow-md",

    // Outline yang diperbaiki: Perbatasan tipis, teks warna Primary, latar transparan
    outline:
      "border border-primary/25 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white hover:shadow-md",

    outlineLight:
      "border border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-primary",

    white:
      "bg-white text-primary shadow-sm hover:bg-accent hover:text-white hover:shadow-md",
  };

  // ── LOGIKA RENDERING ──

  // 1. JIKA VARIANT RAINBOW: Gunakan komponen asli Magic UI
  if (variant === "rainbow") {
    return (
      <RainbowButton asChild className={className}>
        <Link
          href={href}
          className="select-none flex items-center justify-center"
        >
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
            {label}
          </span>
          <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </RainbowButton>
    );
  }

  // 2. JIKA VARIANT STANDAR LAINNYA (Outline, Primary, dll.): Gunakan Link standar Next.js
  return (
    <Link
      href={href}
      className={`${baseStyles} ${
        variants[variant as Exclude<typeof variant, "rainbow">]
      } ${className}`}
    >
      {/* Efek kilatan cahaya menyapu (Shiny Overlay Effect) - Mati jika Outline */}
      {variant !== "outline" && variant !== "outlineLight" && (
        <span className="absolute inset-0 w-full h-full block z-0 overflow-hidden pointer-events-none">
          <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full skew-x-[-25deg] transition-transform duration-1000 ease-out group-hover:translate-x-full" />
        </span>
      )}

      {/* Konten Utama */}
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
        {label}
      </span>

      <span className="relative z-10 ml-3 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
