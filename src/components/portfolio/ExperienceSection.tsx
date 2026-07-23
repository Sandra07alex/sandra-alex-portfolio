import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    index: "01",
    status: "Present",
    company: "Velvetek Systems",
    role: "Full-Stack Developer Intern",
    location: "Thrissur, Kerala",
    period: "Jul 2026 — Present",
    points: [
      "Developing a React Native (Expo) mobile application for sales executives to browse, search, and manage product information.",
      "Designed and implemented scalable frontend architecture with reusable components, role-based authentication, and responsive UI.",
      "Integrated Supabase as the backend for authentication, database operations, and real-time data management.",
    ],
    stack: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
  {
    index: "02",
    status: "Completed",
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
    index: "03",
    status: "Legacy",
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

const ExperienceItem = ({ exp, i }: { exp: typeof experiences[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative pt-14 md:pt-20 pb-16 md:pb-24"
    >
      {/* Divider — expands L→R */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left bg-foreground/15 group-hover:bg-accent-blue/60 transition-colors duration-700"
      />

      {/* Ghost number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 md:-top-6 right-0 select-none font-black leading-none tracking-tighter text-[8rem] md:text-[12rem] text-foreground/[0.04] transition-colors duration-700 group-hover:text-accent-blue/[0.07]"
      >
        {exp.index}
      </span>

      {/* Top row: status + date */}
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <motion.span
            className="relative flex h-1.5 w-1.5"
            animate={inView ? { scale: [1, 1.6, 1] } : { scale: 1 }}
            transition={{ duration: 1.8, repeat: inView ? Infinity : 0, ease: "easeInOut" }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-50" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-blue" />
          </motion.span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-accent-blue font-medium">
            {exp.status}
          </span>
        </div>
        <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
          {exp.period}
        </span>
      </div>

      {/* Company — mask reveal */}
      <div className="relative mt-6 overflow-hidden">
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1] text-foreground/85 group-hover:text-foreground transition-colors duration-500"
        >
          {exp.company}
        </motion.h3>
      </div>

      {/* Role + location */}
      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-base md:text-lg text-foreground/80 font-medium">{exp.role}</p>
        <span className="text-muted-foreground/50">·</span>
        <p className="text-sm text-muted-foreground">{exp.location}</p>
        <ArrowUpRight className="ml-1 h-4 w-4 text-muted-foreground/50 transition-all duration-500 group-hover:text-accent-blue group-hover:rotate-45" />
      </div>

      {/* Content: bullets + stack */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16">
        <ul className="space-y-3 max-w-xl">
          {exp.points.map((p, idx) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
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
              transition={{ duration: 0.5, delay: 0.25 + idx * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center px-3 py-1 text-[11px] tracking-wide text-foreground/70 border border-foreground/15 rounded-full transition-colors duration-300 hover:border-accent-blue hover:text-accent-blue"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-16 lg:gap-24">
          {/* LEFT — sticky */}
          <div className="relative">
            <motion.div
              style={{ y: leftY }}
              className="lg:sticky lg:top-32"
            >
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

          {/* RIGHT — scrollable stack */}
          <div className="relative">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.company} exp={exp} i={i} />
            ))}
            {/* closing line */}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="block h-px origin-left bg-foreground/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
