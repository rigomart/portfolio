import { Button, ProjectCard } from "@components";
import useProjects from "@hooks/useProjects";
import { sr } from "@utils";
import { useEffect, useRef } from "react";

const Projects = () => {
  const { projects } = useProjects();

  const titleRef = useRef<any>();
  const projectsRef = useRef<any[]>([]);

  useEffect(() => {
    sr(titleRef.current, 200, 0.2);
  }, []);

  useEffect(() => {
    projectsRef.current.forEach((ref, index) => {
      sr(ref, 100 * (index + 1), 0.2);
    });
  }, [projects]);

  return (
    <section className='py-16'>
      <h4
        ref={titleRef}
        className='text-2xl font-title font-medium text-center mb-6'
      >
        Otros Proyectos
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects &&
          projects.map((project, index) => (
            <div
              className='h-full'
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
      </div>
      <div className='my-10 flex justify-center'>
        <a href='https://github.com/LeuGimrt' target='_blank'>
          <Button size='sm'>See More Projects</Button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
