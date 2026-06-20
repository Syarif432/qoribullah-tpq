"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const mapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.0603948934056!2d105.25932856979078!3d-5.398561692230849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db0048d6af33%3A0xdf5eaa0e65158e8!2sTPQ%20Qoribulloh!5e0!3m2!1sid!2sid!4v1781802329172!5m2!1sid!2sid";

  return (
    <footer className="bg-primary text-white/90 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        {/* KOLOM 1: BRANDING & DESKRIPSI */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative w-40 h-10 ">
            <Image
              src="/logo.png"
              alt="TPQ Qoribullah"
              height={50}
              width={50}
              className="object-contain object-left rounded-full"
            />
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Membimbing anak mengenal, membaca, dan mencintai Al-Qur&apos;an
            dengan adab, kesabaran, dan metode yang terarah.
          </p>
        </div>

        {/* KOLOM 2: LOKASI FISIK & EMBED GOOGLE MAPS INTERAKTIF */}
        <div className="lg:col-span-5 space-y-4 text-sm">
          <h4 className="text-xs font-mono tracking-wider uppercase text-accent font-bold">
            [ Kantor & Lokasi ]
          </h4>
          <p className="text-white/60 leading-relaxed max-w-md">
            Jl. Onta No.2, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung
            35126
          </p>

          {/* EMBED IFRAME GOOGLE MAPS DENGAN DEKORASI PREMIUM */}
          <div className="w-full h-40 bg-white/5 border border-white/10 relative overflow-hidden group transition-all duration-500 hover:border-accent/40 shadow-xs">
            <iframe
              src={mapsUrl}
              className="w-full h-full border-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi TPQ Qoribullah"
            />
          </div>

          <div className="flex gap-4 pt-1 text-xs font-mono text-accent">
            <Link href={mapsUrl} target="_blank" className="hover:underline">
              Buka di Google Maps →
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:underline"
            >
              Instagram →
            </Link>
          </div>
        </div>

        {/* KOLOM 3: NAVIGASI CEPAT */}
        <div className="lg:col-span-3 space-y-4 text-sm lg:pl-12">
          <h4 className="text-xs font-mono tracking-wider uppercase text-accent font-bold">
            [ Navigasi Cepat ]
          </h4>
          <ul className="space-y-2.5 text-white/60">
            {[
              { id: "#tentang", label: "Tentang Kami" },
              { id: "#program", label: "Program Utama" },
              { id: "#biaya", label: "Informasi Infaq" },
              { id: "#galeri", label: "Galeri Kegiatan" },
            ].map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.id}
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/40 gap-4">
        <p>© 2026 TPQ Qoribullah. All Rights Reserved.</p>
        <p>Premium Learning Space Studio Composition.</p>
      </div>
    </footer>
  );
}
