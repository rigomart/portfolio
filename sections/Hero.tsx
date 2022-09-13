import { LinkButton } from 'components';
import { useMounted } from 'hooks';
import { fadeUpStyles } from 'utils';
import { Transition } from 'react-transition-group';

const Hero = () => {
  const { isMounted } = useMounted();

  const one = (
    <h1 className="text-primary-200 font-mono-title font-medium text-sm sm:text-base mb-5">
      Welcome, my name is
    </h1>
  );
  const two = (
    <h2 className="font-title font-semibold text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-7xl mb-4">
      Miguel Rodriguez.
    </h2>
  );
  const three = (
    <h3 className="text-3xl text-primary-200 font-body1 font-semibold leading-none text-[9vw] sm:text-[8vw] md:text-[6vw] lg:text-6xl mb-5">
      I build things for the web.
    </h3>
  );
  const four = (
    <>
      <p className="text-slate-400 mb-12 font-body2 leading-relaxed text-lg">
        I am a software developer experienced in web development technologies, cloud
        services, and, in the near future, mobile technologies. Currently, I am a
        software engineering student building a path towards producing technologies
        that would change the way people live.
      </p>
      <LinkButton to="mailto:mirdor.dev@gmail.com">Contact Me!</LinkButton>
    </>
  );

  const items = [one, two, three, four];

  return (
    <section className="min-h-[100vh] pb-[16vh] flex flex-col justify-center">
      {items.map((item, index) => (
        <Transition in={isMounted} key={index} timeout={(index + 7) * 100}>
          {(state) => (
            <div
              className={`transition duration-1000 ease-in-out ${fadeUpStyles[state]}`}
              key={index}
            >
              {item}
            </div>
          )}
        </Transition>
      ))}
    </section>
  );
};

export default Hero;
