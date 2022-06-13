export type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  img: string;
  url: string;
  github: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
};
