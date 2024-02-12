import { motion } from "framer-motion";

const FadeAnim = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animation: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate="animation"
      initial="initial"
      exit="exit"
      className={`z-20 absolute`}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnim;
