"use client";
import React, { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    age: "",
    whatsapp: "",
    message: "",
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[a-zA-Z\s]*$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[0-9+]$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bismillah, mendaftar TPQ Qoribullah:\nNama Orang Tua: ${form.parentName}\nNama Anak: ${form.childName}\nUsia: ${form.age}\nPesan: ${form.message}`;
    window.open(
      `https://wa.me/${
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      }?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="daftar" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <SectionLabel number="[10]" text="Pendaftaran Santri" />
          <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight leading-tight mb-6">
            Mulai perjalanan berkah anak bersama Al-Qur&apos;an.
          </h2>
          <p className="text-text/70 leading-relaxed">
            Hubungi kami untuk informasi ketersediaan kuota kelas, skema
            kurikulum lengkap, dan administrasi pendaftaran santri baru TPQ
            Qoribullah.
          </p>
        </div>

        <div className="lg:col-span-7 bg-background p-8 md:p-10 border border-primary/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-text/60">
                  Nama Orang Tua
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-white border border-primary/10 p-3 text-sm focus:outline-none focus:border-primary"
                  value={form.parentName}
                  onKeyDown={handleKeyDown}
                  placeholder="Nama Wali Mudrid"
                  onChange={(e) =>
                    setForm({ ...form, parentName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-text/60">
                  Nama Anak
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-white border border-primary/10 p-3 text-sm focus:outline-none focus:border-primary"
                  value={form.childName}
                  onKeyDown={handleKeyDown}
                  placeholder="Nama Calon Santri"
                  onChange={(e) =>
                    setForm({ ...form, childName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-text/60">
                  Usia Anak (Tahun)
                </label>
                <input
                  required
                  type="number"
                  className="w-full bg-white border border-primary/10 p-3 text-sm focus:outline-none focus:border-primary"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-text/60">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  required
                  type="tel"
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="0812..."
                  className="w-full bg-white border border-primary/10 p-3 text-sm focus:outline-none focus:border-primary"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-text/60">
                Catatan Khusus / Pesan Tambahan
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-primary/10 p-3 text-sm focus:outline-none focus:border-primary resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-success text-white py-4 font-medium transition-all duration-300 hover:bg-primary text-sm tracking-wide shadow-sm hover:shadow-md cursor-pointer"
            >
              Kirim Data Pendaftaran via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
