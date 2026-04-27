import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for the visual side
  const visualY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Orbiting / floating shapes parallax depths
  const ring1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const ring2Rotate = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const ring3Rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-32 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Narrative */}
          <motion.div style={{ y: textY }} className="relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
            >
              ( 01 — Projects )
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
            >
              Four years.
              <br />
              <span className="text-accent-blue">Many ideas</span>
              <br />
              shipped.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md"
            >
              <p>
                From deep-learning models that read retinal scans to event platforms
                serving thousands of students — every project taught me how to build
                things that work in the real world.
              </p>
              <p>
                I’ve led teams, shipped under deadlines, and learned that great
                software is rarely solo work. It’s collaboration, iteration, and a
                stubborn obsession with the details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-500 hover:border-accent-blue hover:text-accent-blue hover:gap-4"
              >
                Explore all projects
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Animated visual */}
          <motion.div
            style={{ y: visualY }}
            className="relative h-[420px] sm:h-[520px] flex items-center justify-center"
          >
            {/* Orbit rings */}
            <motion.div
              style={{ rotate: ring1Rotate }}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-foreground/10"
            >
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-blue" />
            </motion.div>

            <motion.div
              style={{ rotate: ring2Rotate }}
              className="absolute w-[230px] h-[230px] sm:w-[310px] sm:h-[310px] rounded-full border border-foreground/15"
            >
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground/60" />
            </motion.div>

            <motion.div
              style={{ rotate: ring3Rotate }}
              className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full border border-foreground/20"
            >
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-blue/80" />
            </motion.div>

            {/* Pulsing core */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-foreground flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-accent-blue/40"
              />
              <span className="relative text-background text-xs font-bold tracking-widest">
                BUILD
              </span>
            </motion.div>

            {/* Floating tags */}
            {[
              { label: "AI / ML", x: "-58%", y: "-38%", delay: 0 },
              { label: "Full-stack", x: "62%", y: "-30%", delay: 0.6 },
              { label: "IEEE", x: "-65%", y: "32%", delay: 1.2 },
              { label: "Research", x: "60%", y: "40%", delay: 1.8 },
            ].map((tag) => (
              <motion.div
                key={tag.label}
                style={{ left: "50%", top: "50%" }}
                animate={{ y: ["0%", "-8%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tag.delay,
                }}
                className="absolute"
              >
                <div
                  style={{ transform: `translate(${tag.x}, ${tag.y})` }}
                  className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium whitespace-nowrap"
                >
                  {tag.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
