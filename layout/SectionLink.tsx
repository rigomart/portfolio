import Link from 'next/link';

type Props = {
  direction: 'horizontal' | 'vertical';
  path: string;
  title: string;
  index: number;
  className?: string;
};

const SectionLink = ({ direction, path, title, index, className = '' }: Props) => {
  return (
    <Link href={path} passHref>
      <a className={`font-mono sm:text-sm ${className}`}>
        <div
          className={`flex ${
            direction === 'horizontal'
              ? 'flex-row text-white hover:text-primary-100'
              : 'flex-col text-primary-100 hover:text-primary-200'
          } items-center  `}
        >
          <span
            className={`text-primary-100 text-sm ${
              direction === 'horizontal' ? 'mr-2' : ''
            } `}
          >
            0{index + 1}.
          </span>
          <span>{title}</span>
        </div>
      </a>
    </Link>
  );
};

export default SectionLink;
