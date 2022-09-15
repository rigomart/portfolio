export const fadeIn = {
  hidden: { opacity: 0 },
  visible: ({ delay = 0 }) => ({
    opacity: [0, 1],
    transition: { delay, duration: 0.5 },
  }),
};

export const fadeDown = {
  hidden: { opacity: 0, translateY: -16 },
  visible: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};
