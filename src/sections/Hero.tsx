import { LinkButton } from "@components";

const Hero = () => {
  const one = (
    <h1 className='text-ocean-200 font-mono-title font-medium text-base'>
      Bienvenido, mi nombre es
    </h1>
  );
  const two = (
    <h2 className='font-title font-semibold text-[8vw] md:text-[7vw] lg:text-7xl mb-2'>
      Miguel Rodriguez.
    </h2>
  );
  const three = (
    <h3 className='text-3xl text-ocean-200 font-body1 font-semibold leading-none text-[7vw] md:text-[6vw] lg:text-6xl mb-5'>
      Contruyo cosas para la web.
    </h3>
  );
  const four = (
    <>
      <p className='text-slate-400 mb-12 font-body2'>
        Soy un desarrollador de software con especialidad en desarrollo web y,
        muy pronto, en desarrollo móvil. Actualmente, soy estudiante de
        ingeniería de software con miras a que en el futuro pueda dirigir
        proyectos innovadores que cambien la vida de nuestra sociedad para
        mejor.
      </p>
      <LinkButton to='#'>Contáctame</LinkButton>
    </>
  );

  const items = [one, two, three, four];

  return (
    <section className='min-h-[100vh] pb-[16vh] flex flex-col justify-center'>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
