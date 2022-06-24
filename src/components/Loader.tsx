import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import Logo from "@/logo.svg?component";
import { loaderAniStyles } from "@utils";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout2 = setTimeout(() => {
      setIsMounted(false);
    }, 1000);

    const timeout1 = setTimeout(() => {
      finishLoading();
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <Transition in={isMounted} timeout={0}>
      {(state) => (
        <div
          className={`w-full h-full fixed flex justify-center items-center
          transition duration-500 ease-in-out ${loaderAniStyles[state]}`}
        >
          <Logo className='h-24' />
        </div>
      )}
    </Transition>
  );
};

export default Loader;
