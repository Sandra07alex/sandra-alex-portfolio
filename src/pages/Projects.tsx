import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";

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

const Projects = () => {
  return (
    <SmoothScroll>
      <main className="bg-background min-h-screen">
        <section className="px-6 pt-32 pb-20 md:pt-40">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
            >
              ( All Work )
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-accent-blue"
            >
              Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground font-light leading-relaxed"
            >
              A collection of things I’ve built — from research models to
              production platforms.
            </motion.p>
          </div>
        </section>

        <section className="px-6 pb-32 md:pb-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => {
                const isExternal = project.link.startsWith("http");
                return (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.08 * i,
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
              })}
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default Projects;
