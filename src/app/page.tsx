import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import ODRFlow from "@/components/ODRFlow";
import PlatformShowcase from "@/components/PlatformShowcase";
import Solutions from "@/components/Solutions";
import AIFeatures from "@/components/AIFeatures";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["¿Qué es un sistema ODR?", "Un sistema de resolución electrónica de disputas: negociación, mediación y arbitraje en línea, con trazabilidad completa."],
    ["¿En cuánto tiempo se implementa la plataforma?", "En semanas, según el modelo: la solución manejada opera más rápido que un desarrollo a la medida."],
    ["¿Cómo garantizan la seguridad y confidencialidad?", "Cifrado de extremo a extremo, prácticas alineadas a ISO 27001 y bitácora auditable de cada actuación."],
    ["¿Se integra con nuestros sistemas actuales?", "Sí, mediante API e integraciones a la medida de tu ecosistema tecnológico."],
    ["¿Qué tipos de disputa resuelven?", "Comerciales, de consumo y contractuales, entre otras."],
    ["¿La IA reemplaza al criterio humano?", "No. La IA ordena y prioriza; las personas toman las decisiones."],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <ODRFlow />
      <PlatformShowcase />
      <Solutions />
      <AIFeatures />
      <Team />
      <FAQ />
      <CTABand />
      <Contact />
      <Subscribe />
      <Footer />
    </main>
  );
}
