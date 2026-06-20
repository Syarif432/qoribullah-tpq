"use client";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function Gallery() {
  const items = [
    { title: "Membaca Bersama", cat: "Membaca Kisah Para Nabi & Rasul" },
    { title: "Foto Bersama", cat: "Foto Bersama Ketua Yayasan" },
    { title: "Setoran Hafalan Pendek", cat: "Disimak Oleh Guru" },
    { title: "Kegiatan Spesial Ramadhan", cat: "Gema Karakter" },
    { title: "Apresiasi Capaian", cat: "Guru Mengapresiasi Capaian" },
  ];

  return (
    <section
      id="galeri"
      className="py-24 md:py-32 bg-white border-b border-primary/5 relative overflow-hidden"
    >
      {/* HEADER GALERI */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex justify-between items-end">
          <div>
            <SectionLabel number="[08]" text="Galeri Kegiatan" />
            <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight">
              Dokumentasi Ruang Tumbuh Santri
            </h2>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE VELOCITY SCROLL FOR GALLERY CARDS ── */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 select-none">
        <ScrollVelocityContainer className="w-full">
          {/* baseVelocity mengatur kecepatan awal, direction={1} mengalir ke kanan */}
          <ScrollVelocityRow
            baseVelocity={3}
            direction={1}
            className="py-4 flex gap-6"
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="inline-block w-65 sm:w-75 space-y-3 cursor-pointer group mx-4 whitespace-normal shrink-0"
              >
                {/* CONTAINER FOTO DENGAN HOVER EFFECT */}
                <div className="aspect-4/5 bg-background border border-primary/10 flex items-center justify-center p-4 relative overflow-hidden transition-all duration-500 hover:border-primary/40 shadow-xs">
                  {/* Overlay transparan */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors duration-500 z-10" />

                  <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={`/images/${idx + 1}.jpeg`}
                      alt={item.title}
                      fill
                      sizes="(max-w-sm) 260px, 300px"
                      className="object-cover"
                    />
                  </div>
                  {/* Dekorasi garis tipis sudut bawah */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full z-20" />
                </div>

                {/* METADATA FOTO */}
                <div className="pt-1 text-left">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.cat}
                  </p>
                  <h3 className="text-sm font-semibold text-primary mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Gradasi fading transparan opsional di sisi kiri dan kanan agar terlihat mahal khas studio desain */}
        <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-linear-to-r z-20"></div>
        <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-linear-to-l z-20"></div>
      </div>
    </section>
  );
}
