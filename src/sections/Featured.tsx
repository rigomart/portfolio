import { FeaturedCard, Title } from "@components";
import useFeaturedProjects from "@hooks/useFeaturedProjects";

const Featured = () => {
  const { projects } = useFeaturedProjects();

  return (
    <section className='py-20'>
      <Title text='Algunos de mis proyectos' num='02.' />
      {projects.map((project, index) => (
        <FeaturedCard
          key={project.id}
          project={project}
          orientation={index % 2 == 0 ? "right" : "left"}
        />
      ))}
    </section>
  );
};

export default Featured;
