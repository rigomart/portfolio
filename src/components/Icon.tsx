import {
  ExternalLink,
  Menu,
  Close,
  Folder,
  Github,
  LinkedIn,
  Twitter,
} from "./icons";

const icons = {
  menu: <Menu />,
  close: <Close />,
  github: <Github />,
  extLink: <ExternalLink />,
  folder: <Folder />,
  linkedin: <LinkedIn />,
  twitter: <Twitter />,
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
