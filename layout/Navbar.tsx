import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeDown, fadeIn, sectionLinks } from 'utils';
import Drawer from './Drawer';
import SectionLink from './SectionLink';
// import { Button } from 'components';
import { useShowOnScroll } from 'hooks';

const Navbar = () => {
  const { show } = useShowOnScroll();

  return (
    <>
      <header
        className={`${
          show ? '' : '-translate-y-20 md:-translate-y-16'
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 
        z-20 bg-dark-900 sm:bg-dark-900/60 sm:backdrop-blur-lg flex items-center 
        justify-between h-20 md:h-16 `}
      >
        <Link href="/" passHref>
          <motion.a
            className="h-full"
            initial={'hidden'}
            animate={'visible'}
            variants={fadeIn}
            custom={{ delay: 0 }}
          >
            <div className="relative h-full w-[54px] md:w-[48px]">
              <Image src="/logo.svg" layout="fill" alt="Logo" />
            </div>
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
            {/* <Button className="sm:ml-5" size="sm">
              Resume
            </Button> */}
          </motion.div>
        </nav>

        <Drawer />
      </header>
    </>
  );
};

export default Navbar;
