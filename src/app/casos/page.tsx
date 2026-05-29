import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Casos representativos y anonimizados por sector que ilustran cómo REDEK resuelve disputas en días con mediación, arbitraje y negociación asistida sobre su plataforma ODR.",
  alternates: { canonical: "/casos" },
};

type Caso = {
  numeral: string;
  sector: string;
  reto: string;
  enfoque: string;
  modalidad: string;
  cifra: string;
  cifraRotulo: string;
};

const casos: Caso[] = [
  {
    numeral: "01",
    sector: "Comercio electrónico",
    reto: "Reclamos masivos por entregas incompletas y reembolsos que saturaban el canal de soporte y escalaban a demandas de consumo.",
    enfoque:
      "Negociación asistida con flujos guiados: cada parte propone y contrapropone dentro de la plataforma, con evidencia adjunta y plazos automáticos.",
    modalidad: "Negociación asistida",
    cifra: "14 días",
    cifraRotulo: "Tiempo medio a acuerdo (ilustrativo)",
  },
  {
    numeral: "02",
    sector: "Banca y servicios financieros",
    reto: "Controversias por cargos no reconocidos y cláusulas de contratos de crédito con alto costo operativo de gestión presencial.",
    enfoque:
      "Mediación electrónica con conciliador acreditado y sala virtual asíncrona; las actas y acuerdos se firman digitalmente con trazabilidad probatoria.",
    modalidad: "Mediación",
    cifra: "−68% costos",
    cifraRotulo: "Costo por caso vs. vía tradicional (ilustrativo)",
  },
  {
    numeral: "03",
    sector: "Inmobiliario y arrendamiento",
    reto: "Disputas entre arrendadores y arrendatarios por depósitos, daños y terminación anticipada, con expedientes que tardaban meses.",
    enfoque:
      "Arbitraje en línea de bajo monto: presentación de pruebas, audiencia por video y laudo emitido sobre la plataforma con valor vinculante.",
    modalidad: "Arbitraje",
    cifra: "92% acuerdo",
    cifraRotulo: "Casos cerrados sin litigio (ilustrativo)",
  },
  {
    numeral: "04",
    sector: "Telecomunicaciones",
    reto: "Quejas recurrentes por facturación y calidad del servicio que generaban reincidencia y desgaste reputacional ante el regulador.",
    enfoque:
      "Triage automatizado que enruta cada caso a negociación o mediación según complejidad, con tableros para el equipo legal y de servicio.",
    modalidad: "Negociación + Mediación",
    cifra: "3.2x más rápido",
    cifraRotulo: "Resolución vs. proceso anterior (ilustrativo)",
  },
];

export default function Casos() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        {/* Encabezado */}
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Casos</p>
          <h1 className="display-2">
            Disputas que se resolvieron en{" "}
            <span className="text-brand">días, no en años</span>.
          </h1>
          <p className="lead mt-6 text-lg text-muted">
            Así se ve la resolución electrónica de disputas (ODR) cuando el
            proceso vive en una sola plataforma: negociación, mediación y
            arbitraje con trazabilidad probatoria de extremo a extremo.
          </p>
        </header>

        {/* Aviso de carácter ilustrativo */}
        <div className="elev-1 mt-10 rounded-lg border border-line bg-bg-soft px-5 py-4">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-semibold text-text">
              Ejemplos representativos.
            </span>{" "}
            Los siguientes casos están anonimizados y agrupados por sector para
            ilustrar el tipo de disputa que REDEK atiende. No corresponden a
            clientes reales identificables y las cifras son ilustrativas, no
            métricas verificadas de un proyecto específico.
          </p>
        </div>

        {/* Grilla de casos */}
        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {casos.map((c) => (
              <article
                key={c.numeral}
                className="card flex flex-col gap-5 p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full border border-line bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    {c.sector}
                  </span>
                  <span className="numeral text-sm text-muted">
                    {c.numeral}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="eyebrow mb-1.5">El reto</p>
                    <p className="leading-relaxed text-text">{c.reto}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1.5">Enfoque ODR</p>
                    <p className="leading-relaxed text-muted">{c.enfoque}</p>
                    <p className="mt-2 text-sm font-semibold text-accent">
                      {c.modalidad}
                    </p>
                  </div>
                </div>

                <div className="divide-section mt-auto pt-5">
                  <p className="numeral text-3xl font-bold text-brand">
                    {c.cifra}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {c.cifraRotulo}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final — panel oscuro */}
        <section className="mt-16">
          <div className="card elev-1 flex flex-col items-start gap-6 bg-ink p-10 text-white md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <p className="eyebrow mb-3 text-accent">Tu caso</p>
              <h2 className="display-3 text-white">
                ¿Qué disputa estás resolviendo demasiado despacio?
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Cuéntanos el tipo de controversia que enfrentas y diseñamos el
                flujo ODR —negociación, mediación o arbitraje— que mejor se
                ajusta a tu operación.
              </p>
            </div>
            <a href="/#contacto" className="btn-primary shrink-0">
              Hablar con REDEK
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
