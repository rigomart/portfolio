import { ProjectCard, Title } from "@components";
import { projects } from "@utils/constants";

const Projects = () => {
  return (
    <section className='py-28'>
      <Title text='Algunos de mis proyectos' num='02.' />
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          orientation={index % 2 == 0 ? "right" : "left"}
        />
      ))}
    </section>
  );
};

export default Projects;
