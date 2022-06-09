import { Navbar } from ".";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-ocean-900 text-gray-100 h-full'>
      <Navbar />
      <div className='pt-20'>{children}</div>
    </div>
  );
};

export default Layout;
