import Link from 'next/link';
import { Icon } from 'components';

const Footer = () => {
  return (
    <footer className="py-6 pt-24 flex flex-col items-center justify-center">
      <div className="flex gap-x-8 mb-6">
        <Link href="https://github.com/mirdor">
          <a target="_blank" aria-label="Github">
            <Icon name="github" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mirdordev/">
          <a aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
        </Link>
        <Link href="https://twitter.com/LeuGimrt">
          <a target="_blank" aria-label="Twitter">
            <Icon name="twitter" />
          </a>
        </Link>
      </div>

      <div className="text-center text-[0.75rem] text-cyan-600 font-mono">
        <Link href="https://github.com/bchiang7/v4">
          <a
            className="transition duration-200 ease-in hover:text-primary-200"
            target="_blank"
          >
            Original design by Brittany Chiang
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
