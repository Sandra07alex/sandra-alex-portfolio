import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const projects = [
  {
    title: "IEEE Techsortium Website",
    description:
      "Official event platform for IEEE Kerala's flagship technical consortium — registrations, dashboards, and schedules.",
    stack: "MERN Stack",
    link: "https://techsortium25.ieee-link.org/",
  },
  {
    title: "Glaucoma Detection using Deep Learning",
    description:
      "ResNet-50 CNN detecting glaucoma from retinal fundus images using RNFL and PPA biomarkers, with 90%+ accuracy.",
    stack: "Python · PyTorch · CNN",
    link: "#",
  },
  {
    title: "IEEE YESS Website",
    description:
      "Official site for the Yearly Engineering Students Summit — ticketing and registration for 5,000+ participants.",
    stack: "MERN Stack",
    link: "https://yess.ieee-link.org",
  },
  {
    title: "CourtClick",
    description:
      "Legal case registration system with a guided onboarding workflow and real-world API integrations.",
    stack: "React.js",
    link: "https://court-click-web.vercel.app",
  },
  {
    title: "Stride Designathon Website",
    description:
      "Government project with KDISC Kerala, IEEE Kerala, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: "Government Project · KDISC",
    link: "https://stridedesignathon.ieee-link.org",
  },
  {
    title: "Is It a Bird — ML Image Classifier",
    description:
      "CNN model for bird species classification trained on Kaggle datasets.",
    stack: "Python · CNN · Jupyter",
    link: "https://github.com/sandra07alex/is-it-a-bird",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isExternal = project.link.startsWith("http");

  // Tilt motion values (in degrees)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: 0.08 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className="group block rounded-2xl bg-secondary/50 p-6 sm:p-7 shadow-[0_1px_2px_hsl(var(--foreground)/0.04)] ring-1 ring-border/60 transition-shadow duration-300 ease-out hover:shadow-[0_20px_40px_-20px_hsl(var(--foreground)/0.18),0_8px_16px_-12px_hsl(var(--foreground)/0.08)]"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap mb-2">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent-blue transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs uppercase tracking-widest text-muted-foreground/70 font-light">
              {project.stack}
            </span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground font-light">
            {project.description}
          </p>
        </div>
        <span className="mt-1 flex items-center gap-1 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1 shrink-0">
          View <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-20"
        >
          SELECTED WORK
        </motion.h2>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
