import { Icon } from "@components";
import { fadeStyles } from "@utils";
import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const SideInfo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Transition in={isMounted} timeout={800}>
      {(state) => (
        <>
          {/* Left side info */}
          <div
            className={`fixed bottom-10 left-8 hidden md:flex flex-col gap-y-4
            transition duration-1000 ease-in-out ${fadeStyles[state]}
          `}
          >
            <a
              className='hover:-translate-y-1 transition duration-150 ease-in'
              href=''
              target='_blank'
            >
              <Icon name='github' />
            </a>
            <a
              className='hover:-translate-y-1 transition duration-150 ease-in'
              href=''
              target='_blank'
            >
              <Icon name='linkedin' />
            </a>
            <a
              className='hover:-translate-y-1 transition duration-150 ease-in'
              href=''
              target='_blank'
            >
              <Icon name='twitter' />
            </a>
          </div>

          {/* Right side info */}
          <div
            className={`hidden md:block fixed bottom-10 right-8 transition duration-1000
            ease-in-out ${fadeStyles[state]}
          `}
          >
            <a
              className='font-body1 tracking-wide text-[0.8rem] text-slate-300 
          [writing-mode:vertical-rl] hover:text-ocean-100 hover:-translate-y-1 
          transition duration-150 ease-in'
              href=''
            >
              mirdor.dev@gmail.com
            </a>
          </div>
        </>
      )}
    </Transition>
  );
};

export default SideInfo;
