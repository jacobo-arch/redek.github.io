import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes de REDEK para resolución electrónica de disputas (ODR): solución manejada, desarrollo a la medida o plataforma licenciada. Cotización a medida según tu operación.",
  alternates: { canonical: "/precios" },
};

type Plan = {
  nombre: string;
  para: string;
  incluye: string[];
  cta: string;
  destacado?: boolean;
};

const planes: Plan[] = [
  {
    nombre: "Solución Manejada",
    para: "Para equipos que necesitan operar ODR en semanas, sin asumir infraestructura propia.",
    incluye: [
      "Operación gestionada por REDEK bajo suscripción o por demanda",
      "Plataforma ODR lista para usar, configurada a tu reglamento",
      "Puesta en marcha en semanas, no en meses",
      "Soporte y mantenimiento incluidos",
      "Reportería de casos y métricas de resolución",
    ],
    cta: "secondary",
  },
  {
    nombre: "Desarrollo a la Medida",
    para: "Para organizaciones que requieren una plataforma propia, integrada a sus sistemas.",
    incluye: [
      "Plataforma diseñada y construida según tus flujos",
      "Integración con tus sistemas y fuentes de datos",
      "Marca y experiencia personalizadas",
      "Acompañamiento en implementación y adopción",
      "Evolución continua del producto por roadmap conjunto",
    ],
    cta: "primary",
    destacado: true,
  },
  {
    nombre: "Solución Licenciada",
    para: "Para entidades que buscan autonomía total y operar la tecnología internamente.",
    incluye: [
      "Licencia de la plataforma ODR de REDEK",
      "Despliegue en tu infraestructura o nube de preferencia",
      "Control y gobierno completos de la operación",
      "Transferencia de conocimiento al equipo interno",
      "Soporte y actualizaciones según el acuerdo de licencia",
    ],
    cta: "secondary",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Depende del modelo. La Solución Manejada suele estar operativa en semanas; un desarrollo a la medida o una licencia se planifican por fases acordadas contigo. Los tiempos son representativos y se confirman tras el diagnóstico inicial.",
  },
  {
    q: "¿Qué incluye el soporte?",
    a: "Todos los modelos contemplan soporte y mantenimiento. El alcance —canales, tiempos de respuesta y niveles de servicio— se define en la propuesta según tu operación y volumen de casos.",
  },
  {
    q: "¿Por qué no publican precios?",
    a: "REDEK es B2B: cada implementación de ODR varía en alcance, integraciones, volumen y modelo de operación. Por eso trabajamos con cotización a medida, transparente y ajustada a tu caso.",
  },
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-brand"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Precios() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        {/* Encabezado */}
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Planes</p>
          <h1 className="display-2">
            Un modelo para cada forma de{" "}
            <span className="text-brand">operar</span>.
          </h1>
          <p className="lead mt-6 text-lg text-muted">
            En REDEK el precio es a medida. Cada implementación de resolución
            electrónica de disputas (ODR) tiene un alcance distinto —integraciones,
            volumen de casos y modelo de operación—, así que partimos de un
            diagnóstico y construimos una cotización transparente, ajustada a tu
            organización. Elige el modelo que mejor se adapta a cómo trabajas.
          </p>
        </header>

        {/* Planes */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {planes.map((plan) => (
            <article
              key={plan.nombre}
              className={`card flex flex-col p-8 ${
                plan.destacado ? "border-brand elev-1" : ""
              }`}
            >
              {plan.destacado && (
                <span className="eyebrow mb-4 inline-block">Más elegido</span>
              )}
              <h2 className="display-3">{plan.nombre}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {plan.para}
              </p>

              <div className="mt-6 border-t border-line pt-6">
                <p className="font-display text-2xl font-bold text-text">
                  Cotización a medida
                </p>
                <p className="mt-1 text-sm text-muted">
                  Según alcance y volumen.
                </p>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.incluye.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text">
                    <Check />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contacto"
                className={`mt-8 justify-center ${
                  plan.cta === "primary" ? "btn-primary" : "btn-secondary"
                }`}
              >
                Solicitar cotización
              </a>
            </article>
          ))}
        </section>

        {/* FAQ */}
        <section className="divide-section mt-24 pt-16">
          <p className="eyebrow mb-4">Preguntas frecuentes</p>
          <h2 className="display-3 max-w-2xl">
            Sobre implementación y soporte.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-display text-base font-semibold text-text">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-ink px-8 py-12 text-center text-white sm:px-16">
          <h2 className="h-display text-2xl text-white sm:text-3xl">
            ¿Listo para diseñar tu solución de ODR?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Cuéntanos cómo opera tu equipo y te preparamos una cotización a la
            medida del modelo que mejor te sirva.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/#contacto" className="btn-primary">
              Hablar con REDEK
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
