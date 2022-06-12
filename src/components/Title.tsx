type Props = {
  num?: string;
  text: string;
};

const Title = ({ num, text }: Props) => {
  return (
    <div className='flex items-center mb-4'>
      {num && (
        <span className='text-md text-ocean-200 font-mono mr-2'>{num}</span>
      )}
      <h2 className='whitespace-nowrap text-2xl sm:text-[4vw] md:text-3xl text-ocean-50 font-title font-medium'>
        {text}
      </h2>
      <div className='ml-4 w-full md:w-64 h-[1px] bg-slate-800' />
    </div>
  );
};

export default Title;
