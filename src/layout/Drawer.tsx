import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "@components";
import { useClickAway } from "@hooks";
import { sectionLinks } from "@utils";
import SectionLink from "./SectionLink";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<any>(null);
  useClickAway(drawerRef, () => setIsOpen(false));

  // Disable body scroll when the drawer is opened
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen((value) => !value)}
        className='text-ocean-300 text-2xl px-1 py-2 block sm:hidden'
      >
        <Icon name='menu' />
      </button>

      <aside
        ref={drawerRef}
        className={`z-40 fixed right-0 w-3/4 sm:w-1/2 md:w-72 flex flex-col h-full py-4 px-3 bg-ocean-800 
         sm:hidden  top-0 transition ease-in-out duration-200 ${
           isOpen ? "translate-x-0" : "translate-x-full"
         }`}
      >
        <button
          className='z-10 py-2 px-4 self-end'
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name='close' />
        </button>
        <nav className='flex flex-col justify-center flex-1'>
          <ul className='flex flex-col gap-y-10'>
            {sectionLinks.map(({ path, title }, index) => (
              <SectionLink
                direction='vertical'
                index={index}
                path={path}
                title={title}
              />
            ))}
          </ul>
          <div className='grid place-items-center py-8'>
            <Button>Currículum</Button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Drawer;
