import { useState } from 'react';
import { Loader } from 'components';
import Footer from './Footer';
import Navbar from './Navbar';
import SideInfo from './SideInfo';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-dark-900 text-gray-100 h-full relative">
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <SideInfo />
          <main className="pt-16 px-6 sm:px-10 md:px-24 lg:px-40 xl:px-60 max-w-[1480px] mx-auto">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
