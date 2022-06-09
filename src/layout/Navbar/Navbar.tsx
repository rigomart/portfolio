import Logo from "../../logo.svg?component";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <header className='fixed w-full px-4 z-50 bg-ocean-900 flex items-center justify-between h-20'>
      <Logo />
      <Drawer />
    </header>
  );
};

export default Navbar;
