/**
 * REDEK motion language — easing tokens y variants compartidos.
 * Importar desde aquí en vez de strings sueltos ('easeOut') para
 * mantener una sensación de movimiento coherente en todo el sitio.
 */

// Curvas (cubic-bezier). EASE_OUT_EXPO = salida con inercia premium.
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// Reveal estándar de entrada (whileInView once).
export const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_STANDARD } },
};

// Contenedor con stagger para secciones.
export const stagger = (childrenDelay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: childrenDelay } },
});

// Feedback físico de press para botones/tabs.
export const pressable = { whileTap: { scale: 0.97 } } as const;

// Viewport por defecto para whileInView.
export const viewportOnce = { once: true, margin: "-100px" } as const;
