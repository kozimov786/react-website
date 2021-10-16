export const pageAnime = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, when: "beforeChildren",
      staggerChildren: 0.10
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 }
  }
}

export const titleAnim = {
  hidden: { y: 200, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeInOut" }
  }
}
export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" }
  }
}
export const photoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeInOut" }
  }
}
export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 1, ease: "easeInOut" }
  }
}
export const ScrollAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.2 }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
}
export const sectionAnim = {
  hidden: {
    opacity: 0,
    x: 200,
    transition: { duration: 1 }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeInOut" }
  }
}