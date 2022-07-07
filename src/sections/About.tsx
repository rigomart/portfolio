import { useRef, useEffect } from "react";
import { Title } from "@components";
import { skills, sr } from "@utils";
import myPhoto from "@assets/me.jpg";

const About = () => {
  const aboutRef = useRef<any>(null);

  useEffect(() => {
    sr(aboutRef.current, 200, 0.3);
  }, []);

  return (
    <section ref={aboutRef} id='about' className='py-24'>
      <Title num='01.' text='About Me' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10'>
        <div className='col-span-2'>
          <p className='font-body1 text-slate-400 text-base mb-3 leading-relaxed'>
            Hello! My name is Miguel and I love building software, specially,
            for the web. I started building software before I started my
            software engineering career and fell in love with the creativity and
            logic that goes into software design and programming. That motivated
            my career choice and allowed me to discover one of my hobbies which
            is learning new technologies (especially development) and how they
            work.
            <br />
            <br />
            At present, I am working as a frontend developer in a couple of
            freelance projects. I am open to opportunities that allow me to
            improve my skills in the web development field, specifically, as a
            frontend dev.
            <br />
            <br />
            Here are a few technologies I've been working with recently:
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
              hover:after:bg-ocean-800 after:transition after:duration-200 ease-in-out"
            >
              <img
                className='rounded-md'
                src={myPhoto}
                alt='A photo of myself'
                title="Yes, that's me 😔"
                width='100%'
                height='100%'
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
