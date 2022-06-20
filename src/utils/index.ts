export const sectionLinks = [
  { title: "Sobre mí", path: "#about" },
  { title: "Proyectos", path: "#projects" },
  { title: "Contacto", path: "#contact" },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "NodeJS",
  "React",
  "React Native",
  "Redux",
  "Firebase",
];

export const navDelay = 1000;
export const loaderDelay = 200; // TODO: change to 2000

export const fadeStyles = {
  unmounted: "opacity-0",
  entering: "opacity-0",
  entered: "opacity-100",
  exiting: "opacity-0",
  exited: "opacity-0",
};

export const fadeDownStyles = {
  unmounted: "-translate-y-4 opacity-0",
  entering: "-translate-y-4 opacity-0",
  entered: "opacity-100",
  exiting: "-translate-y-4 opacity-0",
  exited: "-translate-y-4 opacity-0",
};
