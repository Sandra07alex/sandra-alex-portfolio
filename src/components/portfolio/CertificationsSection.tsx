import { motion } from "framer-motion";
import { useState } from "react";
import RevealSection from "./RevealSection";

const certifications = [
  {
    title: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    issued: "Feb 2026",
    credentialId: "I2LD9G469KQD",
    skills: ["Artificial Intelligence", "Python", "Prompt Engineering"],
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    issued: "Feb 2026",
    credentialId: "680KKO83CHRX",
    skills: ["Artificial Intelligence"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Amazon",
    issued: "Feb 2026",
    credentialId: "HP2WC0U1DNSS",
    skills: ["Web Development", "Full-Stack", "React", "APIs"],
  },
];

const CertificationsSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
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

        <div className="border-t border-border/50">
          {certifications.map((cert, i) => {
            const isActive = active === i;
            return (
              <RevealSection key={cert.title} delay={i * 0.1}>
                <motion.div
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  className="group relative border-b border-border/50 cursor-default"
                >
                  {/* Hover fill sweep */}
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ originY: 1 }}
                    className="absolute inset-0 bg-secondary/50"
                  />

                  <div className="relative grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 px-2 md:px-4">
                    {/* Index */}
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-xs font-mono text-muted-foreground/60 tracking-wider">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Title + issuer */}
                    <div className="col-span-10 md:col-span-5">
                      <motion.h3
                        animate={{ x: isActive ? 8 : 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-xl md:text-3xl font-semibold tracking-tight text-foreground leading-tight"
                      >
                        {cert.title}
                      </motion.h3>
                      <p className="mt-2 text-sm text-accent-blue font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="hidden md:block col-span-3 text-xs text-muted-foreground/80 space-y-1">
                      <p className="uppercase tracking-wider text-muted-foreground/50 text-[10px]">
                        Issued
                      </p>
                      <p>{cert.issued}</p>
                      <p className="font-mono text-[10px] tracking-wide text-muted-foreground/60 pt-1">
                        {cert.credentialId}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="col-span-12 md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full ring-1 ring-border/60 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line that grows on hover */}
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ originX: 0 }}
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent-blue"
                  />
                </motion.div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
