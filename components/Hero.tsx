"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { WordRotate } from "@/components/ui/word-rotate";
import { RainbowButton } from "./ui/rainbow-button";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden border-b border-primary/5">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-tpq.jpg"
          alt="Suasana Belajar TPQ Qoribullah"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-background/80 lg:to-background/40" />
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 border border-primary/5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Pendaftaran Angkatan Baru Opened
            </span>
          </motion.div>

          {/* ── SEKSI HEADLINE DENGAN WORD ROTATE ── */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-primary leading-[1.2] flex flex-wrap items-center gap-x-3"
          >
            <span>Belajar Al-Qur &apos;an dengan</span>
            <WordRotate
              className="font-normal text-secondary inline-block"
              words={["Tenang", "Terarah", "Nyaman", "Bahagia"]}
              duration={2500}
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text/70 leading-relaxed max-w-xl"
          >
            TPQ Qoribullah membantu anak-anak mengenal huruf hijaiyah, membaca
            Al-Qur&apos;an, memperbaiki tajwid, menghafal surat pendek, dan
            membangun adab islami sejak dini.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto"
          >
            <Button
              label="Daftar Sekarang"
              href="#daftar"
              variant="primary"
              className="w-full sm:w-auto text-center"
            />
            <Button
              label="Lihat Program"
              href="#program"
              variant="outline"
              className="w-full sm:w-auto text-center"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10"
          >
            {[
              { label: "Metode Bertahap", desc: "Sesuai Ritme Anak" },
              { label: "Ramah Anak", desc: "Lingkungan Nyaman" },
              { label: "Fokus Adab & Tajwid", desc: "Karakter Al-Qur'an" },
            ].map((badge, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
                  {badge.label}
                </p>
                <p className="text-xs text-text/60">{badge.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT EDITORIAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative hidden lg:block h-145 w-full"
        >
          <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm rounded-none border border-primary/10 transform translate-x-4 translate-y-4" />
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-12 flex flex-col justify-between border border-primary/10 shadow-lg">
            <Image src={"/logo.png"} alt="logo" width={500} height={200} />
            <p className="text-xs text-text/40 leading-relaxed font-mono">
              TPQ Qoribullah © 2026 — Rencana Desain Ruang Lingkup Kurikulum
              Teoretis & Praktis Anak Tingkat Dasar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
