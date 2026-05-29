# Auditoría v2 — redek-web vs Pinecone (segunda pasada)

**Fecha:** 2026-05-29
**Baseline v1 (global):** ~70% de Pinecone
**Score global v2 (ponderado por impacto en percepción de calidad):** 72/100
**Veredicto:** Salto real y verificable en las capas que el ojo percibe primero (tipografía, jerarquía, motion, copy); la brecha que queda es estructural —multi-página, SEO técnico y profundidad de contenido— y es la más cara de cerrar.

---

## Resumen ejecutivo (antes → después)

La v1 era una plantilla SaaS competente pero genérica: "todo pesaba igual", azul indisciplinado, copy adjetival, sin modo claro/oscuro real ni bilingüismo. La v2 cerró casi toda la brecha de **oficio de superficie**: Geist (neo-grotesca real estilo Vercel/Pinecone), escala display de 3 niveles que crea jerarquía verdadera, azul como acento, modo claro/oscuro sin parpadeo, i18n EN/ES completo, scroll-spy + barra de progreso, y un sistema de motion tokenizado (`src/lib/motion.ts`) importado en 19 componentes.

El problema es que el sitio sigue siendo **una sola página con anclas** (`src/app` tiene una sola ruta; el footer aún enlaza `href="#"` para Privacidad y Términos). Pinecone gana por arquitectura: 5 familias de destinos crawleables, casos de éxito reales, seguridad, pricing, recursos. Esa dimensión casi no se movió (34/100). Además se introdujo una **regresión de performance**: el HTML prerenderizado sirve 95 `opacity:0` inline (incluido el `<h1>` del hero, el propio LCP) porque los estados `initial` de framer-motion se serializan en SSR — el contenido above-the-fold no pinta hasta hidratar.

La consecuencia neta: la web **se siente** mucho más cara y cercana a Pinecone (de "below" a "at" en visual, motion y narrativa), pero **no es** un producto multi-página indexable ni técnicamente afinado. El score global ponderado se queda en ~72 porque las capas perceptuales (peso alto) subieron fuerte, pero IA/contenido (34) y performance (58) la anclan.

---

## Tabla por dimensión

| Dimensión | v1 | v2 | Score | Mejoras (qué subió) | Restante (sigue bajo Pinecone) |
|---|---|---|---|---|---|
| **Diseño visual y pulido** | below | at | **82** | Geist real mapeada a display/body en `globals.css`; escala display de 3 niveles con jerarquía verdadera; azul como acento (cifras a tinta, solo Stats/concepto en azul); `text-wrap:balance`; tokens de radio y elevación de 2 niveles. | Menos *restraint editorial* que Pinecone: REDEK está más decorado (sombras de reposo `elev-1` en cards) donde Pinecone resuelve con hairlines + whitespace. Hero con **dos líneas azules grandes** ("Criterio humano." entera) contradice la tesis del "azul disciplinado". Cards densas con ritmo interno apretado; eyebrows con tracking menor que los kickers tracked-out de Pinecone. |
| **Motion e interactividad** | at | at | **82** | Motion pasó de "presente" a "deliberado": easing tokenizado (`EASE_OUT_EXPO/STANDARD/IN_OUT`), variants `fadeUp/fadeIn/stagger`, `pressable whileTap:0.97`; magic-move con `layoutId` en underline de navbar y tab del mockup; parallax del grid del hero ligado a scroll. | Sin transiciones de página (es single-page; Pinecone tiene continuidad multi-vista con View Transitions). Gramática de reveal **monótona**: casi todo es `fadeUp`, el cuerpo se siente uniforme tras el hero. CTA con micro-nudge de 2px, sin físico (magnético/sweep). |
| **Narrativa y copy** | below | at | **76** | Titulares con punch y jerarquía ("Precisión algorítmica. / Criterio humano."); arco más claro; bilingüe EN/ES completo y bien redactado. | **Prueba social aparentemente fabricada** (testimonios e instituciones citadas — riesgo de credibilidad y exposición legal para una legaltech). Cifras sin fuente (98%, 12 países, 50+). Falta sustancia: casos con before/after, dato duro propio en el mensaje, profundidad de seguridad/compliance. |
| **Arquitectura de info y profundidad** | below | below | **34** | Subió densidad y orden de la página única: 18 secciones jerarquizadas, scroll-spy, barra de progreso. | **Brecha estructural casi intacta.** Sigue siendo single-page con anclas (no rutas). Footer con `href="#"` en Privacidad y Términos (señal de alarma en legaltech). Sin Casos, Seguridad, Pricing, Recursos. Cifras y muro de clientes sin verificar. Sin sitemap/robots/metadataBase/hreflang. |
| **Accesibilidad WCAG AA** | at | at | **78** | Tablist WAI-ARIA completo en PlatformShowcase y ODRFlow (roles, `aria-selected/controls`, roving tabindex, flechas/Home/End); labels asociados; aria en carruseles. | Fallas de **contraste AA**: badges success 3.09 / warning 2.96 en claro; brand 4.0 en oscuro; muro de clientes con `muted/55` (2.33). Falta skip-to-content. Scroll cue animado por JS no gateado con `useReducedMotion`. |
| **Performance y Técnica** | below | below | **58** | Canvas `NodeNetwork` optimizado (IntersectionObserver); no empeoró de forma descontrolada pese a sumar i18n, parallax y canvas. | **Regresión LCP real:** index.html prerenderizado con 95 `opacity:0` inline; el `<h1>` del hero sale `opacity:0;transform:translateY(18px)` — el LCP depende de hidratación. `next.config.ts` vacío (sin formats AVIF/WebP). Sin code-splitting below-the-fold. 19 componentes importan framer-motion en el critical path. |

