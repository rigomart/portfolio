import { Loader } from "@components";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideInfo from "./SideInfo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='bg-ocean-900 text-gray-100 h-full relative'>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <SideInfo />
          <main className='pt-16 px-6 sm:px-10 md:px-24 lg:px-40 xl:px-64 max-w-[1600px] mx-auto'>
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
