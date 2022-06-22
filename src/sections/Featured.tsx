import { useEffect, useRef } from "react";
import { FeaturedCard, Title } from "@components";
import useFeaturedProjects from "@hooks/useFeaturedProjects";
import { sr } from "@utils";

const Featured = () => {
  const { projects } = useFeaturedProjects();
  const titleRef = useRef<any>();
  const projectsRef = useRef<any[]>([]);

  useEffect(() => {
    sr(titleRef.current, 200, 0.2);
  }, []);

  useEffect(() => {
    projectsRef.current.forEach((ref, index) => {
      sr(ref, 200 * (index + 1), 0.2);
    });
  }, [projects]);

  return (
    <section className='py-20'>
      <div ref={titleRef}>
        <Title text='Algunos de mis proyectos' num='02.' />
      </div>
      {projects &&
        projects.map((project, index) => (
          <div key={index} ref={(el) => (projectsRef.current[index] = el)}>
            <FeaturedCard
              project={project}
              orientation={index % 2 == 0 ? "right" : "left"}
            />
          </div>
        ))}
    </section>
  );
};

export default Featured;
