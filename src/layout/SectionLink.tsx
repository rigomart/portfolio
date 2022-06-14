type Props = {
  direction: "horizontal" | "vertical";
  path: string;
  title: string;
  index: number;
};

const SectionLink = ({ direction, path, title, index }: Props) => {
  return (
    <li className='font-mono text-base'>
      <a
        className={`flex ${
          direction === "horizontal"
            ? "flex-row text-white hover:text-ocean-100"
            : "flex-col text-ocean-100 hover:text-ocean-200"
        } items-center  `}
        href={path}
      >
        <span
          className={`text-ocean-300 text-sm ${
            direction === "horizontal" ? "mr-2" : ""
          } `}
        >
          0{index + 1}.
        </span>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default SectionLink;
