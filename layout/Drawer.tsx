import { useContext, useEffect, useRef } from 'react';
import { Button, Icon } from 'components';
import { useClickAway } from 'hooks';
import { sectionLinks } from 'utils';
import SectionLink from './SectionLink';
import { UIContext } from 'context';

const Drawer = () => {
  const { isDrawerOpened, toggleDrawer } = useContext(UIContext);
  const drawerRef = useRef<any>(null);
  useClickAway(drawerRef, () => toggleDrawer(false));

  useEffect(() => {
    if (isDrawerOpened) document.body.style.overflow = 'hidden';
    if (!isDrawerOpened) document.body.style.overflow = '';
  }, [isDrawerOpened]);

  return (
    <>
      <button
        onClick={() => toggleDrawer()}
        className="text-primary-300 text-2xl px-1 py-2 block sm:hidden"
        aria-label="Menu"
      >
        <Icon name="menu" />
      </button>

      <aside
        ref={drawerRef}
        className={`z-40 fixed right-0 w-3/4 xs:w-1/2 md:w-72 flex flex-col h-full py-4 px-3 bg-dark-800
         sm:hidden  top-0 transition ease-in-out duration-200 border-l border-primary-800 ${
           isDrawerOpened ? 'translate-x-0' : 'translate-x-full'
         }`}
      >
        <button
          className="z-10 py-2 px-4 self-end"
          onClick={() => toggleDrawer()}
          aria-label="Close Menu"
        >
          <Icon name="close" />
        </button>
        <nav className="flex flex-col justify-center flex-1">
          <ul className="flex flex-col gap-y-10">
            {sectionLinks.map(({ path, title }, index) => (
              <li key={index} onClick={() => toggleDrawer(false)}>
                <SectionLink
                  direction="vertical"
                  index={index}
                  path={path}
                  title={title}
                />
              </li>
            ))}
          </ul>
          {/* <div className="grid place-items-center py-8">
            <Button>Resume</Button>
          </div> */}
        </nav>
      </aside>
    </>
  );
};

export default Drawer;