---

## Lo que más subió (biggest gains)

1. **Tipografía e identidad** — Geist reemplaza la fuente genérica; es el cambio que más acerca la percepción a Pinecone/Vercel.
2. **Jerarquía tipográfica real** — la escala display de 3 niveles eliminó el "todo pesa igual" de v1.
3. **Sistema de motion deliberado** — easing tokenizado + magic-move con `layoutId`, no animaciones ad-hoc.
4. **Modo claro/oscuro sin parpadeo + i18n EN/ES completo** — paridad de tabla-stakes que v1 no tenía.
5. **Calidad de copy** — titulares con punch y arco narrativo legible.

---

## Lo que sigue lejos de Pinecone (remaining gaps, honesto)

1. **Arquitectura multi-página (34/100, la peor)** — sigue siendo single-page con anclas; Pinecone tiene decenas de páginas crawleables. Sin Casos, Seguridad, Pricing, Recursos.
2. **SEO técnico y rutas i18n** — i18n es client-side (un solo URL, sin `/en` `/es`): sin hreflang, sin OG real, sin JSON-LD, sin sitemap/robots/metadataBase. No indexable multilingüe.
3. **Performance / LCP** — regresión por `opacity:0` inline en el hero; `next.config.ts` vacío; sin code-splitting; framer-motion en el critical path de 19 componentes.
4. **Credibilidad / prueba social** — testimonios y cifras aparentemente fabricados; riesgo legal real para una legaltech, además de brecha vs la sección Customers de Pinecone.
5. **Restraint visual** — más decorado que Pinecone (sombras de reposo, doble línea azul en hero).
6. **Contraste AA residual** — badges y muro de clientes bajo 4.5:1.

---

## Próximos pasos recomendados (mayor ROI)

1. **[P0] Arreglar el LCP del hero** — quitar `opacity:0` inline del above-the-fold: usar `@keyframes` CSS para la entrada o renderizar el hero sin animación de opacidad inicial, para que pinte en SSR sin esperar hidratación. (effort S/M, impacto alto en Core Web Vitals percibidos).
2. **[P0] Resolver credibilidad** — testimonios/casos reales con consentimiento, o anonimizar por sector; etiquetar cifras con fuente/fecha o como agregadas. Crear `/privacidad` y `/terminos` (hoy `href="#"`). Cierra el mayor riesgo legal y de confianza.
3. **[P0/P1] Sembrar multi-página** — migrar al menos Casos de éxito, Seguridad y Pricing a rutas reales (`/casos`, `/seguridad`, `/precios`); reservar la home como overview. Desbloquea simultáneamente IA/contenido, SEO (rutas linkeables/indexables) y motion (View Transitions entre vistas).
4. **[P1] SEO técnico** — `next.config.ts` con `images.formats` AVIF/WebP + `next/image`; `metadataBase`, OG image real, JSON-LD (Organization/Product), `sitemap.ts`/`robots.ts`; hreflang una vez existan rutas por idioma.
5. **[P1] Pulido AA + restraint** — subir contraste de badges/muro de clientes a ≥4.5:1, añadir skip-to-content, gatear el scroll cue con `useReducedMotion`; y atenuar sombras de reposo + bajar la segunda línea azul del hero para acercarse al restraint de Pinecone. Bug confirmado: el lead de Plataforma en mobile **sí** se corta por el borde derecho (overflow real, no artefacto de captura).
