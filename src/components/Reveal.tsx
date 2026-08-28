"use client";

import { motion } from "framer-motion";

/**
 * Thin client wrapper for scroll-reveal animation so page shells can stay
 * Server Components — content ships in the initial HTML for Googlebot while
 * the motion layer hydrates on top.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
