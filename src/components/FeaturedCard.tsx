import { FeaturedProject } from "@typing/dataTypes";
import Icon from "./Icon";

type Props = {
  project: FeaturedProject;
  orientation: "right" | "left";
};

const ProjectCard = ({ project, orientation }: Props) => {
  let contentClassname = "";
  let imgClassname = "";

  if (orientation === "right") {
    contentClassname = "md:col-start-5 xl:col-start-7 text-right";
    imgClassname = " md:col-end-8";
  } else {
    contentClassname = "md:col-start-1 md:col-end-9 xl:col-end-7 text-left";
    imgClassname = "md:col-start-6";
  }

  return (
    <div className='my-20'>
      <div className='grid grid-cols-12'>
        <div
          className={`col-start-1 col-end-13 row-start-1 row-end-1 ${contentClassname}
         z-[2] flex flex-col justify-center py-3 px-10 md:px-0`}
        >
          <h4 className='font-mono text-sm text-ocean-400 mb-2'>
            Featured Project
          </h4>
          <h3 className='font-title text-white text-2xl mb-2'>
            {project.title}
          </h3>
          <div className='md:bg-ocean-800 text-slate-400 text-sm font-body2 rounded-md md:p-6 mb-4 md:shadow-sm md:shadow-black'>
            <p>{project.description}</p>
          </div>
          <ul
            className={`flex flex-wrap font-mono text-sm gap-x-4 text-slate-500 gap-y-1 mb-4 ${
              orientation === "right" ? "justify-end" : ""
            }`}
          >
            {project.tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div
            className={`flex gap-x-3 items-center ${
              orientation === "right" ? "justify-end" : ""
            }`}
          >
            <a href={project.github} target='_blank'>
              <Icon name='github' />
            </a>

            <a href={project.url} target='_blank'>
              <Icon name='extLink' />
            </a>
          </div>
        </div>
        <div
          className={`col-start-1 col-end-13 row-start-1 row-end-1 ${imgClassname} flex 
        items-center justify-center w-full max-w-full z-[1]`}
        >
          <a href={project.url} target='_blank'>
            <div className='md:bg-black rounded-md overflow-hidden'>
              <img
                className='w-full max-w-full rounded-md opacity-20 md:opacity-80 object-cover object-center'
                src={project.img}
                alt={project.title}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
