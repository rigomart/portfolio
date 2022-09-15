import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: ({ delay = 0 }) => ({
    opacity: [0, 1],
    transition: { delay, duration: 0.5 },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, translateY: -16 },
  visible: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, translateY: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

export const fadeUpSection: Variants = {
  hidden: { opacity: 0, translateY: 30 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};
