"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { HyperText } from "@/components/ui/hyper-text";

export default function Programs() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]);

  const items = [
    {
      id: "01",
      title: "Pra-Iqra / Hijaiyah",
      desc: "Pengenalan bentuk huruf tunggal melalui asosiasi visual yang menyenangkan untuk kesiapan artikulasi dasar tanpa beban ingatan berat.",
      output:
        "Anak hafal 28 huruf hijaiyah mandiri secara acak lengkap dengan harakat fathan.",
      duration: "1 - 2 Bulan",
      focus: "Asosiasi Gambar & Bentuk",
    },
    {
      id: "02",
      title: "Iqra Bertahap",
      desc: "Pendalaman mengeja kata bersambung, pengenalan mad (tanda baca pendek-panjang), berfokus penuh pada ketepatan ketukan ketukan.",
      output:
        "Kelancaran membaca rangkaian kata kompleks dan konsisten pada panjang pendek harakat.",
      duration: "3 - 5 Bulan",
      focus: "Ketukan Ritme & Sambung Huruf",
    },
    {
      id: "03",
      title: "Tahsin Dasar",
      desc: "Memperbaiki kualitas bacaan langsung pada mushaf Al-Qur'an besar, mengurai dan memperhalus hukum tajwid dasar secara aplikatif.",
      output:
        "Mampu membaca Mushaf standar Madinah dengan menerapkan kaidah hukum Nun/Mim mati.",
      duration: "Kontinu",
      focus: "Makharijul Huruf & Sifat",
    },
    {
      id: "04",
      title: "Hafalan Surat Pendek",
      desc: "Penyandaran ingatan Juz 30 melalui skema talaqqi intensif dari lisan guru ke telinga anak secara berkala, mengunci hafalan dengan mutqin.",
      output:
        "Hafal minimal 15 Surat pendek di akhir Juz 30 dengan kualitas irama tartil yang rapi.",
      duration: "Sesuai Ritme Anak",
      focus: "Kekuatan Memori (Mutqin)",
    },
    {
      id: "05",
      title: "Doa Harian",
      desc: "Pembiasaan doa-doa aplikatif praktis untuk diamalkan langsung dalam rutinitas keseharian anak dari bangun tidur hingga kembali terlelap.",
      output:
        "Anak mandiri merapal doa aktivitas harian tanpa perlu instruksi konstan orang tua.",
      duration: "Pendampingan",
      focus: "Habit Building & Refleks",
    },
    {
      id: "06",
      title: "Adab & Akhlak Islami",
      desc: "Internalisasi nilai-nilai keteladanan Rasulullah SAW demi membentuk kepribadian yang santun, hormat orang tua, dan disiplin sejak dini.",
      output:
        "Refleksi karakter santun, peningkatan kepatuhan, dan pembentukan moralitas terpuji.",
      duration: "Sepanjang Program",
      focus: "Karakter & Etika Praktis",
    },
  ];

  return (
    <section
      id="program"
      ref={containerRef}
      className="py-20 md:py-36 bg-background border-b border-primary/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 md:mb-20 gap-6">
          <div>
            <SectionLabel number="[03]" text="Program Belajar" />
            <h2 className="text-3xl sm:text-5xl font-serif text-primary tracking-tight leading-tight max-w-2xl">
              Kurikulum Kedisiplinan Berbasis{" "}
              <span className="italic font-normal text-secondary">
                Karakter
              </span>{" "}
              & Kemampuan Riil.
            </h2>
          </div>

          <div className="font-mono text-xs text-text/40 border-l border-primary/20 pl-4 py-1 space-y-1 shrink-0">
            <HyperText
              key={`meta-ht-${animationKey}`}
              className="text-xs font-mono font-bold text-primary uppercase tracking-wider"
              duration={2000}
              animateOnHover={true}
            >
              Arsitektur Pembelajaran
            </HyperText>
            <div>6 TINGKATAN MODULAR</div>
          </div>
        </div>

        {/* INTERACTIVE ADAPTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 space-y-8 bg-white p-10 border border-primary/10 shadow-xs">
            <div className="flex justify-between items-center border-b border-primary/5 pb-4">
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
                [ Output Cetak Biru ]
              </span>
              <span className="font-mono text-xs text-primary/40">
                LEVEL — {items[activeIdx].id}
              </span>
            </div>

            <div className="min-h-60 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-text/40 uppercase tracking-wider">
                      Target Utama Kelulusan:
                    </p>
                    <p className="font-serif text-xl text-primary leading-relaxed">
                      &ldquo;{items[activeIdx].output}&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/5">
                    <div>
                      <p className="text-[10px] font-mono text-text/40 uppercase">
                        Estimasi Waktu:
                      </p>
                      <p className="text-sm font-semibold text-secondary mt-1">
                        {items[activeIdx].duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-text/40 uppercase">
                        Metodologi Fokus:
                      </p>
                      <p className="text-sm font-semibold text-accent mt-1">
                        {items[activeIdx].focus}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="bg-background/80 p-4 border-l-2 border-primary text-xs text-text/60 leading-relaxed font-mono">
                Sistem rekam pencapaian diverifikasi harian pada Buku Prestasi
                Santri TPQ Qoribullah.
              </div>
            </div>
          </div>

          {/* ── LIST INTERAKTIF (Adaptif Mobile Accordion) ── */}
          <div className="col-span-1 lg:col-span-7 space-y-4">
            {items.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() =>
                    window.innerWidth >= 1024 && setActiveIdx(idx)
                  }
                  onClick={() => setActiveIdx(idx)}
                  className={`relative p-5 sm:p-8 border transition-all duration-500 cursor-pointer group rounded-none ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-md lg:shadow-lg"
                      : "bg-white border-primary/10 text-text hover:border-primary/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                    />
                  )}

                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-3 grow">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${
                            isActive ? "text-accent" : "text-primary/40"
                          }`}
                        >
                          [{item.id}]
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-serif tracking-wide ${
                            isActive ? "text-white" : "text-primary"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className={`text-sm leading-relaxed max-w-2xl ${
                          isActive ? "text-white/90" : "text-text/60"
                        }`}
                      >
                        {item.desc}
                      </p>

                      {/* ── INLINE METADATA ACCORDION FOR MOBILE ── */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden lg:hidden pt-4 border-t border-white/10 mt-4 space-y-4 text-left"
                          >
                            <div className="space-y-1">
                              <span className="text-[9px] font-mono uppercase tracking-wider text-accent font-bold">
                                Target Kelulusan:
                              </span>
                              <p className="font-serif text-base text-white">
                                &ldquo;{item.output}&rdquo;
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] bg-white/5 p-3">
                              <div>
                                <span className="text-white/40 block">
                                  WAKTU:
                                </span>
                                <span className="text-accent font-bold">
                                  {item.duration}
                                </span>
                              </div>
                              <div>
                                <span className="text-white/40 block">
                                  FOKUS:
                                </span>
                                <span className="text-white font-bold">
                                  {item.focus}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* PANAH INDIKATOR ROTASI */}
                    <div className="pt-0.5 shrink-0">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border text-xs font-mono transition-all duration-300 ${
                          isActive
                            ? "border-accent text-accent bg-white/10 rotate-90"
                            : "border-primary/10 text-primary/40 group-hover:border-primary/30 group-hover:text-primary"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BACKGROUND GRAPHIC ACCENT */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
}
