const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-base',
};

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Button = ({
  type = 'button',
  children,
  onClick = () => {},
  size = 'md',
  className = '',
}: Props) => {
  return (
    <button
      className={`border-2 rounded-md ${sizes[size]} font-mono border-primary-200 text-primary-200 
      hover:bg-primary-700 transition-colors duration-150 ease-linear ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
