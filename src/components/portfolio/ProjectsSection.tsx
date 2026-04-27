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
                  transform: "rotateX(8deg) rotateY(-18deg)",
                }}
              >
                {cardTones.map((tone, i) => {
                  // Books standing in a row — narrow spines side by side
                  const spineWidth = 26;
                  const gap = 4;
                  const offset = (i - CARD_COUNT / 2) * (spineWidth + gap);
                  // Slight height variation so the row feels organic
                  const heightVariation = [0, 6, -4, 2, 8, -2, 4, 0, -6, 2, 6, -4, 0, 4, -2, 6][i] ?? 0;
                  const bookHeight = 230 + heightVariation;
                  // Very gentle lean for a couple of books
                  const lean = i % 5 === 0 ? -1.5 : i % 7 === 0 ? 1.5 : 0;

                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-[3px] cursor-pointer"
                      style={{
                        width: spineWidth,
                        height: bookHeight,
                        left: offset - spineWidth / 2,
                        top: -bookHeight / 2,
                        background: `linear-gradient(90deg, hsl(0 0% 0% / 0.35) 0%, ${tone} 12%, ${tone} 88%, hsl(0 0% 0% / 0.35) 100%)`,
                        boxShadow:
                          "0 1px 0 hsl(0 0% 100% / 0.08) inset, 0 10px 22px hsl(0 0% 0% / 0.4)",
                        transformStyle: "preserve-3d",
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        rotateZ: [lean, lean + 0.4, lean],
                        // Wave ripple — each book lifts gently in sequence
                        y: [0, -6, 0, 0, 0],
                      }}
                      transition={{
                        rotateZ: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.25,
                        },
                        y: {
                          duration: CARD_COUNT * 0.45,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.18,
                          times: [0, 0.06, 0.12, 0.5, 1],
                        },
                      }}
                      whileHover={{
                        y: -14,
                        transition: { duration: 0.4, ease: "easeOut" },
                      }}
                    >
                      {/* Top cap — page edges */}
                      <div
                        className="absolute left-0 right-0 top-0 h-[3px]"
                        style={{
                          background:
                            "linear-gradient(90deg, hsl(0 0% 92%), hsl(0 0% 78%))",
                        }}
                      />
                      {/* Bottom cap */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[2px]"
                        style={{
                          background: "hsl(0 0% 5%)",
                        }}
                      />
                      {/* Title band */}
                      <div
                        className="absolute left-0 right-0"
                        style={{
                          top: "32%",
                          height: 1,
                          background: "hsl(0 0% 0% / 0.5)",
                        }}
                      />
                      <div
                        className="absolute left-0 right-0"
                        style={{
                          top: "62%",
                          height: 1,
                          background: "hsl(0 0% 0% / 0.5)",
                        }}
                      />
                      {/* Tiny title mark */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 rounded-[1px]"
                        style={{
                          top: "44%",
                          width: 8,
                          height: 10,
                          background:
                            "linear-gradient(135deg, hsl(0 0% 95% / 0.7), hsl(0 0% 70% / 0.5))",
                        }}
                      />
                    </motion.div>
                  );
                })}

                {/* Shelf surface */}
                <div
                  aria-hidden
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: 120,
                    width: (26 + 4) * CARD_COUNT + 40,
                    height: 6,
                    background:
                      "linear-gradient(180deg, hsl(0 0% 12%), hsl(0 0% 4%))",
                    boxShadow: "0 8px 20px hsl(0 0% 0% / 0.5)",
                    borderRadius: 2,
                  }}
                />
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
