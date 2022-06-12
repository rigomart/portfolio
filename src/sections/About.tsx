import { Title } from "@components";
import { skills } from "@utils/constants";
import myPhoto from "@assets/me.jpg";

const About = () => {
  return (
    <div className='py-24'>
      <Title num='01.' text='Sobre mí' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10'>
        <div className='col-span-2'>
          <p className='font-body2 text-slate-400 text-base mb-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            sed tempora deleniti atque? Nesciunt, doloremque? Quidem animi
            aperiam sapiente, nam excepturi magni modi eaque debitis sint
            exercitationem quod incidunt nostrum. <br /> <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Culpa soluta
            voluptatum, illo sequi quis maiores neque eum, at optio temporibus,
            expedita est similique nisi id impedit cum suscipit repellendus sit.
          </p>
          <ul className='grid grid-cols-2 sm:grid-cols-3 font-mono text-sm text-slate-500 gap-y-1'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className="before:content-['▹'] before:mr-2 before:text-ocean-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className='relative flex justify-center items-start mt-10 md:mt-0'>
          <div className='grid place-content-center relative z-0'>
            <picture
              className="max-w-[16rem] after:absolute after:content-[''] after:border-2 after:h-full 
              after:w-full after:border-ocean-300 after:top-4 after:left-4 after:rounded-md 
              after:z-[-1] hover:after:-translate-x-1 hover:after:-translate-y-1 
              hover:after:bg-ocean-800 after:transition after:duration-200 ease-in-out
          "
            >
              <img className='rounded-md' src={myPhoto} alt='Una image de mí' />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
