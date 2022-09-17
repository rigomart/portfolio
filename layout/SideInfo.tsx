import Link from 'next/link';
import { motion } from 'framer-motion';

import { Icon } from 'components';
import { fadeIn } from 'utils';

const SideInfo = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={{ delay: 1.2 }}
        className="fixed bottom-10 left-8 hidden md:flex flex-col gap-y-4"
      >
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://github.com/mrodriguezto"
        >
          <a aria-label="Github" target="_blank">
            <Icon name="github" />
          </a>
        </Link>
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://www.linkedin.com/in/mrodriguezto/"
        >
          <a aria-label="LinkedIn" target="_blank">
            <Icon name="linkedin" />
          </a>
        </Link>
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://twitter.com/mrodriguezto_"
        >
          <a aria-label="Twitter" target="_blank">
            <Icon name="twitter" />
          </a>
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={{ delay: 1.4 }}
        className={`hidden md:block fixed bottom-10 right-8`}
      >
        <a
          className="font-body1 tracking-wide text-[0.8rem] text-slate-300
          [writing-mode:vertical-rl] hover:text-primary-100 hover:-translate-y-1
          transition duration-150 ease-in"
          href="mailto:miguel.rodev@gmail.com"
        >
          miguel.rodev@gmail.com
        </a>
      </motion.div>
    </>
  );
};

export default SideInfo;
