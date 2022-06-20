import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

import Logo from "@/logo.svg?component";
import { fadeDownStyles, fadeStyles, sectionLinks } from "@utils";
import Drawer from "./Drawer";
import SectionLink from "./SectionLink";
import { Button } from "@components";
import { useShowOnScroll } from "@hooks";

const Navbar = () => {
  const { show } = useShowOnScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <header
        className={`${
          show ? "" : "-translate-y-16"
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 z-20 
        bg-ocean-900 md:bg-ocean-900/60 md:backdrop-blur-lg flex items-center justify-between h-16`}
      >
        <Transition in={isMounted} timeout={0}>
          {(state) => (
            <a
              href='/'
              className={`transition duration-500 ease-in-out ${fadeStyles[state]}`}
            >
              <Logo className='h-12' />
            </a>
          )}
        </Transition>

        <nav>
          <ul className='hidden sm:flex gap-x-6 items-center'>
            {sectionLinks.map(({ path, title }, index) => (
              <Transition
                in={isMounted}
                timeout={(index + 1) * 100}
                key={index}
              >
                {(state) => (
                  <SectionLink
                    className={`transition duration-500 ease-in-out ${fadeDownStyles[state]}`}
                    direction='horizontal'
                    index={index}
                    path={path}
                    title={title}
                  />
                )}
              </Transition>
            ))}
            <Transition in={isMounted} timeout={400}>
              {(state) => (
                <Button
                  className={`transition duration-500 ease-in-out ${fadeDownStyles[state]}`}
                  size='sm'
                >
                  Currículum
                </Button>
              )}
            </Transition>
          </ul>
        </nav>
        <Drawer />
      </header>
    </>
  );
};

export default Navbar;
