import { FeaturedCard, Title } from "@components";
import { featuredProjects } from "@utils/constants";

const Featured = () => {
  return (
    <section className='py-20'>
      <Title text='Algunos de mis proyectos' num='02.' />
      {featuredProjects.map((project, index) => (
        <FeaturedCard
          project={project}
          orientation={index % 2 == 0 ? "right" : "left"}
        />
      ))}
    </section>
  );
};

export default Featured;
