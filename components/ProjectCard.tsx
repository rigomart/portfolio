import Link from 'next/link';
import { Project } from 'types/data';
import { Icon } from 'components';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="bg-primary-800 shadow-sm shadow-black rounded-md p-5 hover:shadow-primary-500 
    transition duration-200 flex flex-col h-full"
    >
      <div className="mb-4 flex justify-between">
        <Icon name="folder" />
        <div className="flex gap-x-2">
          {project.github !== undefined && (
            <Link href={project.github}>
              <a target="_blank" aria-label="Github">
                <Icon name="github" />
              </a>
            </Link>
          )}
          {project.url !== undefined && (
            <Link href={project.url}>
              <a target="_blank" aria-label="External Link">
                <Icon name="extLink" />
              </a>
            </Link>
          )}
        </div>
      </div>
      <h5 className="text-title font-title font-medium text-slate-200 text-lg mb-3">
        {project.title}
      </h5>
      <p className="text-slate-400 font-body1 text-sm mb-4">{project.description}</p>
      <div className="flex-1" />
      <ul className="flex gap-x-3 gap-y-2 font-mono text-sm text-slate-500 flex-wrap">
        {project.tech.map((tech, index) => (
          <li className="whitespace-nowrap" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
