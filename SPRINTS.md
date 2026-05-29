# REDEK Web — Plan de Sprints hacia nivel Pinecone "o mejor"

> **ESTADO:** ✅ Sprint 1 (jerarquía/marca/tactilidad) y ✅ Sprint 2 (i18n EN/ES) COMPLETOS y desplegados. Tipografía → **Geist**. Pendientes: S3 (motion con profundidad), S4 (superficies/radios/elevación), S5 (confianza/robustez).

> Auditoría adversarial: 71 hallazgos en 9 dimensiones, redek-web vs pinecone.io.
> Estado del repo: 17 secciones, todo texto **hardcoded en español**, sin capa i18n, `lang="es"` fijo en `layout.tsx:45`.

## Resumen ejecutivo

REDEK ya tiene los **huesos correctos**: tokens theme-aware, hero canvas reactivo, scroll-spy, flujo ODR interactivo, mockup de plataforma, modo claro/oscuro. A nivel de *arquitectura visual* estamos **at**, no below. Donde caemos por debajo de Pinecone es en **disciplina y jerarquía**, no en ambición:

1. **Tipografía plana**: 6 secciones comparten exactamente `h-display text-4xl md:text-5xl`. No hay escala — todo titular pesa igual, lo que delata plantilla. (P0)
2. **Color de marca degradado**: el azul cobalto se usa en numerales gigantes y palabras enteras; deja de ser acento. Pinecone colorea **una** palabra. (P1)
3. **Hero muerto tras el reveal**: titular 100% estático. Pinecone tiene su momento firma (palabra rotatoria + highlight sincronizado con el orbe). (P1)
4. **Cero motion ligado a scroll** y **cero feedback de press** (`:active`/`whileTap`). En móvil no hay tactilidad. (P1)
5. **Sin internacionalización**: el sitio es monolingüe ES con `lang` fijo; un sitio "nivel Pinecone" para ODR/legaltech necesita EN-ES con toggle. Es además el item que el negocio pidió explícitamente.

**Veredicto global**: estamos a ~70% de Pinecone. La brecha es **cerrable en 5 sprints** y es mayoritariamente de *pulido sistémico* (tokens, escala, reglas) más que de reconstrucción. Ningún hallazgo exige rehacer la arquitectura. La palanca de mayor ROI es Sprint 1 (jerarquía + marca + tactilidad + hero firma): cambios S/M que elevan la percepción de "caro" de inmediato. La i18n EN-ES es transversal y bloquea el alcance internacional, por lo que la tratamos como sprint dedicado y temprano.

---

## Quick wins (P0/P1 esfuerzo S — hacer ya)

| Item | Área | Aceptación |
|---|---|---|
| Regla de marca: azul solo en palabra-concepto | Color de marca | Ningún titular tiene >1 palabra en `text-brand`; numerales del Problema en `text-text` |
| `text-wrap: balance` en `.h-display` y leads | Balance de titulares | Ningún titular clave deja palabra huérfana en última línea |
| Estados de press (`:active` + `whileTap={{scale:0.96}}`) | Micro-interacciones | Todo botón/tab/dot responde físicamente al click/tap |
| Tokenizar easing (`EASE_OUT_EXPO`, `EASE_STANDARD`) | Easing | Cero strings `'easeOut'` en componentes; todos importan de `motion.ts` |
| ScrollProgress con `scaleX` + `useSpring` | Motion compositada | La barra anima `transform`, no `width`; sin reflow en scroll rápido |
| Extender `bg-grid` a Problema/Cómo funciona/CTA | Grid de fondo | ≥4 secciones ancla con grid hairline visible y alineado a gutters |

---

## Sprint 1 — Jerarquía, marca y tactilidad (la palanca de "caro")
**Objetivo**: que la página deje de leerse como plantilla. Escala tipográfica real, azul como acento disciplinado, y respuesta física en cada interacción. Todo S/M, máximo ROI percibido.

