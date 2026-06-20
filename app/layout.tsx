import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TPQ Qoribullah | Kursus Mengaji Privat Anak Kedaton Bandar Lampung",
  description:
    "TPQ Qoribullah menyediakan kursus mengaji privat untuk anak di Sidodadi, Kedaton, Bandar Lampung. Membimbing anak mengenal huruf hijaiyah, tahsin Al-Qur'an, dan adab sejak dini.",
  keywords: [
    "TPQ Lampung",
    "TPQ Bandar Lampung",
    "TPQ Kedaton",
    "TPQ Sidodadi Bandar Lampung",
    "Kursus Mengaji Lampung",
    "Belajar Quran Anak Bandar Lampung",
    "Ngaji Privat Anak Lampung",
    "Guru Ngaji Panggilan Kedaton",
    "Kursus Mengaji Terdekat Lampung",
  ],

  other: {
    "geo.region": "ID-LA",
    "geo.placename": "Bandar Lampung",
    "geo.position": "-5.3831;105.2754",
    ICBM: "-5.3831, 105.2754",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={cn(
        "scroll-smooth",
        geist.variable,
        plusJakarta.variable,
        playfair.variable,
        "font-sans"
      )}
    >
      <body className="bg-brand-bg text-brand-text antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
