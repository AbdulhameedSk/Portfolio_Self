"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ text, textClassName }: { text: string; textClassName: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={textClassName}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
