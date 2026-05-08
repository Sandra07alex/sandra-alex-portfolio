import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";

const projects = [
  {
    num: "01",
    category: "MERN STACK",
    title: "IEEE Techsortium",
    description:
      "Developed the official event management website for IEEE Techsortium, the flagship technical consortium organized by IEEE Kerala Section in association with IEEE LINK. Built a complete event registration system allowing participants to register, track registrations, and manage event data.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://techsortium25.ieee-link.org/",
    github: "#",
    icon: "⚖️",
    spineLabel: "IEEE Techsortium",
    spineSub: "MERN\nSTACK",
    spineIcon: "👥",
  },
  {
    num: "02",
    category: "AI RESEARCH",
    title: "Glaucoma Detection",
    description:
      "Deep learning model for early detection of glaucoma using retinal fundus images. Trained on diverse datasets with high accuracy and explainable AI outputs.",
    stack: ["Python", "PyTorch", "OpenCV", "Scikit-learn"],
    link: "#",
    github: "#",
    icon: "🧠",
    spineLabel: "Glaucoma Detection",
    spineSub: "AI /\nPYTHON",
    spineIcon: "🔬",
  },
  {
    num: "03",
    category: "FULL STACK",
    title: "IEEE YESS Website",
    description:
      "Official platform for IEEE YESS Summit for managing registrations, sessions, speakers, and event engagement for thousands of students.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://yess.ieee-link.org",
    github: "#",
    icon: "🌐",
    spineLabel: "IEEE YESS Website",
    spineSub: "MERN\nSTACK",
    spineIcon: "👥",
  },
  {
    num: "04",
    category: "LEGAL TECH",
    title: "CourtClick",
    description:
      "A legal case registration system that simplifies case intake, client management, hearing scheduling, and document tracking with role-based access and real-world workflow.",
    stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://court-click-web.vercel.app",
    github: "#",
    icon: "⚖️",
    spineLabel: "CourtClick",
    spineSub: "LEGAL\nTECH",
    spineIcon: "⚖️",
  },
  {
    num: "05",
    category: "GOVERNMENT",
    title: "Stride Designathon",
    description:
      "Official website for Stride Designathon — a government project with KDISC Kerala, built in collaboration with IEEE Kerala Section, IEEE LINK, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://stridedesignathon.ieee-link.org",
    github: "#",
    icon: "🏛",
    spineLabel: "Stride Designathon",
    spineSub: "REACT /\nNODE",
    spineIcon: "📊",
  },
  {
    num: "06",
    category: "ML PROJECT",
    title: "Is It a Bird",
    description:
      "CNN model for bird species classification trained using Kaggle datasets. Exploring transfer learning and data augmentation techniques for image recognition.",
    stack: ["Python", "CNN", "Jupyter Notebook"],
    link: "https://github.com/sandra07alex/is-it-a-bird",
    github: "https://github.com/sandra07alex/is-it-a-bird",
    icon: "🐦",
    spineLabel: "Is It a Bird",
    spineSub: "ML /\nPYTHON",
    spineIcon: "🧪",
  },
  {
    num: "07",
    category: "STORYTELLING",
    title: "AI Kerala Stories",
    description:
      "An interactive and responsive storytelling platform visualizing community learning impact across Kerala through animated maps, motion-driven UI, and immersive digital experiences.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://ai-for-everyone-two.vercel.app/",
    github: "https://github.com/Sandra07alex/ai-for-everyone-two",
    icon: "🌐",
    spineLabel: "AI Kerala Stories",
    spineSub: "REACT /\nTS",
    spineIcon: "🗺️",
  },
  {
    num: "08",
    category: "WEB REDESIGN",
    title: "IEEE LINK Kerala Redesign",
    description:
      "A modern redesign concept for the IEEE LINK Kerala website focused on responsive design, improved user experience, and visual consistency aligned with IEEE branding guidelines.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://sandra07alex.github.io/LINK-CAMP-TASK-BY-SANDRA-ALEX/",
    github: "https://github.com/Sandra07alex/LINK-CAMP-TASK-BY-SANDRA-ALEX",
    icon: "🎨",
    spineLabel: "IEEE LINK Redesign",
    spineSub: "HTML /\nCSS",
    spineIcon: "🎨",
  },
  {
    num: "09",
    category: "FUN PROJECT",
    title: "Online Kanniyan",
    description:
      "A playful virtual astrologer platform combining humor, browser-based AI, and interactive hand scanning to generate entertaining \"life spoiler\" predictions with a fun user experience.",
    stack: ["HTML", "CSS", "JavaScript", "TensorFlow.js", "OpenCV.js"],
    link: "https://sandra07alex.github.io/usless_project2/",
    github: "https://github.com/Sandra07alex/usless_project2",
    icon: "🔮",
    spineLabel: "Online Kanniyan",
    spineSub: "JS /\nML",
    spineIcon: "🔮",
  },
  {
    num: "10",
    category: "FRONTEND",
    title: "Lunar Observatory",
    description:
      "A visually immersive frontend project inspired by lunar and space exploration themes, featuring cinematic UI design, responsive layouts, and smooth interactive animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "https://github.com/Sandra07alex/Lunar-Observatory",
    icon: "🌙",
    spineLabel: "Lunar Observatory",
    spineSub: "REACT /\nTAILWIND",
    spineIcon: "🌙",
  },
  {
    num: "11",
    category: "AI / CV",
    title: "Ferok Bridge AI Traffic",
    description:
      "A smart AI-powered traffic management system designed to reduce congestion on Ferok Bridge, Kerala by dynamically controlling traffic signals using real-time vehicle detection and computer vision.",
    stack: ["Python", "OpenCV", "YOLO", "Haar Cascade"],
    link: "#",
    github: "https://github.com/Sandra07alex/smart-signal-ferok-bridge",
    icon: "🚦",
    spineLabel: "Ferok Bridge AI",
    spineSub: "PYTHON /\nCV",
    spineIcon: "🚦",
  },
];

