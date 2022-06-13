import { ExternalLink } from "./icons";
import CloseIcon from "./icons/CloseIcon";
import GithubIcon from "./icons/GithubIcon";
import MenuIcon from "./icons/MenuIcon";

const icons = {
  menu: <MenuIcon />,
  close: <CloseIcon />,
  github: <GithubIcon />,
  extLink: <ExternalLink />,
};

type Props = {
  name: keyof typeof icons;
};

const Icon = ({ name }: Props) => {
  return (
    <div className='hover:scale-105 transition-transform duration-150 ease-in-out'>
      {icons[name]}
    </div>
  );
};

export default Icon;
