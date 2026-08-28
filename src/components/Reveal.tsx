/**
 * Scroll-reveal wrapper.
 *
 * Deliberately not a Client Component and deliberately not JavaScript-driven.
 * It was a framer-motion `whileInView`, which pulled the animation library into
 * the critical path of every page that used it. This version is a plain CSS
 * class using a scroll-driven `animation-timeline`.
 *
 * The important property: content is never hidden waiting for script. Browsers
 * without scroll-driven animation support (Firefox today) simply render it
 * visible and unanimated, which is also what a crawler or a no-JS visitor sees.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  /** Stagger, in seconds. Applied as an animation-range offset. */
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  return (
    <Component
      className={`reveal-on-scroll ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  );
}
