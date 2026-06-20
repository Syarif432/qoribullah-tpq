"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const data = [
    {
      value: 6,
      isNumeric: true,
      suffix: "",
      label: "Program Utama",
      desc: "Terbuka dari nol hingga tahsin lancar",
    },
    {
      value: 3,
      isNumeric: true,
      suffix: "",
      label: "Fokus Integral",
      desc: "Bacaan fasih, Tajwid, & fondasi Adab",
    },
    {
      value: 100,
      isNumeric: true,
      suffix: "%",
      label: "Ramah Anak",
      desc: "Metode tanpa paksaan, penuh kesabaran",
    },
    {
      value: "Berkala",
      isNumeric: false,
      suffix: "",
      label: "Evaluasi Riil",
      desc: "Laporan bulanan perkembangan santri",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-primary text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="[06]" text="Metrik Keberhasilan" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="space-y-2 border-l border-white/10 pl-6 group"
              >
                {/* CONTAINER ANIMASI ANGKA */}
                <div className="text-4xl sm:text-5xl font-serif font-light text-accent flex items-baseline">
                  {item.isNumeric ? (
                    // Trik key={`ticker-${isInView}`} memaksa NumberTicker me-reload animasi
                    // berhitungnya dari nol setiap kali section terdeteksi masuk ke layar kembali.
                    <div className="inline-flex items-baseline">
                      <NumberTicker
                        key={`ticker-${idx}-${isInView}`}
                        value={item.value as number}
                        className="text-accent font-serif font-light tracking-tight"
                      />
                      {item.suffix && (
                        <span className="text-2xl sm:text-3xl ml-0.5">
                          {item.suffix}
                        </span>
                      )}
                    </div>
                  ) : (
                    // Jika data berupa teks biasa ("Berkala"), tampilkan statis tanpa memicu error parsing
                    <span className="tracking-tight">{item.value}</span>
                  )}
                </div>

                <p className="text-sm font-semibold tracking-wide text-white/90 transition-colors group-hover:text-accent duration-300">
                  {item.label}
                </p>

                <p className="text-xs text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND ACCENT */}
      <div className="absolute left-[-10%] top-0 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
}
