import { motion } from "framer-motion";
import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Velvetek Systems",
    location: "Thrissur, Kerala",
    period: "Jul 2026 — Present",
    status: "4-Month Internship",
    label: "PRESENT",
    points: [
      "Contributed to the end-to-end development of client-focused SaaS products, taking ownership of features from requirement analysis and design to development, testing, deployment, and maintenance.",
      "Designed and developed scalable, secure, and high-performance web and mobile applications while integrating APIs, databases, and authentication systems to deliver production-ready solutions.",
    
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "CourtClick",
    location: "Kochi",
    period: "Jun 2025",
    status: null,
    label: "COMPLETED",
    points: [
      "Developed real-world web applications using Next.js and MongoDB",
      "Improved responsive UI and deployment workflows",
      "Worked in agile development environments",
    ],
  },
  {
    role: "Interest Group Management Intern",
    company: "GTech MuLearn",
    location: "Remote",
    period: "Jun 2024 — Apr 2025",
    status: null,
    label: "LEGACY",
    points: [
      "Led the Artificial Intelligence Interest Group across 100+ campuses",
      "Conducted AI Think Tank sessions and office hours",
      "Managed community learning and task validation",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-archive px-6 py-32 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl w-full text-foreground flex flex-col md:flex-row">

        {/* Sidebar: Fixed Header Section */}
        <div className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--exp-border)] flex flex-col justify-between">
          <RevealSection>
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--exp-muted)] font-medium">
                ( 02 — Experience )
              </span>
              <h2 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                WORK
                <br />
                LOG
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] font-bold text-[var(--exp-muted)] italic">
                Archive Vol. 01
              </p>
            </div>
          </RevealSection>
          <div className="mt-12 hidden md:block">
            <p className="text-xs font-mono-archive leading-relaxed text-[var(--exp-muted)]">
              SYSTEM_STATUS: ACTIVE
              <br />
              BUILD_VERSION: 2.0.4
              <br />
              SANDRA_ALEX // 2026
            </p>
          </div>
        </div>

        {/* Main Content: Archive Entries */}
        <div className="w-full md:w-2/3">
          {experiences.map((exp, i) => (
            <RevealSection key={exp.company} delay={i * 0.12}>
              <motion.article
                whileHover={{ backgroundColor: "var(--exp-hover)" }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group border-b border-[var(--exp-border)] last:border-b-0 p-8 md:p-12 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  {exp.label === "PRESENT" ? (
                    <span className="font-mono-archive text-xs font-bold px-2 py-1 border border-[var(--exp-ink)] rounded flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-60 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                      </span>
                      PRESENT
                    </span>
                  ) : (
                    <span className="font-mono-archive text-xs font-bold text-[var(--exp-muted)] uppercase tracking-wider">
                      {exp.label}
                    </span>
                  )}
                  <span className="font-mono-archive text-sm text-[var(--exp-muted)]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-2">
                  {exp.company.toUpperCase()}
                </h3>
                <p className="text-lg md:text-xl font-bold text-[var(--exp-muted)] mb-6">
                  {exp.role}
                  <span className="font-normal text-[var(--exp-muted)]/70">
                    {" "}
                    · {exp.location}
                  </span>
                </p>

                <ul className="space-y-2.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm md:text-base leading-relaxed text-[var(--exp-muted)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-[var(--exp-muted)]/40"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
