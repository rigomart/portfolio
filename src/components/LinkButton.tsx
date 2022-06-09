type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
};

const ButtonLink = ({ children, onClick = () => {}, to }: Props) => {
  return (
    <a
      className='border-2 rounded-md px-8 py-3 font-mono border-ocean-200 text-ocean-200 hover:bg-ocean-700 transition-colors duration-150 ease-linear'
      onClick={onClick}
      href={to}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
