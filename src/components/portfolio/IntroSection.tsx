import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarImg from "@/assets/avatar.jpg";

const IntroSection = () => {
  return (
    <section id="intro" className="flex items-center justify-center px-6 py-32 md:py-40">
      <div className="max-w-2xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Avatar className="h-20 w-20 shadow-lg ring-2 ring-border">
            <AvatarImage src={avatarImg} alt="Sandra Alex" />
            <AvatarFallback className="text-lg font-medium">SA</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-light"
        >
          I'm a Computer Science student passionate about{" "}
          <span className="font-medium text-accent-blue">artificial intelligence</span> and building
          impactful solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-light"
        >
          I love exploring the edge of technology — turning complex problems into
          elegant, working systems.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
