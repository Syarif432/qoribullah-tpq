"use client";
import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  text: string;
}

export default function SectionLabel({ number, text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent mb-6"
    >
      <span className="font-semibold text-primary">{number}</span>
      <span className="w-8 h-px bg-accent/40"></span>
      <span>{text}</span>
    </motion.div>
  );
}
