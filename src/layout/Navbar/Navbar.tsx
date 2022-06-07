import Logo from "../../logo.svg?component";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <header className='fixed w-full px-4 z-50 bg-ocean-900 flex items-center justify-between'>
      <Logo />
      <Drawer />
    </header>
  );
};

export default Navbar;
