import { motion } from 'framer-motion';

import { Button, ProjectCard } from 'components';
import Link from 'next/link';
import { IProject } from 'types';
import { fadeUp } from 'utils';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section className="mb-36">
      <motion.h4
        className="text-2xl font-title font-medium text-center mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >
        Other Projects
      </motion.h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            className="h-full"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={index}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            key={index}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Link href="https://github.com/mrodriguezto">
          <a target="_blank">
            <Button size="sm">See More Projects</Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
