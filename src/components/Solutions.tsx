"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type Service = {
  number: string;
  title: string;
  description: string;
  result: string;
  features: string[];
};

type SolutionsCopy = {
  eyebrow: string;
  titlePre: string;
  titleAccent: string;
  intro: string;
  services: Service[];
  capabilities: string[];
  platformEyebrow: string;
  platformTitlePre: string;
  platformTitleAccent: string;
  platformBody: string;
  platformCta: string;
};

const COPY: { es: SolutionsCopy; en: SolutionsCopy } = {
  es: {
    eyebrow: "Soluciones",
    titlePre: "Cuatro modelos. Una misión:",
    titleAccent: "resolver",
    intro:
      "Adaptamos nuestra tecnología a la forma en que tu organización necesita operar. Sin rigidez, sin sobre-ingeniería.",
    services: [
      {
        number: "01",
        title: "Desarrollo a la Medida",
        description:
          "Co-diseñamos, desarrollamos e implementamos plataformas ODR personalizadas que se integran con tu ecosistema tecnológico existente.",
        result: "Control total sobre la experiencia y los datos",
        features: ["Co-diseño", "Desarrollo", "Implementación"],
      },
      {
        number: "02",
        title: "Soluciones Manejadas",
        description:
          "Accede a nuestra plataforma mediante suscripción o bajo demanda. Nosotros gestionamos la infraestructura mientras tú resuelves disputas.",
        result: "Operativo en semanas, no en meses",
        features: ["Suscripción", "Bajo demanda", "Soporte 24/7"],
      },
      {
        number: "03",
        title: "Soluciones Licenciadas",
        description:
          "Licencia completa de nuestra tecnología para gestión interna con total control y autonomía operativa.",
        result: "Independencia tecnológica con respaldo experto",
        features: ["Licenciamiento", "Autonomía", "Personalización"],
      },
      {
        number: "04",
        title: "Consultorías Especializadas",
        description:
          "Proyectos de transformación digital, fintech, digitalización de la justicia y capacitación en LegalTech.",
        result: "De la estrategia a la implementación medible",
        features: ["Estrategia", "Capacitación", "Acompañamiento"],
      },
    ],
    capabilities: [
      "Negociación directa entre partes",
      "Mediación digital automatizada",
      "Arbitraje eficiente",
      "Interfaz intuitiva",
      "Seguridad y confidencialidad",
      "Accesibilidad global",
    ],
    platformEyebrow: "Plataforma ODR",
    platformTitlePre: "Resolución de disputas",
    platformTitleAccent: "sin fronteras.",
    platformBody:
      "Resultados rápidos y efectivos. Costos reducidos. Acceso desde cualquier lugar del mundo.",
    platformCta: "Explorar la plataforma",
  },
  en: {
    eyebrow: "Solutions",
    titlePre: "Four models. One mission:",
    titleAccent: "resolve",
    intro:
      "We tailor our technology to the way your organization needs to operate. No rigidity, no over-engineering.",
    services: [
      {
        number: "01",
        title: "Custom Development",
        description:
          "We co-design, build, and deploy bespoke ODR platforms that integrate with your existing technology ecosystem.",
        result: "Full control over the experience and the data",
        features: ["Co-design", "Development", "Deployment"],
      },
      {
        number: "02",
        title: "Managed Solutions",
        description:
          "Access our platform via subscription or on demand. We run the infrastructure while you resolve disputes.",
        result: "Live in weeks, not months",
        features: ["Subscription", "On demand", "24/7 support"],
      },
      {
        number: "03",
        title: "Licensed Solutions",
        description:
          "Full license of our technology for in-house operation with complete control and operational autonomy.",
        result: "Technological independence with expert backing",
        features: ["Licensing", "Autonomy", "Customization"],
      },
      {
        number: "04",
        title: "Specialized Consulting",
        description:
          "Digital transformation, fintech, justice digitalization, and LegalTech training projects.",
        result: "From strategy to measurable implementation",
        features: ["Strategy", "Training", "Advisory"],
      },
    ],
    capabilities: [
      "Direct negotiation between parties",
      "Automated digital mediation",
      "Efficient arbitration",
      "Intuitive interface",
      "Security and confidentiality",
      "Global accessibility",
    ],
    platformEyebrow: "ODR Platform",
    platformTitlePre: "Dispute resolution",
    platformTitleAccent: "without borders.",
    platformBody:
      "Fast, effective outcomes. Reduced costs. Access from anywhere in the world.",
    platformCta: "Explore the platform",
  },
};

export default function Solutions() {
  const t = useCopy(COPY);

  return (
    <section id="soluciones" className="divide-section py-28 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            {t.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-2 max-w-3xl">
            {t.titlePre}{" "}
            <span className="text-brand">{t.titleAccent}</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted text-lg max-w-2xl"
          >
            {t.intro}
          </motion.p>

          {/* Service Cards — 2x2 */}
          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            {t.services.map((s) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                whileTap={{ scale: 0.97 }}
                className="card p-8 cursor-pointer group"
              >
                <span className="numeral text-sm text-brand/60">
                  {s.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-text mt-4 mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {s.description}
                </p>
                <p className="text-xs font-semibold text-brand mb-5">
                  &#8594; {s.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-muted border border-line rounded-full px-3 py-1 group-hover:border-brand/30 group-hover:text-brand transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform ODR block — dark */}
          <motion.div
            variants={fadeUp}
            className="mt-20 bg-ink border border-white/10 rounded-2xl p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="eyebrow !text-accent mb-4">{t.platformEyebrow}</p>
                <h3 className="display-3 text-white">
                  {t.platformTitlePre}{" "}
                  <span className="text-accent">{t.platformTitleAccent}</span>
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {t.platformBody}
                </p>
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent hover:text-white transition-colors"
                >
                  {t.platformCta}
                  <span className="transition-transform group-hover:translate-x-1">
                    &#8594;
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-white/80">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
