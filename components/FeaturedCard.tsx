import Image from 'next/image';
import Link from 'next/link';
import { FeaturedProject } from 'types/data';
import Icon from './Icon';

const containerOrientation = {
  right: 'md:col-start-5 xl:col-start-7 text-right',
  left: 'md:col-start-1 md:col-end-9 xl:col-end-7 text-left',
};

const imgOrientation = {
  right: 'md:col-end-8',
  left: 'md:col-start-6',
};

type Props = {
  project: FeaturedProject;
  orientation: 'right' | 'left';
};

const ProjectCard = ({ project, orientation }: Props) => {
  return (
    <div className="my-28">
      <div className="grid grid-cols-12">
        <div
          className={`col-start-1 col-end-13 row-start-1 row-end-1 ${containerOrientation[orientation]}
         z-[2] flex flex-col justify-center py-3 px-2 sm:px-10 md:px-0`}
        >
          <h3 className="font-mono text-sm text-primary-400 mb-2">
            Featured Project
          </h3>
          <h4 className="font-title text-white text-2xl mb-2">{project.title}</h4>
          <div className="md:bg-primary-800 text-slate-400 text-sm font-body2 rounded-md md:p-6 mb-4 md:shadow-sm md:shadow-black">
            <p>{project.description}</p>
          </div>
          <ul
            className={`flex flex-wrap font-mono text-sm gap-x-4 text-slate-500 gap-y-1 mb-4 ${
              orientation === 'right' ? 'justify-end' : ''
            }`}
          >
            {project.tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div
            className={`flex gap-x-3 items-center ${
              orientation === 'right' ? 'justify-end' : ''
            }`}
          >
            <Link href={project.github} target="_blank" aria-label="Github">
              <Icon name="github" />
            </Link>

            <Link href={project.url} target="_blank" aria-label="External Link">
              <Icon name="extLink" />
            </Link>
          </div>
        </div>
        <div
          className={`col-start-1 col-end-13 row-start-1 row-end-1 ${imgOrientation[orientation]} flex 
        items-center justify-center w-full max-w-full z-[1]`}
        >
          <Link href={project.url} target="_blank">
            <div className="md:bg-black rounded-md overflow-hidden">
              <Image
                className="w-full max-w-full rounded-md opacity-20 md:opacity-60 hover:opacity-90 
                hover:scale-105 transition duration-200 ease-in-out object-cover object-center"
                src={project.img}
                alt={project.title}
                width="100%"
                height="100%"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
