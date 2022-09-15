// import { Transition } from 'react-transition-group';

import Link from 'next/link';
import Image from 'next/image';

import { fadeDown, fadeIn, sectionLinks } from 'utils';
import Drawer from './Drawer';
import SectionLink from './SectionLink';
import { Button } from 'components';
import { useShowOnScroll } from 'hooks';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { show } = useShowOnScroll();

  return (
    <>
      <header
        className={`${
          show ? '' : '-translate-y-16'
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 
        z-20 bg-dark md:bg-dark/60 md:backdrop-blur-lg flex items-center 
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
