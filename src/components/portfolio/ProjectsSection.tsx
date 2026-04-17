import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "IEEE Techsortium Website",
    description:
      "Flagship event platform for IEEE Kerala — registrations, live dashboards, and schedules used by thousands of attendees.",
    stack: "MERN Stack",
    link: "https://techsortium25.ieee-link.org/",
  },
  {
    title: "Glaucoma Detection — Deep Learning",
    description:
      "ResNet-50 CNN trained on retinal fundus images using RNFL and PPA biomarkers, achieving 90%+ diagnostic accuracy.",
    stack: "Python · PyTorch",
    link: "#",
  },
  {
    title: "IEEE YESS Website",
    description:
      "Ticketing and registration platform for the Yearly Engineering Students Summit, scaled to 5,000+ participants.",
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
    title: "Stride Designathon",
    description:
      "Government initiative built with KDISC Kerala, IEEE Kerala, APJAKTU, Kerala Startup Mission, and Kudumbashree.",
    stack: "Government · KDISC",
    link: "https://stridedesignathon.ieee-link.org",
  },
  {
    title: "Is It a Bird — Image Classifier",
    description:
      "CNN trained on Kaggle datasets to classify bird species, exploring transfer learning and data augmentation.",
    stack: "Python · CNN",
    link: "https://github.com/sandra07alex/is-it-a-bird",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isExternal = project.link.startsWith("http");

  return (
    <motion.a
      href={project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: 0.08 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="group flex h-full flex-col rounded-2xl bg-secondary/60 p-7 sm:p-8 ring-1 ring-border/40 shadow-[0_1px_2px_hsl(var(--foreground)/0.03)] transition-shadow duration-500 ease-out hover:shadow-[0_20px_40px_-20px_hsl(var(--foreground)/0.15)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80 font-medium">
          {project.stack}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent-blue shrink-0" />
      </div>

      <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-foreground tracking-tight transition-colors duration-300 group-hover:text-accent-blue">
        {project.title}
      </h3>

      <p className="mt-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
        {project.description}
      </p>
    </motion.a>
  );
};

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-accent-blue mb-20"
        >
          PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
