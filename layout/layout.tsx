import Head from 'next/head';
import { useContext, useState } from 'react';

import { Loader } from 'components';
import Footer from './Footer';
import Navbar from './Navbar';
import SideInfo from './SideInfo';
import { UIContext } from 'context';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDrawerOpened } = useContext(UIContext);

  return (
    <div className="bg-dark-900 text-gray-100 h-full relative">
      <Head>
        <title>Miguel Rodriguez | Portfolio</title>
        <meta
          name="description"
          content="I am a software developer experienced in web development, cloud services, and mobile technologies."
        />
      </Head>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <SideInfo />
          <main
            className={`pt-24 md:pt-20 px-6 sm:px-10 md:px-24 lg:px-40 xl:px-60 max-w-[1480px] mx-auto transition duration-300
            ${isDrawerOpened ? 'blur-sm' : ''}
          `}
          >
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
