import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";

const projects = [
  {
    title: "IEEE Techsortium Website",
    description:
      "Developed the official event management website for IEEE Techsortium, the flagship technical consortium organized by IEEE Kerala Section in association with IEEE LINK. Built a complete event registration system, implemented a dashboard to track registrations and manage participant data, and designed responsive pages for event schedules, speakers, and program details.",
    stack: ["MERN Stack"],
    role: "Full Stack",
    year: "2025",
    link: "https://techsortium25.ieee-link.org/",
    linkLabel: "Live Website",
  },
  {
    title: "Glaucoma Detection using Deep Learning",
    description:
      "Developed a ResNet-50 based convolutional neural network model to detect glaucoma from retinal fundus images. Utilized RNFL and PPA biomarkers for improved detection. Applied deep learning techniques for medical image analysis. Achieved over 90% classification accuracy.",
    stack: ["Python", "PyTorch", "CNN", "ResNet-50"],
    role: "Research",
    year: "2025",
    link: "#",
    linkLabel: "Research Paper",
  },
  {
    title: "IEEE YESS Website",
    description:
      "Official website for IEEE Yearly Engineering Students Summit. Handled 5,000+ participants with a robust ticket booking and event registration system scaled across India.",
    stack: ["MERN Stack"],
    role: "Full Stack",
    year: "2024",
    link: "https://yess.ieee-link.org",
    linkLabel: "Live Website",
  },
  {
    title: "CourtClick Website",
    description:
      "Built a legal case registration system with a guided user onboarding workflow. Integrated APIs for real-world usage, enabling streamlined legal case management.",
    stack: ["React.js"],
    role: "Frontend",
    year: "2025",
    link: "https://court-click-web.vercel.app",
    linkLabel: "Live Website",
  },
  {
    title: "Stride Designathon Website",
    description:
      "Government project (KDISC Kerala). Official website for Stride Designathon built in collaboration with IEEE Kerala Section, IEEE LINK, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: ["MERN Stack"],
    role: "Platform",
    year: "2024",
    link: "https://stridedesignathon.ieee-link.org",
    linkLabel: "Live Website",
  },
  {
    title: "Is It a Bird — ML Image Classifier",
    description:
      "Created a CNN model for bird species classification trained using Kaggle datasets. Exploring transfer learning and data augmentation techniques for image recognition.",
    stack: ["Python", "CNN", "Jupyter Notebook"],
    role: "ML",
    year: "2024",
    link: "https://github.com/sandra07alex/is-it-a-bird",
    linkLabel: "GitHub",
  },
];

