export const sectionLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'React Native',
  'Redux',
  'Firebase',
  'GraphQL',
];

type TransitionType = {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
};

export const navDelay = 1000;
export const loaderDelay = 200; // TODO: change to 2000

export const fadeStyles = {
  unmounted: 'opacity-0',
  entering: 'opacity-0',
  entered: 'opacity-100',
  exiting: 'opacity-0',
  exited: 'opacity-0',
};

export const fadeDownStyles = {
  unmounted: '-translate-y-4 opacity-0',
  entering: '-translate-y-4 opacity-0',
  entered: 'opacity-100',
  exiting: '-translate-y-4 opacity-0',
  exited: '-translate-y-4 opacity-0',
};

export const fadeUpStyles = {
  unmounted: 'translate-y-4 opacity-0',
  entering: 'translate-y-4 opacity-0',
  entered: 'opacity-100',
  exiting: 'translate-y-4 opacity-0',
  exited: 'translate-y-4 opacity-0',
};

export const loaderAniStyles: TransitionType = {
  enter: 'transition-opacity duration-500',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity duration-500',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};
