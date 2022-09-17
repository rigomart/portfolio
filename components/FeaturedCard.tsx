import Image from 'next/image';
import Link from 'next/link';
import { IFeaturedProject } from 'types/data';
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
  project: IFeaturedProject;
};

const ProjectCard = ({ project }: Props) => {
  const { description, github, img, order, tech, title, url } = project;

  const orientation = order % 2 ? 'left' : 'right';

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
          <h4 className="font-title text-white text-2xl mb-2">{title}</h4>
          <div className="md:bg-primary-800 text-slate-400 text-sm font-body2 rounded-md md:p-6 mb-4 md:shadow-sm md:shadow-black">
            <p>{description}</p>
          </div>
          <ul
            className={`flex flex-wrap font-mono text-sm gap-x-4 text-slate-500 gap-y-1 mb-4 ${
              orientation === 'right' ? 'justify-end' : ''
            }`}
          >
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div
            className={`flex gap-x-3 items-center ${
              orientation === 'right' ? 'justify-end' : ''
            }`}
          >
            <Link href={github}>
              <a target="_blank" aria-label="Github">
                <Icon name="github" />
              </a>
            </Link>

            <Link href={url}>
              <a target="_blank" aria-label="External Link">
                <Icon name="extLink" />
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`col-start-1 col-end-13 row-start-1 row-end-1 ${imgOrientation[orientation]} flex 
        items-center justify-center w-full max-w-full z-[1]`}
        >
          <Link href={url}>
            <a
              className="md:bg-dark-900 rounded-md overflow-hidden relative w-full h-full"
              target="_blank"
            >
              <Image
                className="rounded-md opacity-20 md:opacity-60 hover:opacity-90 
                hover:scale-105 transition duration-200 ease-in-out object-cover object-center"
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
