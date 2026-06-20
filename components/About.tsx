"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function About() {
  // Menargetkan container utama sebagai acuan scroll
  const sectionRef = useRef<HTMLElement>(null);

  // Inisialisasi useScroll yang bersih dan standar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Rentang nilai diperbesar agar pergerakan asimetris terlihat sangat jelas
  const headingY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const values = [
    {
      num: "01",
      title: "Adab Sebelum Ilmu",
      desc: "Menanamkan karakter, rasa hormat, dan kesantunan dalam berinteraksi dengan Al-Qur'an dan sesama.",
    },
    {
      num: "02",
      title: "Membaca dengan Tartil",
      desc: "Bukan sekadar cepat khatam, melainkan fokus pada ketepatan makhraj, tajwid, dan panjang pendek harakat.",
    },
    {
      num: "03",
      title: "Belajar dengan Gembira",
      desc: "Pendekatan berbasis kesabaran guru untuk menciptakan memori indah belajar agama bagi masa kecil mereka.",
    },
  ];

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white border-b border-primary/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionLabel number="[02]" text="Tentang Qoribullah" />

        {/* ── BAGIAN HEADLINE & DESKRIPSI (DENGAN KONTRAST PARALLAX) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start relative z-10">
          {/* Sisi Kiri: Judul Utama (Bergerak turun lambat) */}
          <motion.div
            style={{ y: headingY }}
            className="lg:col-span-7 will-change-transform"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight leading-tight">
              Tempat terbaik bagi buah hati tumbuh bersama tuntunan suci
              Al-Qur&apos;an.
            </h2>
          </motion.div>

          {/* Sisi Kanan: Teks Deskripsi (Bergerak naik cepat menembus judul) */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-5 pt-4 lg:pt-12 will-change-transform"
          >
            <p className="text-text/70 text-base md:text-lg leading-relaxed">
              TPQ Qoribullah hadir sebagai ruang belajar yang menyeimbangkan
              antara kecakapan literasi Al-Qur&apos;an dan pembentukan akhlakul
              karimah. Kami percaya setiap anak memiliki ritme belajar yang
              unik, dikawal dengan penuh kesabaran, struktur modular, metode
              repetisi yang kokoh, dan lingkungan yang menenangkan.
            </p>
          </motion.div>
        </div>

        {/* ── BAGIAN KARTU NILAI UTAMA (PARALLAX RITME KETIGA) ── */}
        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-primary/10 bg-white relative z-20 will-change-transform"
        >
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }} // Triger ulang animasi setiap kali masuk layar lagi
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.1,
              }}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-primary/10 hover:bg-background/50 transition-colors group"
            >
              <span className="block font-mono text-xs text-accent mb-8 group-hover:translate-x-1 transition-transform">
                [{val.num}]
              </span>
              <h3 className="text-xl font-serif text-primary mb-4">
                {val.title}
              </h3>
              <p className="text-sm text-text/60 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── GARIS LINER DEKORATIF LATAR BELAKANG ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-between px-12 z-0">
        <div className="w-px h-full bg-primary" />
        <div className="w-px h-full bg-primary hidden md:block" />
        <div className="w-px h-full bg-primary hidden lg:block" />
        <div className="w-px h-full bg-primary" />
      </div>
    </section>
  );
}
