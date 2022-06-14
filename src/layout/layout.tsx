import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-ocean-900 text-gray-100 h-full'>
      <Navbar />
      <main className='pt-20 px-6 sm:px-10 md:px-24 lg:px-40 xl:px-64 max-w-[1600px] mx-auto'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
