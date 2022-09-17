import { motion } from 'framer-motion';

import { LinkButton } from 'components';
import { fadeUpSection } from 'utils';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="mb-24 text-center"
      initial="hidden"
      whileInView="visible"
      variants={fadeUpSection}
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      <h3 className="text-base font-mono text-primary-200 mb-5">03. Contact</h3>
      <h2 className="text-3xl font-title font-semibold mb-2">Get In Touch</h2>
      <p className="font-body2 text-slate-400 mb-10 max-w-md mx-auto">
        I am currently looking for job opportunities that allow me to improve my
        skills in web development technologies.
        <br />
        <br />
        If you have any good job proposal in the frontend developer position, please
        let me know. Or, if you have any questions about me, my projects or just want
        to ask me something, feel free to send me an email. I won&apos;t take too
        long to answer.
      </p>
      <LinkButton to="mailto:mirdor.dev@gmail.com">Say Hello!</LinkButton>
    </motion.section>
  );
};

export default Contact;
