import { Navbar } from ".";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-ocean-900 text-gray-100 h-full'>
      <Navbar />
      <div className='pt-20 px-6 sm:px-10 container mx-auto'>{children}</div>
    </div>
  );
};

export default Layout;
