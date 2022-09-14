import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
};

const ButtonLink = ({ children, onClick = () => {}, to }: Props) => {
  return (
    <Link href={to}>
      <a
        className="border-2 rounded-md px-8 py-3 font-mono border-primary-200 text-primary-200 hover:bg-primary-700 transition-colors duration-150 ease-linear"
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

export default ButtonLink;
