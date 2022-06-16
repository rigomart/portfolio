import Logo from "@/logo.svg?component";
import { sectionLinks } from "@utils/constants";
import Drawer from "./Drawer";
import SectionLink from "./SectionLink";
import useShowOnScroll from "../hooks/useShowOnScroll";
import { Button } from "@components";

const Navbar = () => {
  const { show } = useShowOnScroll();

  return (
    <>
      <header
        className={`${
          show ? "" : "-translate-y-16"
        } fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 z-20 
        bg-ocean-900 md:bg-ocean-900/60 md:backdrop-blur-lg flex items-center justify-between h-16`}
      >
        <a href='/'>
          <Logo className='h-12' />
        </a>
        <nav>
          <ul className='hidden sm:flex gap-x-6 items-center'>
            {sectionLinks.map(({ path, title }, index) => (
              <SectionLink
                direction='horizontal'
                index={index}
                path={path}
                title={title}
              />
            ))}
            <Button size='sm'>Currículum</Button>
          </ul>
        </nav>
        <Drawer />
      </header>
    </>
  );
};

export default Navbar;
