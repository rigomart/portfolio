import { Button } from "@components";

const Contact = () => {
  return (
    <div className='py-24 text-center'>
      <h3 className='text-base font-mono text-ocean-200 mb-5'>
        03. ¿Algún mensaje?
      </h3>
      <h2 className='text-3xl font-title font-semibold mb-2'>Contáctame</h2>
      <p className='font-body2 text-slate-400 mb-10 max-w-md mx-auto'>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <Button>Di hola</Button>
    </div>
  );
};

export default Contact;
