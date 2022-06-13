import { ProjectCard } from "@components";
import { projects } from "@utils/constants";

const Projects = () => {
  return (
    <section className='py-16'>
      <h4 className='text-2xl font-title font-medium text-center mb-6'>
        Otros Proyectos
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
