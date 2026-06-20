"use client";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

export default function SchedulePricing() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="biaya"
      className="py-24 md:py-36 bg-background border-b border-primary/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-20 gap-6">
          <div>
            <SectionLabel number="[07]" text="Jadwal & Investasi" />
            <h2 className="text-4xl sm:text-5xl font-serif text-primary tracking-tight leading-tight">
              Transparansi Informasi Belajar &{" "}
              <span className="italic font-normal text-secondary">
                Kontribusi
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-text/40 border-l border-primary/20 pl-4 py-1">
            SISTEM ALOKASI & <br />
            INFAQ TERINTEGRASI
          </div>
        </div>

        {/* METRIC & CARDS CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* SISI KIRI: ALOKASI WAKTU KELAS */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-white p-6 sm:p-8 lg:p-10 border border-primary/10 flex flex-col justify-between shadow-xs relative group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-primary/5 pb-4">
                <h3 className="text-xs font-mono tracking-widest uppercase text-accent font-bold">
                  [ Alokasi Waktu ]
                </h3>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              <div className="space-y-2">
                {[
                  { label: "Hari Belajar", val: "Senin s/d Jumat" },
                  {
                    label: "Jam Belajar",
                    val: "16:00 - 17:15 / 18:15 - 19:45 wib",
                  },
                  { label: "Kelompok Usia", val: "4 - 12 Tahun" },
                  { label: "Metode Kelas", val: "Talaqqi Privat Kontinu" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3.5 border-b border-primary/5 last:border-b-0 group/row px-1 transition-colors hover:bg-background/40"
                  >
                    <span className="text-sm text-text/60 font-medium">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-primary font-serif tracking-wide">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-primary/5 mt-8 lg:mt-0">
              <p className="text-xs text-text/50 font-mono leading-relaxed">
                * Keseimbangan kuota rasio santri per pengajar diawasi ketat
                demi efektivitas penyerapan makhraj huruf anak.
              </p>
            </div>
          </motion.div>

          {/* SISI KANAN: INVESTASI PENDIDIKAN */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white p-6 sm:p-10 lg:p-12 border border-primary/10 flex flex-col justify-between shadow-xs relative hover:border-primary/30 transition-colors duration-500"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 mb-10">
              {/* SKEMA 1: INFAQ PENDAFTARAN */}
              <div className="space-y-3 relative">
                <span className="inline-block text-[10px] font-mono text-accent font-bold uppercase tracking-widest bg-accent/5 px-2.5 py-1">
                  Infaq Pendaftaran
                </span>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-lg font-serif text-primary/60 mr-1">
                    Rp
                  </span>
                  <span className="text-4xl sm:text-5xl font-serif text-primary tracking-tight font-medium">
                    50.000
                  </span>
                </div>
                <div className="space-y-2 pt-1">
                  <p className="text-xs text-text/60 leading-relaxed">
                    Dana kontribusi operasional awal santri baru di awal
                    program.
                  </p>
                  <div className="inline-flex flex-wrap gap-1.5 pt-1">
                    {["Buku Prestasi", "Modul Iqra", "Atribut"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-primary/60 bg-background border border-primary/5 px-2 py-0.5"
                        >
                          ✓ {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* SKEMA 2: SPP BULANAN */}
              <div className="space-y-3 relative sm:border-l sm:border-primary/10 sm:pl-8 lg:pl-10">
                <span className="inline-block text-[10px] font-mono text-secondary font-bold uppercase tracking-widest bg-secondary/5 px-2.5 py-1">
                  Syahriah / SPP
                </span>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-lg font-serif text-primary/60 mr-1">
                    Rp
                  </span>
                  <span className="text-4xl sm:text-5xl font-serif text-primary tracking-tight font-medium">
                    100.000
                  </span>
                  <span className="text-xs font-mono text-text/40 ml-1">
                    /bln
                  </span>
                </div>
                <div className="space-y-2 pt-1">
                  <p className="text-xs text-text/60 leading-relaxed">
                    Infaq bulanan berkelanjutan demi menunjang fasilitas belajar
                    mengajar di TPQ.
                  </p>
                  <p className="text-[10px] font-mono text-accent/80 font-semibold bg-background border border-accent/10 px-2.5 py-1 inline-block">
                    ⏱ Kontribusi sebelum tanggal 10
                  </p>
                </div>
              </div>
            </div>

            {/* LOWER INTERACTIVE CALLOUT BAR */}
            <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-background/-40 -mx-6 -mb-6 p-6 sm:-mx-10 sm:-mb-10 sm:p-8 lg:-mx-12 lg:-mb-12 lg:p-10 bg-linear-to-r from-background to-white">
              <div className="space-y-1 max-w-md">
                <p className="text-sm font-serif font-semibold text-primary">
                  Ingin Memastikan Ketersediaan Sisa Kursi?
                </p>
                <p className="text-xs text-text/60 leading-relaxed">
                  Hubungi tim administrasi kami untuk koordinasi penyesuaian
                  kelas khusus anak atau konfirmasi kuota angkatan baru.
                </p>
              </div>
              <div className="w-full sm:w-auto shrink-0">
                <Button
                  label="Konsultasi via WhatsApp"
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  variant="rainbow"
                  className="w-full sm:w-auto text-center"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* LIGHT DECORATIVE GRAPHIC BACKGROUND */}
      <div className="absolute left-[-10%] bottom-0 w-125 h-125 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
}
