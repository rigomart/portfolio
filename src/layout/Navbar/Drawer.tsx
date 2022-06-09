import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { useClickAway } from "../../hooks";
import { sectionLinks } from "../../utils/constants";
import { Button } from "../../components";
import SectionLink from "./SectionLink";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<any>(null);
  useClickAway(drawerRef, () => setIsOpen(false));

  return (
    <>
      <MenuOutlined
        onClick={() => setIsOpen((value) => !value)}
        className='text-ocean-300 text-2xl px-4 py-2 block sm:hidden'
      />

      <div
        className={`w-full block sm:hidden h-full fixed right-0 top-0 z-50 transition ease-in-out duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={drawerRef}
          className='z-40 absolute right-0 w-3/4 sm:w-1/2 md:w-72 flex flex-col overflow-y-auto h-full py-4 px-3 bg-ocean-800'
        >
          <button
            className='z-10 mt-3 mb-4 px-2 self-end'
            onClick={() => setIsOpen((value) => !value)}
          >
            <CloseOutlined className='text-ocean-300 text-xl px-4 py-2 pt-0' />
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
        </div>
      </div>
    </>
  );
};

export default Drawer;
