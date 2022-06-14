import { Icon } from "@components";

const Footer = () => {
  return (
    <footer className='py-6 pt-24 flex flex-col items-center justify-center'>
      <div className='flex gap-x-8 mb-6'>
        <a href='' target='_blank'>
          <Icon name='github' />
        </a>
        <a href='' target='_blank'>
          <Icon name='linkedin' />
        </a>
        <a href='' target='_blank'>
          <Icon name='twitter' />
        </a>
      </div>

      <div className='text-center text-[0.8rem] text-slate-600 font-mono'>
        <a
          className='hover:text-ocean-200 transition-colors duration-200 ease-in'
          href='https://github.com/bchiang7/v4'
          target='_blank'
        >
          Adopted from the Brittany Chiang Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
