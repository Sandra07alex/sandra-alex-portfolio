import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer",
    description:
      "Deep learning model applying artistic styles to photographs using convolutional neural networks.",
    link: "#",
  },
  {
    title: "Smart Campus Assistant",
    description:
      "AI-powered chatbot helping students navigate campus resources, schedules, and FAQs.",
    link: "#",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description:
      "Real-time analytics dashboard built with React and D3.js for tracking project performance.",
    link: "#",
  },
  {
    title: "Sentiment Analysis API",
    description:
      "REST API performing sentiment analysis on social media text using NLP and transformers.",
    link: "#",
  },
];

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

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: 0.1 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex items-start justify-between gap-6 border-t border-border py-8 transition-colors duration-300 hover:bg-secondary/40 -mx-4 px-4 rounded-sm"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light">
                  {project.description}
                </p>
              </div>
              <span className="mt-1 flex items-center gap-1 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 shrink-0">
                View <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
