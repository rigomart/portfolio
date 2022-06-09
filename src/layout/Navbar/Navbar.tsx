import Logo from "../../logo.svg?component";
import { sectionLinks } from "../../utils/constants";
import Drawer from "./Drawer";
import SectionLink from "./SectionLink";

const Navbar = () => {
  return (
    <header className='fixed w-full px-4 sm:px-14 z-50 bg-ocean-900 flex items-center justify-between h-20'>
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
