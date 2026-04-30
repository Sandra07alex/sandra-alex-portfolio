import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import RevealSection from "./RevealSection";

const certifications = [
  {
    title: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    issued: "Feb 2026",
    credentialId: "I2LD9G469KQD",
    skills: ["Artificial Intelligence (AI)", "Python", "Prompt Engineering"],
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    issued: "Feb 2026",
    credentialId: "680KKO83CHRX",
    skills: ["Artificial Intelligence (AI)"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Amazon",
    issued: "Feb 2026",
    credentialId: "HP2WC0U1DNSS",
    skills: ["Web Development", "Full-Stack Development", "React", "APIs"],
  },
];

const CertificationsSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
              ( 03 — Certifications )
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Things I’ve <span className="text-accent-blue">earned.</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <RevealSection key={cert.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-secondary/40 ring-1 ring-border/40 p-7 md:p-8 transition-colors duration-500 hover:ring-accent-blue/40"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-background/60 ring-1 ring-border/60 flex items-center justify-center group-hover:ring-accent-blue/50 transition-colors duration-500">
                    <Award className="h-4.5 w-4.5 text-accent-blue" strokeWidth={1.75} />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/40 transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-accent-blue font-medium">
                  {cert.issuer}
                </p>

                <div className="mt-5 space-y-1 text-xs text-muted-foreground/80">
                  <p>
                    <span className="text-muted-foreground/50">Issued </span>
                    {cert.issued}
                  </p>
                  <p className="font-mono text-[11px] tracking-wide">
                    <span className="text-muted-foreground/50">ID </span>
                    {cert.credentialId}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/60 ring-1 ring-border/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
