import { motion } from 'framer-motion';

import { FeaturedCard, Title } from 'components';
import { IFeaturedProject } from 'types';
import { fadeUp } from 'utils';

type Props = {
  projects: IFeaturedProject[];
};

const Featured = ({ projects }: Props) => {
  return (
    <section id="projects" className="mb-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <Title text="Some of my projects" num="02." />
      </motion.div>
      {projects.map((project, index) => (
        <motion.div
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
          <FeaturedCard project={project} />
        </motion.div>
      ))}
    </section>
  );
};

export default Featured;
