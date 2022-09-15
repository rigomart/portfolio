import Image from 'next/image';
import { motion } from 'framer-motion';

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [null, 1, 1, 0], scale: [0.9, 1, 1, 0.8] }}
        transition={{ duration: 2, times: [0, 0.25, 0.75, 1] }}
        onAnimationComplete={onFinish}
      >
        <Image src="/logo.svg" priority height={96} width={96} alt="Logo" />
      </motion.div>
    </div>
  );
};

export default Loader;
