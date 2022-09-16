export type IFeaturedProject = {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  url: string;
  github: string;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type IProject = {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  createdAt: string;
  updatedAt: string;
};
