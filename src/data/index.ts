export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1600,
    imageHeight: 900,
    tech: ["React", "TypeScript", "Node.js"],
    href: "https://github.com/you/project",
  },
  {
    title: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1600,
    imageHeight: 900,
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    href: "https://github.com/you/project",
  },
  {
    title: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1600,
    imageHeight: 900,
    tech: ["Python", "FastAPI", "Redis"],
    href: "https://github.com/you/project",
  },
];

export type Experience = {
  title: string;
  company: string;
  period: {
    start: string;
    end: string;
  };
  highlights: string[];
  tags: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    title: "Front-End Architect",
    company: "Sofftek - Pacifico Seguros",
    period: {
      start: "2024",
      end: "2025",
    },
    highlights: [
      "Led the company’s first microfrontend initiative (Module Federation) and cross-team coordination.",
      "Owned frontend delivery and modernization (linting, types, refactoring) alongside production support.",
      "Shipped critical migrations: React 19, Tailwind 4, and Rsbuild.",
    ],
    tags: ["Microfrontends", "Modernization", "Architecture", "CI/CD"],
    stack: [
      "React",
      "TypeScript",
      "Rsbuild",
      "Module Federation",
      "Tailwind CSS",
      "Code Maat",
    ],
  },
  {
    title: "Senior Front-End Developer",
    company: "Atlantic City",
    period: {
      start: "2022",
      end: "2023",
    },
    highlights: [
      "Drove platform improvements: Next.js Pages → App Router, Azure DevOps pipelines, and internal docs.",
      "Helped scale the frontend team by introducing branching workflows and engineering standards.",
      "Shipped core product flows (payments, registration) during a legacy CMS to Next.js migration.",
    ],
    tags: ["Next.js", "Migration", "DevOps", "Documentation"],
    stack: ["React", "Next.js", "TypeScript", "Azure DevOps", "Docusaurus"],
  },
];
