export const EXTREME_EASE_OUT = {
  delay: 0.5,
  easing: [0.0, 0.7, 0.1, 1.0],
  duration: 2.5,
} as const;

export const RED_GREEN_TRANSITION_PROPS = {
  transitionDuration: "1s",
  transitionTimingFunction: "linear",
} as const;

export const ACCORDION_TRANSITION_PROPS = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.2 },
};

export const ACTIVE_TAB_INDICATOR_TRANSITION_PROPS = {
  transition: { type: "spring", bounce: 0.2, duration: 0.6 },
} as const;
