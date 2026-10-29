/** House curves, shared by CSS and motion. Springs for anything that moves; tweens only for fades. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Reveals: settles without overshoot, so text never wobbles. */
export const SPRING_REVEAL = { type: "spring", stiffness: 170, damping: 26, mass: 1 } as const;

/** Small interactive lifts (cards, buttons). Quick, with a trace of give. */
export const SPRING_HOVER = { type: "spring", stiffness: 400, damping: 30 } as const;
