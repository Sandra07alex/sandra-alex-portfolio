import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";

const projects = [
  {
    title: "IEEE Techsortium Website",
    description:
      "Flagship event platform for IEEE Kerala — registrations, live dashboards, and schedules used by thousands of attendees.",
    stack: "MERN Stack",
    year: "2025",
    role: "Full Stack",
    link: "https://techsortium25.ieee-link.org/",
  },
  {
    title: "Glaucoma Detection",
    description:
      "ResNet-50 CNN trained on retinal fundus images using RNFL and PPA biomarkers, achieving 90%+ diagnostic accuracy.",
    stack: "Python · PyTorch",
    year: "2025",
    role: "Research",
    link: "#",
  },
  {
    title: "IEEE YESS Website",
    description:
      "Ticketing and registration platform for the Yearly Engineering Students Summit, scaled to 5,000+ participants.",
    stack: "MERN Stack",
    year: "2024",
    role: "Full Stack",
    link: "https://yess.ieee-link.org",
  },
  {
    title: "CourtClick",
    description:
      "Legal case registration system with a guided onboarding workflow and real-world API integrations.",
    stack: "React.js",
    year: "2025",
    role: "Frontend",
    link: "https://court-click-web.vercel.app",
  },
  {
    title: "Stride Designathon",
    description:
      "Government initiative built with KDISC Kerala, IEEE Kerala, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: "Government · KDISC",
    year: "2024",
    role: "Platform",
    link: "https://stridedesignathon.ieee-link.org",
  },
  {
    title: "Is It a Bird",
    description:
      "CNN trained on Kaggle datasets to classify bird species, exploring transfer learning and data augmentation.",
    stack: "Python · CNN",
    year: "2024",
    role: "ML",
    link: "https://github.com/sandra07alex/is-it-a-bird",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SmoothScroll>
      <main className="bg-background min-h-screen">
        {/* Header */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
                >
                  ( Selected Work — {projects.length} )
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-5 text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground"
                >
                  Things I’ve
                  <br />
                  <span className="italic font-light text-accent-blue">built.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="md:col-span-4 text-sm sm:text-base text-muted-foreground font-light leading-relaxed"
              >
                A quiet archive of research models, production platforms, and
                experiments — each one a chapter in learning to build things
                that think.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Editorial list */}
        <section className="px-6 pb-32 md:pb-40">
          <div className="mx-auto max-w-6xl">
            {/* Column header */}
            <div className="hidden md:grid grid-cols-12 gap-6 pb-5 border-b border-border/60 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 font-medium">
              <div className="col-span-1">Index</div>
              <div className="col-span-5">Project</div>
              <div className="col-span-3">Stack</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-1 text-right">Year</div>
            </div>

            <ul>
              {projects.map((project, i) => {
                const isExternal = project.link.startsWith("http");
                const isHovered = hovered === i;
                const isDimmed = hovered !== null && !isHovered;

                return (
                  <motion.li
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.06 * i,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative border-b border-border/60"
                  >
                    <a
                      href={project.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group relative block py-8 md:py-10"
                    >
                      {/* Hover sweep */}
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 -mx-6 bg-secondary/50 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      />

                      <div
                        className={`relative grid grid-cols-12 gap-4 md:gap-6 items-baseline transition-opacity duration-500 ${
                          isDimmed ? "opacity-35" : "opacity-100"
                        }`}
                      >
                        {/* Index */}
                        <div className="col-span-2 md:col-span-1 text-xs font-mono text-muted-foreground/80 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        {/* Title + arrow */}
                        <div className="col-span-10 md:col-span-5 flex items-baseline gap-3">
                          <motion.h2
                            animate={{ x: isHovered ? 8 : 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-500 ${
                              isHovered ? "text-accent-blue" : "text-foreground"
                            }`}
                          >
                            {project.title}
                          </motion.h2>
                          <motion.span
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              x: isHovered ? 0 : -6,
                              y: isHovered ? 0 : 6,
                            }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-accent-blue"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </motion.span>
                        </div>

                        {/* Stack */}
                        <div className="col-span-6 md:col-span-3 text-xs sm:text-sm text-muted-foreground font-light">
                          {project.stack}
                        </div>

                        {/* Role */}
                        <div className="hidden md:block md:col-span-2 text-xs sm:text-sm text-muted-foreground font-light">
                          {project.role}
                        </div>

                        {/* Year */}
                        <div className="col-span-6 md:col-span-1 text-xs sm:text-sm text-muted-foreground/80 font-mono tabular-nums text-right">
                          {project.year}
                        </div>
                      </div>

                      {/* Description — reveals on hover (desktop) */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative overflow-hidden hidden md:block"
                      >
                        <p className="pt-5 pl-[8.33%] max-w-2xl text-sm text-muted-foreground font-light leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>

                      {/* Mobile description — always visible */}
                      <p className="relative mt-3 md:hidden text-sm text-muted-foreground font-light leading-relaxed">
                        {project.description}
                      </p>
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-10 border-t border-border/60"
            >
              <p className="text-sm text-muted-foreground font-light max-w-md leading-relaxed">
                More work in progress. Currently building at{" "}
                <span className="text-foreground">CourtClick</span> & exploring
                applied ML.
              </p>
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent-blue transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to home
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default Projects;
