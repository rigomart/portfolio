export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  url: string;
  github: string;
  order: number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
};