// Book spine colors — muted, professional palette
const spineColors = [
  "hsl(0 0% 82%)",    // light gray
  "hsl(0 0% 68%)",    // medium gray
  "hsl(0 0% 75%)",    // gray
  "hsl(220 30% 42%)", // navy blue
  "hsl(0 0% 55%)",    // darker gray
  "hsl(220 20% 35%)", // dark blue
  "hsl(0 0% 30%)",    // charcoal
  "hsl(0 0% 22%)",    // very dark
];

const ease = [0.25, 0.1, 0.25, 1] as const;

// Small book spine component for project entries
const BookSpine = ({
  num,
  label,
  sub,
  color,
  height = 180,
}: {
  num: string;
  label: string;
  sub: string;
  color: string;
  height?: number;
}) => (
  <div
    className="relative rounded-[3px] flex-shrink-0"
    style={{
      width: 64,
      height,
      background: `linear-gradient(90deg, hsl(0 0% 0% / 0.3) 0%, ${color} 10%, ${color} 90%, hsl(0 0% 0% / 0.2) 100%)`,
      boxShadow:
        "0 2px 0 hsl(0 0% 100% / 0.06) inset, 0 8px 24px hsl(0 0% 0% / 0.35)",
    }}
  >
    {/* Top page edge */}
    <div
      className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[3px]"
      style={{ background: "linear-gradient(90deg, hsl(0 0% 88%), hsl(0 0% 75%))" }}
    />
    {/* Number */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-white/80">
      {num}
    </div>
    {/* Divider line */}
    <div className="absolute left-2 right-2 top-8" style={{ height: 1, background: "hsl(0 0% 100% / 0.15)" }} />
    {/* Vertical title */}
    <div
      className="absolute left-1/2 -translate-x-1/2 font-mono text-[8px] font-bold text-white/90 tracking-wider"
      style={{
        top: "20%",
        bottom: "30%",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {label}
    </div>
    {/* Bottom section */}
    <div className="absolute left-2 right-2 bottom-10" style={{ height: 1, background: "hsl(0 0% 100% / 0.15)" }} />
    <div
      className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[6px] text-white/60 text-center leading-tight uppercase tracking-wider whitespace-pre-line"
    >
      {sub}
    </div>
    {/* Bottom edge */}
    <div
      className="absolute left-0 right-0 bottom-0 h-[2px] rounded-b-[3px]"
      style={{ background: "hsl(0 0% 5%)" }}
    />
  </div>
);

// Shelf bookshelf with all project spines
const SHELF_BOOKS = [
  { label: "IEEE Techsortium", sub: "MERN\nSTACK", num: "01" },
  { label: "Glaucoma Detection", sub: "AI /\nPYTHON", num: "02" },
  { label: "IEEE YESS Website", sub: "MERN\nSTACK", num: "03" },
  { label: "CourtClick", sub: "LEGAL\nTECH", num: "04" },
  { label: "Stride Designathon", sub: "REACT /\nNODE", num: "05" },
  { label: "Is It a Bird", sub: "LLM /\nPYTHON", num: "06" },
  { label: "Portfolio Website", sub: "REACT /\nTAILWIND", num: "07" },
  { label: "Mini Projects", sub: "EXPERI-\nMENTS", num: "08" },
];

const Projects = () => {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* ─── Hero Section ─── */}
        <section className="relative px-6 md:px-12 lg:px-20 pt-10 pb-16">
          {/* Top nav */}
          <div className="flex items-center justify-between mb-16">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
            {/* Left — Text */}
            <div className="pt-4">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
              >
                ( 01 — Project Archive )
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
              >
                Many builds.
                <br />
                <span className="text-accent-blue">Many lessons.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease }}
                className="mt-8 text-base text-muted-foreground font-light leading-relaxed max-w-sm"
              >
                A collection of projects, experiments, and systems I've built across the years.
                Each one shaped the way I think, build and solve problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-10 flex items-center gap-2 text-xs text-muted-foreground"
              >
                <span className="inline-block w-4 h-4 border border-border rounded-sm flex items-center justify-center text-[8px]">↓</span>
                Scroll to explore each project chapter.
              </motion.div>
            </div>

            {/* Right — Stats + Bookshelf */}
            <div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="flex items-center justify-end gap-10 mb-10"
              >
                {[
                  { icon: "📁", value: "08", label: "Projects" },
                  { icon: "</>", value: "6+", label: "Technologies" },
                  { icon: "📅", value: "4", label: "Years of building" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">{s.icon}</span>
                    <span className="font-bold text-foreground">{s.value}</span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* 3D Bookshelf */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease }}
                className="flex justify-center"
              >
                <div
                  className="relative h-[300px] w-full flex items-center justify-center"
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="relative"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(5deg) rotateY(-12deg)",
                    }}
                  >
                    {SHELF_BOOKS.map((book, i) => {
                      const spineW = 48;
                      const gap = 4;
                      const totalW = SHELF_BOOKS.length * (spineW + gap);
                      const offset = i * (spineW + gap) - totalW / 2;
                      const hVar = [0, 8, -4, 12, 4, -2, 6, -6][i] ?? 0;
                      const h = 210 + hVar;
                      const color = spineColors[i % spineColors.length];

                      return (
                        <motion.div
                          key={i}
                          className="absolute rounded-[3px]"
                          style={{
                            width: spineW,
                            height: h,
                            left: offset,
                            top: -h / 2 + 10,
                            background: `linear-gradient(90deg, hsl(0 0% 0% / 0.3) 0%, ${color} 10%, ${color} 90%, hsl(0 0% 0% / 0.2) 100%)`,
                            boxShadow:
                              "0 1px 0 hsl(0 0% 100% / 0.08) inset, 0 8px 20px hsl(0 0% 0% / 0.4)",
                            transformStyle: "preserve-3d",
                            transformOrigin: "bottom center",
                          }}
                          animate={{
                            y: [0, -5, 0, 0, 0],
                          }}
                          transition={{
                            y: {
                              duration: SHELF_BOOKS.length * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                              times: [0, 0.06, 0.12, 0.5, 1],
                            },
                          }}
                        >
                          {/* Top cap */}
                          <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[3px]" style={{ background: "linear-gradient(90deg, hsl(0 0% 90%), hsl(0 0% 76%))" }} />
                          {/* Number */}
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 font-mono text-[8px] font-bold text-white/70">
                            {book.num}
                          </div>
                          {/* Divider */}
                          <div className="absolute left-2 right-2 top-7" style={{ height: 1, background: "hsl(0 0% 100% / 0.12)" }} />
                          {/* Vertical title */}
                          <div
                            className="absolute left-1/2 -translate-x-1/2 font-mono text-[7px] font-bold text-white/85 tracking-wider"
                            style={{
                              top: "16%",
                              bottom: "26%",
                              writingMode: "vertical-rl",
                              textOrientation: "mixed",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                            }}
                          >
                            {book.label}
                          </div>
                          {/* Bottom divider */}
                          <div className="absolute left-2 right-2 bottom-[32px]" style={{ height: 1, background: "hsl(0 0% 100% / 0.12)" }} />
                          {/* Bottom label */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[5px] text-white/50 text-center uppercase tracking-wider whitespace-pre-line leading-tight">
                            {book.sub}
                          </div>
                          {/* Bottom edge */}
                          <div className="absolute left-0 right-0 bottom-0 h-[2px] rounded-b-[3px]" style={{ background: "hsl(0 0% 5%)" }} />
                        </motion.div>
                      );
                    })}

                    {/* Shelf surface */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{
                        top: 115,
                        width: SHELF_BOOKS.length * 52 + 40,
                        height: 6,
                        background: "linear-gradient(180deg, hsl(0 0% 14%), hsl(0 0% 4%))",
                        boxShadow: "0 6px 18px hsl(0 0% 0% / 0.5)",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Project Entries ─── */}
        <section className="relative px-6 md:px-12 lg:px-20 pb-32">
          <div className="max-w-6xl mx-auto">
            {projects.map((p, i) => {
              const isEven = i % 2 === 0;
              const color = spineColors[i % spineColors.length];
              const isGithub = p.github?.includes("github.com");

              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease }}
                  className="border-t border-border/50 py-16 md:py-20"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${isEven ? "" : "md:[direction:rtl]"}`}>
                    {/* Number + Book Spine side */}
                    <div className={`md:col-span-2 flex items-start gap-4 ${isEven ? "" : "[direction:ltr]"}`}>
                      <div className="flex-shrink-0">
                        <span className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                          {p.num}
                        </span>
                        <div className="mt-2 w-8 h-[2px] bg-foreground" />
                      </div>
                    </div>

                    {/* Book spine visual */}
                    <div className={`hidden md:flex md:col-span-2 ${isEven ? "justify-start" : "justify-end [direction:ltr]"}`}>
                      <BookSpine
                        num={p.num}
                        label={p.spineLabel}
                        sub={p.spineSub}
                        color={color}
                        height={200}
                      />
                    </div>

                    {/* Content */}
                    <div className={`md:col-span-8 ${isEven ? "" : "[direction:ltr]"}`}>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-accent-blue font-semibold">
                        {p.category}
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                        {p.title}
                      </h2>
                      <p className="mt-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-lg">
                        {p.description}
                      </p>

                      {/* Tech stack pills */}
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 text-[11px] font-medium text-foreground/80 bg-secondary/40"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60" />
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="mt-6 flex flex-wrap items-center gap-6">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent-blue transition-colors"
                        >
                          View Case Study
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        {isGithub && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            GitHub
                            <Github className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="relative border-t border-border/50 px-8 md:px-12 py-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
                End of Archive
              </p>
              <p className="text-2xl md:text-3xl font-light tracking-tight max-w-md">
                More work in progress. Currently building at{" "}
                <span className="text-accent-blue">CourtClick</span> & exploring applied ML.
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
