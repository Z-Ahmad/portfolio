"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/** One motion root: lazy-loaded features, and reduced motion follows the OS setting. */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
