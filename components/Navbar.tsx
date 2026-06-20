"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Program", href: "#program" },
    { name: "Metode", href: "#metode" },
    { name: "Biaya", href: "#biaya" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-primary/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            className="relative w-36 h-10 transition-transform duration-300 active:scale-95"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/10">
              <Image
                src="/logo.png"
                alt="TPQ Qoribullah"
                fill
                sizes="40px"
                className="object-cover object-center"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text/80 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#daftar"
              className="text-sm font-semibold text-white bg-primary px-6 py-2.5 transition-all duration-300 hover:bg-primary/95"
            >
              Hubungi Kami
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 group"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-full h-[1.5px] bg-primary transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-primary transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-primary transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-17.5 bg-white z-40 px-8 py-12 flex flex-col gap-6 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#daftar"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center bg-primary text-white py-4 font-medium"
            >
              Daftar Sekarang
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