| Item | Área | Esfuerzo | Impacto | Aceptación |
|---|---|---|---|---|
| Escala de display de 3 niveles (display-1/2/3) y aplicarla por peso narrativo | Jerarquía tipográfica | M | alto | Hero `text-7xl`, secciones ancla `text-5xl/6xl`, apoyo `text-3xl/4xl`; ninguna clase `h-display text-4xl md:text-5xl` duplicada en 6 secciones |
| Regla de color de marca: tinta por defecto, azul en 1 palabra-concepto | Color de marca | S | alto | Numerales del Problema en `text-text`; ningún titular con >1 palabra azul |
| `text-wrap: balance` + revisión manual de quiebres en 4-5 titulares clave | Balance de titulares | S | medio | Sin viudas en ODRFlow/Problem; quiebre intencional con `<br>`/nbsp en palabra-concepto |
| Estados de press globales (`:active` + `whileTap`) | Micro-interacciones | S | medio | btn-primary/secondary y tabs/dots responden con scale 0.96-0.97 |
| Tokens de easing centralizados en `motion.ts` | Lenguaje de easing | S | medio | Toda sección importa `EASE_OUT_EXPO`; cero `'easeOut'` string |
| ScrollProgress recompuesta a `scaleX`+`useSpring` | Motion compositada | S | medio | Anima `transform`; sensación de inercia; sin jank en scroll rápido |
| Hero firma: última palabra rotatoria + highlight sincronizado con canvas | Hero deleite | M | alto | La línea final del titular rota con `AnimatePresence mode='wait'`, clip-reveal y sweep tipo `::selection`; respeta reduced-motion |

**Definición de Hecho**: comparando `over_light/dark.png` antes/después, un observador identifica 3 tamaños de titular distintos, el azul aparece como acento puntual, y todo elemento interactivo da feedback al press. Hero tiene un momento que evoluciona tras el reveal.

---

## Sprint 2 — Internacionalización EN-ES (toggle + i18n)
**Objetivo**: convertir el sitio monolingüe en bilingüe EN-ES con toggle persistente, sin romper SSR ni el theme. Item estrella pedido por negocio; transversal a las 17 secciones, por eso va dedicado.

| Item | Área | Esfuerzo | Impacto | Aceptación |
|---|---|---|---|---|
| Infraestructura i18n (`next-intl` o diccionario propio) con routing `/[locale]` | i18n arquitectura | L | alto | `/en` y `/es` (o `/`) renderizan SSR; `lang` del `<html>` refleja el locale activo (hoy fijo en `es`) |
| Extraer todas las cadenas de las 17 secciones a `messages/es.json` + `messages/en.json` | i18n contenido | L | alto | Cero strings hardcoded en componentes; `grep` de texto visible vive en los JSON |
| Toggle de idioma EN-ES en Navbar, persistente | i18n UI | M | alto | Toggle visible junto al de tema; selección persiste (cookie/localStorage) y respeta navegación |
| Traducción EN profesional (no MT cruda) de hero, CTA, FAQ, ODRFlow | i18n calidad | M | alto | Copy EN revisado por humano; terminología legal/ODR correcta; sin truncamientos en titulares EN |
| Metadatos y OG por locale (`alternates.languages`, `hreflang`) | i18n SEO | S | medio | `<head>` emite `hreflang` EN/ES y OG `og:locale:alternate`; Lighthouse SEO sin warnings de idioma |

**Definición de Hecho**: cualquier sección se ve completa y correcta en EN y ES; el toggle no causa flash ni pierde el scroll/tema; el HTML declara el idioma real y emite hreflang.

---

## Sprint 3 — Motion con profundidad (scroll-linked + continuidad)
**Objetivo**: pasar de "bloques que aparecen" a "lienzo continuo". 2-3 efectos scroll-linked bien colocados y magic-move en navegación, sin saturar.

| Item | Área | Esfuerzo | Impacto | Aceptación |
|---|---|---|---|---|
| Parallax sutil del bg-grid del hero ligado a scroll | Scroll-driven | M | alto | `useScroll`/`useTransform` traslada el grid; profundidad perceptible; reduced-motion lo anula |
| Reveal/translación del mockup de PlatformShowcase por entrada en viewport | Scroll-driven | M | alto | El mockup entra con opacidad+traslación ligadas a `scrollYProgress`, no fade binario |
| Reveal escalonado del stepper de ODRFlow por progreso de scroll | Scroll-driven | M | medio | Los pasos se revelan secuencialmente con el scroll, no todos a la vez |
| Indicador de tab con `layoutId` (magic-move) en PlatformShowcase y scroll-spy del Navbar | Magic-move | S | medio | El indicador activo se desliza entre tabs/links con `layoutId`, no aparece/desaparece |

