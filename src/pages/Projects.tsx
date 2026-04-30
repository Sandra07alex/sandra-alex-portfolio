import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";

const projects = [
  {
    title: "Techsortium",
    subtitle: "IEEE Kerala — Flagship Event Platform",
    description:
      "Registrations, live dashboards, and schedules for thousands of attendees across the IEEE Kerala flagship.",
    stack: "MERN Stack",
    role: "Full Stack",
    year: "2025",
    link: "https://techsortium25.ieee-link.org/",
  },
  {
    title: "Glaucoma",
    subtitle: "Deep Learning Research",
    italic: "Detection",
    description:
      "ResNet-50 CNN trained on retinal fundus images using RNFL and PPA biomarkers — 90%+ diagnostic accuracy.",
    stack: "Python · PyTorch",
    role: "Research",
    year: "2025",
    link: "#",
  },
  {
    title: "YESS",
    subtitle: "Yearly Engineering Students Summit",
    description:
      "Ticketing and registration platform scaled to 5,000+ participants across India.",
    stack: "MERN Stack",
    role: "Full Stack",
    year: "2024",
    link: "https://yess.ieee-link.org",
  },
  {
    title: "CourtClick",
    subtitle: "Legal Case Registration",
    description:
      "Guided onboarding workflow with real-world API integrations for legal case management.",
    stack: "React.js",
    role: "Frontend",
    year: "2025",
    link: "https://court-click-web.vercel.app",
  },
  {
    title: "Stride",
    subtitle: "Designathon — Government of Kerala",
    italic: "Designathon",
    description:
      "Initiative built with KDISC Kerala, IEEE Kerala, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: "MERN Stack",
    role: "Platform",
    year: "2024",
    link: "https://stridedesignathon.ieee-link.org",
  },
  {
    title: "Avian",
    subtitle: "Image Classifier",
    italic: "Classifier",
    description:
      "CNN trained on Kaggle datasets to classify bird species — exploring transfer learning and augmentation.",
    stack: "Python · CNN",
    role: "ML",
    year: "2024",
    link: "https://github.com/sandra07alex/is-it-a-bird",
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

const Projects = () => {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Drafting grid background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--foreground) / 0.035) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 90%)",
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
            INDEX_ARCHIVE / 2024–25
          </span>
        </div>

        {/* Header */}
        <header className="relative z-10 px-8 md:px-12 pt-24 md:pt-32 pb-32">
          <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
            <div className="col-span-12 md:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6"
              >
                ( 06 / Selected Works )
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="text-6xl sm:text-7xl md:text-[8vw] font-light tracking-tighter leading-[0.88]"
              >
                Things <br />
                I’ve <span className="italic font-serif text-accent-blue">built.</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="col-span-12 md:col-start-9 md:col-span-4 self-end"
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                A technical archive of research models, production platforms,
                and experiments — each one a chapter in learning to build things
                that think.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Projects */}
        <section className="relative z-10 px-8 md:px-12 pb-40">
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-y-40 md:gap-y-56">
            {projects.map((p, i) => {
              const isExternal = p.link.startsWith("http");
              const layout = i % 3; // 0: image right, 1: image left small, 2: image right with ghost number

              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease }}
                  className="col-span-12 grid grid-cols-12 gap-6 relative"
                >
                  {/* Index marker */}
                  <div className="col-span-12 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-2">
                    {String(i + 1).padStart(2, "0")} // {String(projects.length).padStart(2, "0")}
                  </div>

                  {layout === 0 && (
                    <>
                      <div className="col-span-12 md:col-span-6">
                        <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.9] mb-8">
                          {p.title}
                          {p.italic && (
                            <>
                              <br />
                              <span className="italic font-serif text-accent-blue">
                                {p.italic}
                              </span>
                            </>
                          )}
                        </h2>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                          {p.subtitle}
                        </p>
                        <p className="max-w-[42ch] text-base text-muted-foreground leading-relaxed mb-12">
                          {p.description}
                        </p>
                        <div className="flex gap-12">
                          <Meta label="Role" value={p.role} />
                          <Meta label="Year" value={p.year} />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-5 relative">
                        <div className="relative border border-border/60 bg-secondary/40 p-3">
                          <div className="aspect-[4/5] w-full bg-muted/60 flex items-center justify-center overflow-hidden">
                            <span className="font-serif italic text-[8vw] md:text-[6vw] text-muted-foreground/30 leading-none">
                              {p.title.charAt(0)}
                            </span>
                          </div>
                          <CornerTicks />
                        </div>
                        <div className="mt-6 border-l border-border pl-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                            Stack_Data
                          </p>
                          <p className="text-sm font-medium uppercase tracking-wide">
                            {p.stack}
                          </p>
                          <ProjectLink link={p.link} external={isExternal} />
                        </div>
                      </div>
                    </>
                  )}

                  {layout === 1 && (
                    <>
                      <div className="col-span-12 md:col-span-3 md:pr-4">
                        <div className="relative border border-border/60 bg-secondary/40 p-3">
                          <div className="aspect-square w-full bg-accent-blue/5 flex items-center justify-center overflow-hidden">
                            <span className="font-serif italic text-[10vw] md:text-[5vw] text-accent-blue/40 leading-none">
                              {p.title.charAt(0)}
                            </span>
                          </div>
                          <CornerTicks />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.9] mb-6">
                          {p.title}
                        </h2>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                          {p.subtitle}
                        </p>
                        <p className="max-w-[45ch] text-base text-muted-foreground leading-relaxed mb-8">
                          {p.description}
                        </p>
                        <div className="grid grid-cols-2 gap-6 border-t border-border pt-6 max-w-md">
                          <Meta label="Stack" value={p.stack} />
                          <Meta label="Role" value={p.role} />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-3 flex flex-col items-end justify-end relative">
                        <span
                          aria-hidden
                          className="font-serif italic text-[18vw] md:text-[10vw] leading-[0.8] text-foreground/[0.04] -mb-4 select-none pointer-events-none"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <ProjectLink link={p.link} external={isExternal} variant="boxed" year={p.year} />
                      </div>
                    </>
                  )}

                  {layout === 2 && (
                    <div className="col-span-12 md:col-span-11">
                      <div className="relative max-w-5xl">
                        <div className="absolute -left-8 top-0 hidden md:block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground origin-top-left -rotate-90 translate-y-32">
                          Structural Detail · {p.year}
                        </div>
                        <div className="grid grid-cols-12 border border-border/70">
                          <div className="col-span-12 md:col-span-8 p-8 md:p-12 md:border-r border-border/70">
                            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-4">
                              {p.title}
                            </h2>
                            <p className="font-serif italic text-xl md:text-2xl text-accent-blue mb-8">
                              {p.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-12 text-[11px] uppercase tracking-[0.2em] font-mono">
                              <Meta label="Year" value={p.year} />
                              <Meta label="Stack" value={p.stack} />
                              <Meta label="Role" value={p.role} />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-4 bg-foreground/95 text-background p-8 flex items-center justify-center min-h-[200px]">
                            <span className="font-serif italic text-7xl text-background/40">
                              {p.title.charAt(0)}
                            </span>
                          </div>
                          <div className="col-span-12 p-6 md:p-8 border-t border-border/70 flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <p className="text-sm text-muted-foreground max-w-2xl">
                              {p.description}
                            </p>
                            <ProjectLink link={p.link} external={isExternal} variant="dot" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border/60 px-8 md:px-12 py-20">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 md:items-end justify-between">
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

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
    <p className="text-muted-foreground/70 mb-1.5">{label}</p>
    <p className="text-foreground tracking-tight">{value}</p>
  </div>
);

const CornerTicks = () => (
  <>
    <span className="absolute top-0 left-0 w-3 h-px bg-accent-blue" />
    <span className="absolute top-0 left-0 w-px h-3 bg-accent-blue" />
    <span className="absolute top-0 right-0 w-3 h-px bg-accent-blue" />
    <span className="absolute top-0 right-0 w-px h-3 bg-accent-blue" />
    <span className="absolute bottom-0 left-0 w-3 h-px bg-accent-blue" />
    <span className="absolute bottom-0 left-0 w-px h-3 bg-accent-blue" />
    <span className="absolute bottom-0 right-0 w-3 h-px bg-accent-blue" />
    <span className="absolute bottom-0 right-0 w-px h-3 bg-accent-blue" />
  </>
);

const ProjectLink = ({
  link,
  external,
  variant = "default",
  year,
}: {
  link: string;
  external: boolean;
  variant?: "default" | "boxed" | "dot";
  year?: string;
}) => {
  const props = external
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : { href: link };

  if (variant === "boxed") {
    return (
      <a
        {...props}
        className="mt-8 inline-flex items-center gap-3 text-accent-blue text-[10px] font-bold tracking-[0.25em] uppercase border border-accent-blue/30 px-5 py-3.5 hover:bg-accent-blue hover:text-accent-blue-foreground transition-all duration-500"
      >
        ARCHIVE_{year ?? "0"}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    );
  }

  if (variant === "dot") {
    return (
      <a
        {...props}
        className="group inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-accent-blue transition-colors"
      >
        Explore Layer
        <span className="size-2 rounded-full bg-accent-blue group-hover:scale-150 transition-transform duration-500" />
      </a>
    );
  }

  return (
    <a
      {...props}
      className="mt-8 inline-flex items-center gap-2 border-b border-accent-blue text-accent-blue text-xs font-semibold tracking-widest uppercase pb-1 hover:gap-4 transition-all duration-500"
    >
      View Component
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
};

export default Projects;
