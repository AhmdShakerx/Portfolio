export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: EASE_EDITORIAL,
    },
  }),
};

export const titleRevealVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: EASE_EDITORIAL,
    },
  }),
};

export const maskRevealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: (delay: number = 0) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.95,
      delay,
      ease: EASE_EDITORIAL,
    },
  }),
};

export const imageZoomVariants = {
  hidden: { scale: 1.08 },
  visible: (delay: number = 0) => ({
    scale: 1,
    transition: {
      duration: 1.2,
      delay,
      ease: EASE_EDITORIAL,
    },
  }),
};

export const lineDrawVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (delay: number = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay,
      ease: EASE_EDITORIAL,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const itemStaggerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_EDITORIAL,
    },
  },
};
