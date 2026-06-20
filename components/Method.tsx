"use client";
import SectionLabel from "./SectionLabel";

export default function Method() {
  const steps = [
    {
      num: "01",
      title: "Kenal Huruf",
      desc: "Visualisasi & pemetaan letak bunyi.",
    },
    {
      num: "02",
      title: "Latihan Bunyi",
      desc: "Akurasi ketukan vokal harakat mendasar.",
    },
    {
      num: "03",
      title: "Baca Bertahap",
      desc: "Menyambung konsonan tanpa tergesa-gesa.",
    },
    {
      num: "04",
      title: "Koreksi Tajwid",
      desc: "Penyempurnaan dengung & sifat huruf.",
    },
    {
      num: "05",
      title: "Murojaah",
      desc: "Pengulangan materi berkala berkunci kuat.",
    },
    {
      num: "06",
      title: "Evaluasi",
      desc: "Laporan perkembangan capaian santri.",
    },
  ];

  return (
    <section
      id="metode"
      className="py-24 md:py-32 bg-white border-b border-primary/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel number="[04]" text="Metode Belajar" />
        <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight mb-20 max-w-xl">
          Dari mengenal huruf hingga membaca dengan percaya diri.
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-4">
              <div className="text-xs font-mono text-accent flex items-center gap-2">
                <span>{step.num}</span>
                <span className="h-px bg-accent/20 grow" />
              </div>
              <h3 className="text-base font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-xs text-text/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
