export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export const cardHover = {
  scale: 1.03,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  transition: { type: 'spring', stiffness: 400, damping: 10 }
} as const;

export const buttonTap = {
  scale: 0.95,
  transition: { type: 'spring', stiffness: 400, damping: 17 }
} as const;
