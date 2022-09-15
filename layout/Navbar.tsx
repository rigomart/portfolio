// import { Transition } from 'react-transition-group';

import Link from 'next/link';
import Image from 'next/image';

import { fadeDownStyles, fadeStyles, sectionLinks } from 'utils';
import Drawer from './Drawer';
import SectionLink from './SectionLink';
import { Button } from 'components';
import { useMounted, useShowOnScroll } from 'hooks';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: ({ delay = 0 }) => ({
    opacity: [0, 1],
    transition: { delay, duration: 0.5 },
  }),
};

const fadeDown = {
  hidden: { opacity: 0, translateY: -16 },
  visible: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Navbar = () => {
  const { show } = useShowOnScroll();

  return (
    <>
      <header
        className={`${
          show ? '' : '-translate-y-16'
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 
        z-20 bg-primary-900 md:bg-primary-900/60 md:backdrop-blur-lg flex items-center 
        justify-between h-16`}
      >
        {/* LOGO */}
        <Link href="/" passHref>
          <motion.a
            initial={'hidden'}
            animate={'visible'}
            variants={fadeIn}
            custom={{ delay: 0 }}
          >
            <Image src="/logo.svg" height={48} width={48} alt="Logo" />
          </motion.a>
        </Link>

        <nav className="hidden sm:flex">
          <ul className="flex gap-x-6 items-center">
            {sectionLinks.map(({ path, title }, index) => (
              <motion.li
                initial="hidden"
                animate="visible"
                custom={index}
                variants={fadeDown}
                key={path}
              >
                <SectionLink
                  direction="horizontal"
                  index={index}
                  path={path}
                  title={title}
                />
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={{ delay: 0.4 }}
          >
            <Button className="sm:ml-5" size="sm">
              Resume
            </Button>
          </motion.div>
        </nav>

        <Drawer />
      </header>
    </>
  );
};

export default Navbar;
