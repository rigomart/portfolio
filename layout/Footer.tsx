import Link from 'next/link';
import { Icon } from 'components';

const Footer = () => {
  return (
    <footer className="py-6 pt-24 flex flex-col items-center justify-center">
      <div className="flex gap-x-8 mb-6">
        <Link href="https://github.com/mirdor" target="_blank">
          <a aria-label="Github">
            <Icon name="github" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mirdordev/" target="_blank">
          <a aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
        </Link>
        <Link href="https://twitter.com/LeuGimrt" target="_blank">
          <a aria-label="Twitter">
            <Icon name="twitter" />
          </a>
        </Link>
      </div>

      <div className="text-center text-[0.75rem] text-cyan-600 font-mono">
        <Link
          className="hover:text-primary-200 transition-colors duration-200 ease-in"
          href="https://github.com/bchiang7/v4"
          target="_blank"
        >
          <a>Original design by Brittany Chiang</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
