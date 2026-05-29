"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** Cycles through words with a vertical clip-reveal. Static on reduced-motion. */
export default function RotatingWord({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(
      () => setI((p) => (p + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [reduce, words.length, interval]);

  if (reduce) return <span className={className}>{words[0]}</span>;

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={{ y: "0.9em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.9em", opacity: 0 }}
          transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
          className={`inline-block ${className}`}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
