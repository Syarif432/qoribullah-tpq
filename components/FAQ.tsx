"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Mulai usia berapa anak bisa belajar di TPQ Qoribullah?",
      a: "Kami menerima santri mulai dari usia minimal 4 tahun (untuk kelas Pra-Iqra) hingga maksimal usia 12 tahun.",
    },
    {
      q: "Apakah anak harus sudah bisa membaca huruf hijaiyah?",
      a: "Tidak perlu khawatir. Program kami disusun bertahap, terbuka bagi anak yang benar-benar memulai dari nol.",
    },
    {
      q: "Bagaimana metode belajarnya?",
      a: "Menggunakan pendekatan privat-klasikal. Setiap anak disimak secara individu sesuai tingkat kemajuannya agar akurasi makhraj terjaga.",
    },
    {
      q: "Apakah ada evaluasi perkembangan?",
      a: "Ya, ada pencatatan harian di buku prestasi santri, serta pelaporan raport perkembangan resmi setiap semester.",
    },
    {
      q: "Bagaimana cara pendaftarannya?",
      a: "Ayah/Bunda dapat mengisi formulir pendaftaran di bagian bawah halaman ini atau langsung menghubungi kontak WhatsApp operasional kami.",
    },
    {
      q: "Apakah bisa konsultasi dulu sebelum mendaftar?",
      a: "Sangat bisa. Hubungi tim administrasi kami untuk menjadwalkan kunjungan singkat/trial terbatas melihat suasana kelas.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-background border-b border-primary/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel number="[09]" text="Pertanyaan Umum" />
          <h2 className="text-3xl font-serif text-primary tracking-tight">
            Menjawab Keraguan Ayah & Bunda
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-primary/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center text-primary font-medium text-base transition-colors hover:bg-background/30"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm text-text/70 leading-relaxed border-t border-primary/5 bg-background/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
