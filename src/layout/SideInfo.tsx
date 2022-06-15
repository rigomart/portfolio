import { Icon } from "@components";

const SideInfo = () => {
  return (
    <>
      {/* Left side info */}
      <div className='fixed bottom-10 left-8 hidden md:flex flex-col gap-y-4'>
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
      <div className='fixed bottom-10 right-8'>
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
  );
};

export default SideInfo;
