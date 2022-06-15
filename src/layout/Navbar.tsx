import Logo from "@/logo.svg?component";
import { sectionLinks } from "@utils/constants";
import Drawer from "./Drawer";
import SectionLink from "./SectionLink";
import useShowOnScroll from "../hooks/useShowOnScroll";

const Navbar = () => {
  const { show } = useShowOnScroll();

  return (
    <header
      className={`${
        show ? "" : "-translate-y-20"
      } fixed transition duration-150 ease-in-out w-full px-4 sm:px-14 z-50 bg-ocean-900 flex items-center justify-between h-20`}
    >
      <Logo />
      <nav>
        <ul className='hidden sm:flex gap-x-10'>
          {sectionLinks.map(({ path, title }, index) => (
            <SectionLink
              direction='horizontal'
              index={index}
              path={path}
              title={title}
            />
          ))}
        </ul>
      </nav>
      <Drawer />
    </header>
  );
};

export default Navbar;
