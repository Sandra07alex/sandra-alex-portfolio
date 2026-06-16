import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import RevealSection from "./RevealSection";

const certifications = [
  {
    title: "AI Python for Beginners",
    issuer: "Coursera",
    issued: "Feb 2026",
    credentialId: "I2LD9G469KQD",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/I2LD9G469KQD",
    skills: ["Artificial Intelligence", "Python", "Prompt Engineering"],
  },
  
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    issued: "Feb 2026",
    credentialId: "HP2WC0U1DNSS",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/HP2WC0U1DNSS",
    skills: ["Web Development", "Full-Stack", "React", "APIs"],
  },
  {
    title: "Foundations of Project Management",
    issuer: "Coursera",
    issued: "Jun 2026",
    credentialId: "DLXBVE6I64A7",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/DLXBVE6I64A7",
    skills: ["Project Management", "Planning", "Organization"],
  },
];

const CertificationsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <div className="mb-20">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
              ( 03 — Certifications )
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Things I’ve <span className="text-accent-blue">earned.</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Vertical issuer index */}
          <RevealSection className="lg:col-span-5">
            <ul className="space-y-1">
              {certifications.map((cert, i) => {
                const isActive = active === i;
                return (
                  <li key={cert.title}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="w-full text-left py-5 group relative"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className="text-xs font-mono text-muted-foreground/50 tracking-wider w-6 shrink-0">
                          0{i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            animate={{
                              x: isActive ? 6 : 0,
                              color: isActive
                                ? "hsl(var(--foreground))"
                                : "hsl(var(--muted-foreground) / 0.55)",
                            }}
                            transition={{
                              duration: 0.6,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="text-2xl md:text-4xl font-black tracking-tight leading-[1.1]"
                          >
                            {cert.title}
                          </motion.h3>
                          <motion.div
                            animate={{ scaleX: isActive ? 1 : 0 }}
                            transition={{
                              duration: 0.6,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                            style={{ originX: 0 }}
                            className="mt-3 h-px bg-accent-blue origin-left"
                          />
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </RevealSection>

          {/* RIGHT — Detail panel */}
          <RevealSection className="lg:col-span-7" delay={0.15}>
            <a
              href={certifications[active].certificateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Coursera certificate for ${certifications[active].title}`}
              className="block lg:sticky lg:top-32 rounded-3xl border border-border/60 bg-secondary/20 p-6 md:p-8 shadow-[0_1px_0_rgba(255,255,255,0.02)] cursor-pointer transition-all hover:bg-secondary/30 hover:border-accent-blue/50"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative"
                >
                  {/* Issuer mark */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Issued by
                    </span>
                  </div>

                  <p className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-none">
                    {certifications[active].issuer}
                  </p>

                  {/* Meta grid */}
                  <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 border-t border-border/50 pt-10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-2">
                        Issued
                      </p>
                      <p className="text-base text-foreground font-medium">
                        {certifications[active].issued}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-2">
                        Credential ID
                      </p>
                      <p className="text-sm text-foreground font-mono tracking-wide break-all">
                        {certifications[active].credentialId}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-3">
                        Skills
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {certifications[active].skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: idx * 0.06,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="text-sm text-foreground"
                          >
                            {skill}
                            {idx < certifications[active].skills.length - 1 && (
                              <span className="ml-5 text-muted-foreground/30">
                                /
                              </span>
                            )}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Big faded index */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-4 right-0 text-[7rem] md:text-[9rem] font-black leading-none text-muted-foreground/[0.06] select-none"
                  >
                    0{active + 1}
                  </span>
                </motion.div>
              </AnimatePresence>
            </a>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
