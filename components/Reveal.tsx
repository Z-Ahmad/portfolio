"use client";

import * as m from "motion/react-m";
import { SPRING_REVEAL } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Use small steps (0.06) to stagger siblings. */
  delay?: number;
  /** Reveal on scroll into view instead of on mount. */
  inView?: boolean;
  as?: "div" | "section" | "li" | "header";
};

/** Fades and lifts content into place, once. Reduced motion gets the fade only. */
export default function Reveal({ children, className, delay = 0, inView = false, as = "div" }: RevealProps) {
  const Tag = m[as];
  const target = { opacity: 1, y: 0 };
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      {...(inView ? { whileInView: target, viewport: { once: true, margin: "0px 0px -10% 0px" } } : { animate: target })}
      transition={{ ...SPRING_REVEAL, delay, opacity: { duration: 0.5, delay } }}
    >
      {children}
    </Tag>
  );
}
