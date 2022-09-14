import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { loaderAniStyles } from 'utils';

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout2 = setTimeout(() => {
      setIsMounted(false);
    }, 1000);

    const timeout1 = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onFinish]);

  return (
    <Transition appear={true} show={isMounted} {...loaderAniStyles}>
      <div
        className={`w-full h-full fixed flex justify-center items-center
          transition duration-500 ease-in-out`}
      >
        <Image src="/logo.svg" priority height={96} width={96} alt="Logo" />
      </div>
    </Transition>
  );
};

export default Loader;
