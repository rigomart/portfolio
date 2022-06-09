type Props = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type = "button", children, onClick = () => {} }: Props) => {
  return (
    <button
      className='border-2 rounded-md px-8 py-3 font-mono border-ocean-200 text-ocean-200 hover:bg-ocean-700 transition-colors duration-150 ease-linear'
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
