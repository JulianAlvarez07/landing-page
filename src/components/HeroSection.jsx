import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Virtual build tools
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text inline-block"
          >
            for developers
          </motion.span>
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <motion.p
          className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </motion.p>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="flex flex-col sm:flex-row justify-center my-10 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("start")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-500 to-green-800 py-3 px-6 rounded-md inline-block text-center hover:opacity-90 transition-opacity relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Start for free</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="py-3 px-6 rounded-md border inline-block text-center hover:bg-white/10 transition-colors relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white/5"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Learn more</span>
          </motion.button>
        </div>
      </AnimatedSection>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full p-1"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
