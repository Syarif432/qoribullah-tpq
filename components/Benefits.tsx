"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);

  // once: false memastikan animasi di-reset dan dimainkan kembali setiap kali masuk viewport
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  const benefits = [
    "Pengajar sabar dan membimbing penuh kasih",
    "Kelas rapi, teratur, dan kondusif",
    "Anak belajar sesuai ritme kemampuan personal",
    "Evaluasi perkembangan raport berkala",
    "Lingkungan islami, bersih, dan aman nyaman",
    "Komunikasi aktif & transparan dengan wali santri",
  ];

  // Varian animasi untuk wadah grid (Parent)
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12 as const,
      },
    },
  };

  // Varian animasi untuk masing-masing kartu keuntungan (Child)
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="keunggulan"
      ref={containerRef}
      className="py-24 md:py-36 bg-white border-b border-primary/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* SISI KIRI: STICKY BRANDING HEADLINE */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <SectionLabel number="[05]" text="Keunggulan Utama" />
            <motion.h2
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-serif text-primary tracking-tight leading-tight"
            >
              Komitmen Penuh Mengawal{" "}
              <span className="italic font-normal text-secondary">
                Fitrah Pembelajaran
              </span>{" "}
              Anak.
            </motion.h2>
            <p className="text-sm text-text/60 font-mono leading-relaxed hidden lg:block pt-4 border-t border-primary/10">
              [ Standardisasi Mutu Pengajaran TPQ Qoribullah 2026 ]
            </p>
          </div>

          {/* SISI KANAN: PARALLAX INTERACTIVE GRID */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: "#36669C",
                  boxShadow: "0 20px 40px -15px rgba(54, 102, 156, 0.08)",
                }}
                className="bg-background/40 p-8 border border-primary/5 flex flex-col justify-between min-h-47.5 transition-all duration-500 ease-out group cursor-pointer relative overflow-hidden hover:bg-white"
              >
                {/* Micro-decorations penunjuk indeks pojok kanan atas */}
                <div className="flex justify-between items-start w-full mb-6">
                  {/* Dot indicator yang membesar & berubah warna saat di-hover */}
                  <span className="w-2 h-2 bg-accent/30 group-hover:bg-accent group-hover:scale-150 transition-all duration-300 rounded-none" />
                  <span className="font-mono text-[10px] text-text/30 group-hover:text-primary transition-colors">
                    0{idx + 1} //
                  </span>
                </div>

                {/* Deskripsi Manfaat */}
                <p className="text-base font-serif font-medium text-primary leading-relaxed group-hover:text-text transition-colors duration-300 relative z-10">
                  {benefit}
                </p>

                {/* Dekorasi Garis Efek Slide-Up Tipis di bawah kartu saat hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* AKSEN BULATAN BACKGROUND HALUS */}
      <div className="absolute left-[-5%] top-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
}
