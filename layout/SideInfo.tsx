import { Transition } from 'react-transition-group';
import { Icon } from 'components';
import { useMounted } from 'hooks';
import { fadeStyles } from 'utils';
import Link from 'next/link';

const SideInfo = () => {
  const { isMounted } = useMounted();

  return <></>;
  // return (
  //   <Transition in={isMounted} timeout={1400}>
  //     {(state) => (
  //       <>
  //         {/* Left side info */}
  //         <div
  //           className={`fixed bottom-10 left-8 hidden md:flex flex-col gap-y-4
  //           transition duration-1000 ease-in-out ${fadeStyles[state]}
  //         `}
  //         >
  //           <Link
  //             className="hover:-translate-y-1 transition duration-150 ease-in"
  //             href="https://github.com/mirdor"
  //             target="_blank"
  //             aria-label="Github"
  //           >
  //             <Icon name="github" />
  //           </Link>
  //           <Link
  //             className="hover:-translate-y-1 transition duration-150 ease-in"
  //             href="https://www.linkedin.com/in/mirdordev/"
  //             target="_blank"
  //             aria-label="LinkedIn"
  //           >
  //             <Icon name="linkedin" />
  //           </Link>
  //           <Link
  //             className="hover:-translate-y-1 transition duration-150 ease-in"
  //             href="https://twitter.com/LeuGimrt"
  //             target="_blank"
  //             aria-label="Twitter"
  //           >
  //             <Icon name="twitter" />
  //           </Link>
  //         </div>

  //         {/* Right side info */}
  //         <div
  //           className={`hidden md:block fixed bottom-10 right-8 transition duration-1000
  //           ease-in-out ${fadeStyles[state]}
  //         `}
  //         >
  //           <a
  //             className="font-body1 tracking-wide text-[0.8rem] text-slate-300
  //         [writing-mode:vertical-rl] hover:text-primary-100 hover:-translate-y-1
  //         transition duration-150 ease-in"
  //             href="mailto:mirdor.dev@gmail.com"
  //           >
  //             mirdor.dev@gmail.com
  //           </a>
  //         </div>
  //       </>
  //     )}
  //   </Transition>
  // );
};

export default SideInfo;
