"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type ClientsCopy = {
  eyebrow: string;
  clients: string[];
};

const COPY: { es: ClientsCopy; en: ClientsCopy } = {
  es: {
    eyebrow: "Organizaciones que confían en nosotros",
    clients: [
      "Ministerio de Justicia",
      "Cámara de Comercio",
      "Superintendencia de Sociedades",
      "Corte de Arbitraje",
      "Banco de Desarrollo",
      "Fiscalía General",
      "Defensoría del Pueblo",
      "Procuraduría Nacional",
    ],
  },
  en: {
    eyebrow: "Organizations that trust us",
    clients: [
      "Ministry of Justice",
      "Chamber of Commerce",
      "Superintendency of Companies",
      "Court of Arbitration",
      "Development Bank",
      "Attorney General's Office",
      "Office of the Public Defender",
      "National Inspector General",
    ],
  },
};

export default function Clients() {
  const t = useCopy(COPY);
  const clients = t.clients;

  return (
    <section id="confianza" className="divide-section py-16 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow text-center mb-12"
        >
          {t.eyebrow}
        </motion.p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex-shrink-0 px-10 flex items-center"
            >
              <span className="font-display text-lg font-semibold tracking-tight text-muted/45 whitespace-nowrap select-none transition-colors duration-300 hover:text-brand">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
