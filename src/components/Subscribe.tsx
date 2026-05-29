"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const es = {
  titlePre: "Mantente al día con",
  titleBrand: "REDEK",
  subtitle:
    "Novedades sobre LegalTech, ODR y resolución de disputas. Sin spam.",
  emailLabel: "Correo electrónico",
  emailPlaceholder: "tu@empresa.com",
  submit: "Suscribirme",
};

const COPY = {
  es,
  en: {
    titlePre: "Stay up to date with",
    titleBrand: "REDEK",
    subtitle: "Updates on LegalTech, ODR and dispute resolution. No spam.",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    submit: "Subscribe",
  } satisfies typeof es,
} as const;

export default function Subscribe() {
  const t = useCopy(COPY);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="divide-section bg-bg-soft py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12"
        >
          <div>
            <motion.h2 variants={fadeUp} className="display-3 max-w-md">
              {t.titlePre} <span className="text-brand">{t.titleBrand}</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-base text-muted"
            >
              {t.subtitle}
            </motion.p>
          </div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row md:justify-end"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              {t.emailLabel}
            </label>
            <input
              id="subscribe-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t.emailPlaceholder}
              className="w-full rounded-full border border-line bg-bg px-5 py-[0.85rem] text-base text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none sm:max-w-xs"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              transition={{ ease: EASE_OUT_EXPO }}
              className="btn-primary justify-center"
            >
              {t.submit}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
