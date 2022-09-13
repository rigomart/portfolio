import { Transition } from 'react-transition-group';
import Link from 'next/link';
import Image from 'next/image';

import { fadeDownStyles, fadeStyles, sectionLinks } from 'utils';
import Drawer from './Drawer';
import SectionLink from './SectionLink';
import { Button } from 'components';
import { useMounted, useShowOnScroll } from 'hooks';

const Navbar = () => {
  const { show } = useShowOnScroll();
  const { isMounted } = useMounted();

  return (
    <>
      <header
        className={`${
          show ? '' : '-translate-y-16'
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 
        z-20 bg-primary-900 md:bg-primary-900/60 md:backdrop-blur-lg flex items-center 
        justify-between h-16`}
      >
        <Transition in={isMounted} timeout={0}>
          {(state) => (
            <Link
              href="/"
              className={`transition duration-500 ease-in-out ${fadeStyles[state]}`}
            >
              <Image src="/logo.svg" height={48} width={48} alt="Logo" />
            </Link>
          )}
        </Transition>

        <nav className="hidden sm:flex">
          <ul className="flex gap-x-6 items-center">
            {sectionLinks.map(({ path, title }, index) => (
              <Transition in={isMounted} timeout={(index + 1) * 100} key={index}>
                {(state) => (
                  <SectionLink
                    className={`transition duration-500 ease-in-out ${fadeDownStyles[state]}`}
                    direction="horizontal"
                    index={index}
                    path={path}
                    title={title}
                  />
                )}
              </Transition>
            ))}
          </ul>
          <Transition in={isMounted} timeout={400}>
            {(state) => (
              <Button
                className={`sm:ml-5 transition duration-500 ease-in-out ${fadeDownStyles[state]}`}
                size="sm"
              >
                Resume
              </Button>
            )}
          </Transition>
        </nav>
        <Drawer />
      </header>
    </>
  );
};

export default Navbar;
