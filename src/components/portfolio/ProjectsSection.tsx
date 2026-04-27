import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Subtle muted palette — stays within minimal/premium aesthetic
const cardTones = [
  "hsl(0 0% 88%)",
  "hsl(0 0% 75%)",
  "hsl(0 0% 60%)",
  "hsl(220 15% 55%)",
  "hsl(220 25% 45%)",
  "hsl(220 30% 35%)",
  "hsl(0 0% 30%)",
  "hsl(0 0% 22%)",
  "hsl(0 0% 18%)",
  "hsl(220 20% 40%)",
  "hsl(0 0% 50%)",
  "hsl(0 0% 70%)",
  "hsl(0 0% 85%)",
  "hsl(220 15% 60%)",
  "hsl(0 0% 40%)",
  "hsl(0 0% 28%)",
];

const CARD_COUNT = cardTones.length;

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-32 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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
              Many builds.
              <br />
              <span className="text-accent-blue">Many lessons.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md"
            >
              <p>
                Across my four years of college, I’ve been part of all kinds of
                projects — big launches, quiet experiments, late-night hacks.
                Each one gave me a skill that helped me stand out in a room full
                of people.
              </p>
              <p>
                Many are still half-broken, half-finished. But every one of
                them taught me something I couldn’t have learned from a book.
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

          {/* RIGHT — Stacked cards animation (isometric domino flow) */}
          <motion.div
            style={{ y: visualY }}
            className="relative h-[420px] sm:h-[500px] flex items-center justify-center"
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ perspective: "1400px" }}
            >
              <div
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(55deg) rotateZ(-35deg)",
                }}
              >
                {cardTones.map((tone, i) => {
                  const offset = (i - CARD_COUNT / 2) * 14;
                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-[14px]"
                      style={{
                        width: 120,
                        height: 180,
                        left: -60,
                        top: -90,
                        background: `linear-gradient(135deg, ${tone}, hsl(0 0% 10%))`,
                        boxShadow:
                          "0 1px 0 hsl(0 0% 100% / 0.08) inset, 0 8px 20px hsl(0 0% 0% / 0.35)",
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        x: offset,
                        y: 0,
                        z: [0, 12, 0, -12, 0],
                        rotateY: [0, 4, 0, -4, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.12,
                      }}
                    >
                      {/* Card detail strip */}
                      <div
                        className="absolute left-0 right-0 h-5"
                        style={{
                          top: "38%",
                          background:
                            "linear-gradient(90deg, hsl(0 0% 0% / 0.55), hsl(0 0% 0% / 0.25))",
                        }}
                      />
                      {/* Chip */}
                      <div
                        className="absolute rounded-sm"
                        style={{
                          top: 16,
                          right: 16,
                          width: 18,
                          height: 14,
                          background:
                            "linear-gradient(135deg, hsl(0 0% 90%), hsl(0 0% 55%))",
                          opacity: 0.7,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Soft floor glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(var(--accent-blue) / 0.25), transparent 70%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
