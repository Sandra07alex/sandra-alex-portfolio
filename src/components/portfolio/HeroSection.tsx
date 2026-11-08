import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import careerIllustration from "@/assets/sandra-career-line-art.png";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -50]);
  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >

      <div className="relative z-10 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]"
        >
          I BUILD THINGS
          <br />
          THAT{" "}
          <motion.span
            className="text-accent-blue inline-block cursor-default"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            MATTER.
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-base sm:text-lg text-muted-foreground font-light tracking-wide"
        >
          Sandra Alex — Curious Maker • lifelong learner
         
        </motion.p>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
       
        <ChevronDown className="h-4 w-4 animate-scroll-hint" />
      </motion.a>
    </motion.section>
  );
};

export default HeroSection;
