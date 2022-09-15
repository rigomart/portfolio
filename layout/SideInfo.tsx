import { Transition } from 'react-transition-group';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Icon } from 'components';
import { useMounted } from 'hooks';
import { fadeIn } from 'utils';

const SideInfo = () => {
  const { isMounted } = useMounted();

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={{ delay: 1.4 }}
        className="fixed bottom-10 left-8 hidden md:flex flex-col gap-y-4"
      >
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://github.com/mirdor"
          target="_blank"
          rel="noreferrer"
        >
          <a aria-label="Github">
            <Icon name="github" />
          </a>
        </Link>
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://www.linkedin.com/in/mirdordev/"
          target="_blank"
          rel="noreferrer"
        >
          <a aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
        </Link>
        <Link
          className="hover:-translate-y-1 transition duration-150 ease-in"
          href="https://twitter.com/mrodriguezto_"
          target="_blank"
          rel="noreferrer"
        >
          <a aria-label="Twitter">
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
