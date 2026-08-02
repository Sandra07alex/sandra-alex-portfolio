import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Velvetek Systems",
    role: "Full-Stack Developer Intern",
    location: "Thrissur, Kerala",
    period: "Jul 2026 — Present",
    points: [
      "Building a React Native (Expo) mobile app for sales executives to browse, search, and manage product information.",
      "Designed a scalable frontend architecture with reusable components, role-based auth, and responsive UI.",
      "Integrated Supabase for authentication, database, and real-time data operations.",
    ],
    stack: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
  {
    company: "CourtClick",
    role: "Full Stack Web Developer Intern",
    location: "Kochi",
    period: "Jun 2025",
    points: [
      "Developed real-world web applications using Next.js and MongoDB.",
      "Improved responsive UI patterns and streamlined deployment workflows.",
      "Worked in an agile team, shipping features across weekly iterations.",
    ],
    stack: ["Next.js", "MongoDB", "Tailwind", "Vercel"],
  },
  {
    company: "GTech MuLearn",
    role: "Interest Group Management Intern",
    location: "Remote",
    period: "Jun 2024 — Apr 2025",
    points: [
      "Led the Artificial Intelligence Interest Group across 100+ campuses.",
      "Conducted AI Think Tank sessions and weekly office hours.",
      "Managed community learning pipelines and task validation at scale.",
    ],
    stack: ["Community", "AI/ML", "Mentorship"],
  },
];

const ExperienceItem = ({ exp }: { exp: typeof experiences[number] }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative pt-12 md:pt-16 pb-14 md:pb-20"
    >
      {/* Top row: role/location left, date right */}
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-foreground/85 group-hover:text-foreground transition-colors duration-500"
          >
            {exp.company}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.13, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 text-sm md:text-base text-muted-foreground"
          >
            <span className="text-foreground/80 font-medium">{exp.role}</span>
            <span className="mx-2 text-muted-foreground/40">•</span>
            <span>{exp.location}</span>
          </motion.p>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium pt-2"
        >
          {exp.period}
        </motion.span>
      </div>

      {/* Content: bullets left, stack right */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
        <ul className="space-y-3 max-w-xl">
          {exp.points.map((p, idx) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.2 + idx * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-5 text-sm md:text-[15px] text-muted-foreground leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2.5 before:h-px before:bg-accent-blue/70"
            >
              {p}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap md:flex-col md:items-end gap-2 md:min-w-[140px]">
          {exp.stack.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center px-3 py-1 text-[11px] tracking-wide text-foreground/70 border border-foreground/15 rounded-full transition-colors duration-300 hover:border-accent-blue hover:text-accent-blue"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Divider — expands L→R on hover */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent-blue/60 transition-transform duration-700 ease-out group-hover:scale-x-100"
      />
    </motion.article>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-16 lg:gap-24">
          {/* LEFT — sticky */}
          <div className="relative">
            <motion.div style={{ y: leftY }} className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
              >
                ( 02 — Experience )
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]"
              >
                Where I've
                <br />
                <span className="text-accent-blue">worked.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-sm"
              >
                A short professional journey — internships, teams, and rooms
                where I got to build with people much smarter than me.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent-blue transition-colors duration-500"
              >
                View full journey
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — editorial blocks */}
          <div className="relative">
            {/* top hairline */}
            <span aria-hidden className="block h-px w-full bg-foreground/10" />
            {experiences.map((exp) => (
              <ExperienceItem key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