// Muted palette for book spines
const spineTones = [
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

const BOOK_COUNT = spineTones.length;

const ease = [0.25, 0.1, 0.25, 1] as const;

const Projects = () => {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
        {/* Dotted background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground) / 0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top nav */}
        <div className="relative z-10 px-8 md:px-12 pt-10 flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {String(projects.length).padStart(2, "0")} Projects · {projects.length}+ Technologies
          </span>
        </div>

        {/* Bookshelf section */}
        <section className="relative z-10 pt-20 md:pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-8">
            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center justify-center gap-12 mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="text-foreground font-bold">{String(projects.length).padStart(2, "0")}</span>
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground font-bold">6+</span>
                <span>Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground font-bold">4</span>
                <span>Years</span>
              </div>
            </motion.div>

            {/* 3D Bookshelf */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="flex items-center justify-center"
            >
              <div
                className="relative h-[280px] sm:h-[320px] w-full flex items-center justify-center"
                style={{ perspective: "1400px" }}
              >
                <div
                  className="relative"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(6deg) rotateY(-14deg)",
                  }}
                >
                  {spineTones.map((tone, i) => {
                    const spineWidth = 24;
                    const gap = 3;
                    const offset = (i - BOOK_COUNT / 2) * (spineWidth + gap);
                    const heightVariation = [0, 6, -4, 2, 8, -2, 4, 0, -6, 2, 6, -4, 0, 4, -2, 6][i] ?? 0;
                    const bookHeight = 200 + heightVariation;
                    const lean = i % 5 === 0 ? -1.2 : i % 7 === 0 ? 1.2 : 0;

                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-[2px]"
                        style={{
                          width: spineWidth,
                          height: bookHeight,
                          left: offset - spineWidth / 2,
                          top: -bookHeight / 2,
                          background: `linear-gradient(90deg, hsl(0 0% 0% / 0.35) 0%, ${tone} 12%, ${tone} 88%, hsl(0 0% 0% / 0.35) 100%)`,
                          boxShadow:
                            "0 1px 0 hsl(0 0% 100% / 0.08) inset, 0 8px 18px hsl(0 0% 0% / 0.4)",
                          transformStyle: "preserve-3d",
                          transformOrigin: "bottom center",
                        }}
                        animate={{
                          rotateZ: [lean, lean + 0.3, lean],
                          y: [0, -4, 0, 0, 0],
                        }}
                        transition={{
                          rotateZ: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25,
                          },
                          y: {
                            duration: BOOK_COUNT * 0.45,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.18,
                            times: [0, 0.06, 0.12, 0.5, 1],
                          },
                        }}
                      >
                        <div
                          className="absolute left-0 right-0 top-0 h-[3px]"
                          style={{
                            background: "linear-gradient(90deg, hsl(0 0% 92%), hsl(0 0% 78%))",
                          }}
                        />
                        <div
                          className="absolute left-0 right-0 bottom-0 h-[2px]"
                          style={{ background: "hsl(0 0% 5%)" }}
                        />
                        <div
                          className="absolute left-0 right-0"
                          style={{ top: "32%", height: 1, background: "hsl(0 0% 0% / 0.5)" }}
                        />
                        <div
                          className="absolute left-0 right-0"
                          style={{ top: "62%", height: 1, background: "hsl(0 0% 0% / 0.5)" }}
                        />
                        <div
                          className="absolute left-1/2 -translate-x-1/2 rounded-[1px]"
                          style={{
                            top: "44%",
                            width: 7,
                            height: 8,
                            background: "linear-gradient(135deg, hsl(0 0% 95% / 0.7), hsl(0 0% 70% / 0.5))",
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
                      top: 105,
                      width: (24 + 3) * BOOK_COUNT + 40,
                      height: 5,
                      background: "linear-gradient(180deg, hsl(0 0% 12%), hsl(0 0% 4%))",
                      boxShadow: "0 6px 16px hsl(0 0% 0% / 0.5)",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project details — open book style */}
        <section className="relative z-10 px-6 md:px-12 pb-40">
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            {projects.map((p, i) => {
              const isExternal = p.link.startsWith("http");
              const isGithub = p.link.includes("github.com");
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch ${
                    isEven ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Book spine / visual side */}
                  <div
                    className={`hidden md:flex col-span-1 items-stretch ${
                      isEven ? "order-1" : "order-2"
                    }`}
                  >
                    <div
                      className="w-full min-h-full"
                      style={{
                        background: `linear-gradient(180deg, ${spineTones[i * 2] || "hsl(220 25% 45%)"} 0%, ${spineTones[i * 2 + 1] || "hsl(220 30% 35%)"} 100%)`,
                        boxShadow: isEven
                          ? "4px 0 12px hsl(0 0% 0% / 0.3)"
                          : "-4px 0 12px hsl(0 0% 0% / 0.3)",
                      }}
                    />
                  </div>

                  {/* Content — the "open page" */}
                  <div
                    className={`col-span-11 border border-border/40 bg-secondary/20 backdrop-blur-sm ${
                      isEven ? "order-2" : "order-1"
                    }`}
                    style={{ direction: "ltr" }}
                  >
                    <div className="p-8 md:p-10 lg:p-12">
                      {/* Top meta line */}
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          {p.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-3">
                        {p.title}
                      </h2>

                      {/* Role tag */}
                      <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-accent-blue border border-accent-blue/30 px-3 py-1 mb-6">
                        {p.role}
                      </span>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                        {p.description}
                      </p>

                      {/* Stack pills — mini book spines */}
                      <div className="flex items-end gap-1.5 mb-8">
                        {p.stack.map((tech, ti) => {
                          const tone = spineTones[(i * 3 + ti) % spineTones.length];
                          const h = 36 + (ti % 3) * 4;
                          return (
                            <div
                              key={tech}
                              className="relative group cursor-default"
                              style={{ height: h, width: 22 }}
                            >
                              <div
                                className="w-full h-full rounded-[2px]"
                                style={{
                                  background: `linear-gradient(90deg, hsl(0 0% 0% / 0.3) 0%, ${tone} 14%, ${tone} 86%, hsl(0 0% 0% / 0.3) 100%)`,
                                  boxShadow: "0 1px 0 hsl(0 0% 100% / 0.08) inset, 0 4px 8px hsl(0 0% 0% / 0.3)",
                                }}
                              >
                                <div className="absolute left-0 right-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, hsl(0 0% 92%), hsl(0 0% 78%))" }} />
                                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-[1px]" style={{ background: "hsl(0 0% 95% / 0.5)" }} />
                              </div>
                              {/* Tooltip label */}
                              <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/80 bg-background/90 border border-border/50 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Link */}
                      <a
                        href={p.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue hover:text-foreground transition-colors duration-300"
                      >
                        {isGithub ? (
                          <Github className="h-4 w-4" />
                        ) : (
                          <ExternalLink className="h-4 w-4" />
                        )}
                        {p.linkLabel}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border/60 px-8 md:px-12 py-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                End of Archive
              </p>
              <p className="text-2xl md:text-3xl font-light tracking-tight max-w-md">
                More work in progress. Currently building at{" "}
                <span className="text-accent-blue">CourtClick</span> & exploring
                applied ML.
              </p>
            </div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent-blue transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default Projects;
