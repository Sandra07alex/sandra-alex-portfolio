import RevealSection from "./RevealSection";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    title: "Email Me",
    value: "sandraalexofficial@gmail.com",
    subtitle: "Let's discuss opportunities",
    href: "mailto:sandraalexofficial@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 90378 46438",
    subtitle: "Available for conversations",
    href: "tel:+919037846438",
    external: false,
  },
  {
    icon: Github,
    title: "View My Code",
    value: "github.com/sandra07alex",
    subtitle: "Explore my projects",
    href: "https://github.com/sandra07alex",
    external: true,
  },
  {
    icon: Linkedin,
    title: "Connect Professionally",
    value: "linkedin.com/in/sandra07alex",
    subtitle: "Let's grow our network",
    href: "https://linkedin.com/in/sandra07alex",
    external: true,
  },
];

const ContactSection = () => {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Let&apos;s build something meaningful{" "}
            <span className="text-accent-blue">together</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactLinks.map(({ icon: Icon, title, value, subtitle, href, external }, i) => (
            <RevealSection key={title} delay={i * 0.1}>
              <motion.a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative block h-full overflow-hidden rounded-2xl bg-secondary/40 ring-1 ring-border/40 p-7 md:p-8 transition-colors duration-500 hover:ring-accent-blue/40"
              >
                {/* Top accent rail */}
                <span
                  aria-hidden
                  className="absolute left-7 right-7 top-0 h-px bg-border/60 group-hover:bg-accent-blue/60 transition-colors duration-500"
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue transition-colors duration-500 group-hover:bg-accent-blue/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground tracking-tight">
                      {title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 shrink-0 transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-5 text-sm font-medium text-foreground/90 truncate">
                  {value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {subtitle}
                </p>
              </motion.a>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.45}>
          <footer className="group mt-20 border-t border-border/50 pt-8 sm:pt-10 text-center">
            <p className="translate-y-2 opacity-0 text-sm font-serif italic tracking-wide text-muted-foreground/75 leading-relaxed transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Looking for footer? It’s 2026.
            </p>
          </footer>
        </RevealSection>
      </div>
    </section>
  );
};

export default ContactSection;
