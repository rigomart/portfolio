import { Button, LinkButton } from "../components";

const Hero = () => {
  const one = (
    <h1 className='text-ocean-200 font-mono font-thin text-base'>
      Bienvenido, mi nombre es
    </h1>
  );
  const two = (
    <h2 className='text-5xl font-title font-semibold'>Miguel Rodriguez.</h2>
  );
  const three = (
    <h3 className='text-3xl text-ocean-200 font-body1 font-semibold'>
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
    <section className='min-h-[100vh] pb-[16vh] flex flex-col justify-center gap-y-4'>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