**Definición de Hecho**: al hacer scroll por `x_plat_d.png`/`x_odr_d.png` hay sensación de continuidad y profundidad; la navegación lateral y el scroll-spy se sienten espacialmente continuos; reduced-motion deja todo estático.

---

## Sprint 4 — Sistema de superficies, radios y elevación
**Objetivo**: disciplina de Pinecone. Una escala de radios, dos niveles de sombra, un patrón de superficies legible, y ritmo de espaciado intencional.

| Item | Área | Esfuerzo | Impacto | Aceptación |
|---|---|---|---|---|
| Tokens de radio (`--radius-sm 8`/`--radius-md 16`/pill) y migrar todo | Radios | S | medio | Solo 3 escalas de esquina en uso; cero `rounded-md`/`rounded-lg` sueltos |
| Escala de sombras de 2 niveles (reposo flotante + hover) | Elevación | S | medio | Mockup de plataforma con sombra de reposo; hover diferenciado; sin sombras ad-hoc |
| Patrón de superficies explícito A-B; `bg-ink` solo 1 vez (mockup) | Superficies | M | medio | `bg-bg-soft` solo en 2-3 secciones de pausa alternadas; superficie oscura es 1 evento |
| Ritmo de espaciado en 3 valores (ancla / apoyo / banda) | Whitespace | S | medio | Secciones ancla `py-32/40`, apoyo `py-24`, bandas `py-16/20`; más aire antes del CTA final |
| Grid hairline consistente y alineado a gutters en secciones ancla | Grid de fondo | S | medio | `background-size` rima con las columnas del contenedor; opacidad del `--grid` perceptible |

**Definición de Hecho**: inventario de radios reducido a 3, sombras a 2 niveles; la alternancia de superficies es legible; el ritmo vertical ya no es metronómico.

---

## Sprint 5 — Confianza, contenido real y robustez
**Objetivo**: eliminar los olores a "placeholder de plantilla" (logos-texto), endurecer theme/canvas y cerrar detalles de credibilidad que separan un demo de un producto real.

| Item | Área | Esfuerzo | Impacto | Aceptación |
|---|---|---|---|---|
| Sustituir nombres-texto de clientes por wordmarks SVG mono (o iconografía de sectores) | Logos/confianza | M | alto | `Clients.tsx` renderiza SVG, no spans de texto; mono al reposo, marca al hover |
| Sincronizar theme: canvas (NodeNetwork) cross-fade con el body, no salto de frame | Theme robustez | M | medio | Al togglear tema, canvas y CSS transicionan juntos; sin parpadeo de color en `NodeNetwork` |
| Auditar y cerrar resto de hallazgos P2 abiertos de las 9 dimensiones | Pulido transversal | M | medio | Backlog P2 revisado; cada uno cerrado o conscientemente diferido con razón |
| QA cross-browser/responsive y `prefers-reduced-motion` integral | Robustez | M | medio | Sin layout shift en breakpoints clave; toda animación nueva respeta reduced-motion |

**Definición de Hecho**: la banda de confianza usa formas gráficas reales; el cambio de tema es atómico visualmente; no quedan P2 sin decisión; el sitio se sostiene en los breakpoints y con reduced-motion.

---

### Orden y dependencias
- **Sprint 1 primero** (mayor ROI, sin dependencias).
- **Sprint 2 (i18n) temprano** porque toca las 17 secciones; hacerlo antes de Sprint 5 (contenido) evita re-trabajo de cadenas.
- **Sprint 3** depende de los tokens de motion del Sprint 1 (`motion.ts`).
- **Sprint 4** es independiente pero conviene tras 1 para no migrar radios dos veces.
- **Sprint 5** al final: consolida contenido real y robustez sobre un sistema ya disciplinado.
