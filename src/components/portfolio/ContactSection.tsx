import RevealSection from "./RevealSection";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    title: "Email Me",
    value: "sandraalexofficial@gmail.com",
    copyValue: "sandraalexofficial@gmail.com",
    subtitle: "Let's discuss opportunities",
    href: "mailto:sandraalexofficial@gmail.com",
    external: false,
    copyable: true,
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+91 90378 46438",
    copyValue: "+919037846438",
    subtitle: "Available for conversations",
    href: "tel:+919037846438",
    external: false,
    copyable: true,
  },
  {
    icon: Github,
    title: "View My Code",
    value: "github.com/sandra07alex",
    subtitle: "Explore my projects",
    href: "https://github.com/sandra07alex",
    external: true,
    copyable: false,
  },
  {
    icon: Linkedin,
    title: "Connect Professionally",
    value: "linkedin.com/in/sandra07alex",
    subtitle: "Let's grow our network",
    href: "https://linkedin.com/in/sandra07alex",
    external: true,
    copyable: false,
  },
];

const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    text: string,
    key: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <RevealSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Let&apos;s build something meaningful{" "}
            <span className="text-accent-blue">together</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {contactLinks.map(
            (
              { icon: Icon, title, value, copyValue, subtitle, href, external, copyable },
              i
            ) => (
              <RevealSection key={title} delay={i * 0.1}>
                <motion.a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`group relative block h-full overflow-hidden rounded-sm bg-secondary/80 p-6 md:p-7 shadow-xl shadow-black/10 transition-colors duration-500 hover:bg-secondary ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  {/* Tape strip */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 -top-2.5 -translate-x-1/2 h-5 w-14 rounded-sm bg-accent-blue/25 backdrop-blur-sm"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue transition-colors duration-500 group-hover:bg-accent-blue/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-accent-blue tracking-tight">
                        {title}
                      </h3>
                    </div>
                    {external && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 shrink-0 transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground/90 truncate">
                      {value}
                    </p>
                    {copyable && (
                      <button
                        onClick={(e) =>
                          handleCopy(e, copyValue || value, title)
                        }
                        className="ml-auto inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground/60 transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
                        aria-label={`Copy ${title}`}
                      >
                        {copiedKey === title ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {subtitle}
                  </p>
                </motion.a>
              </RevealSection>
            )
          )}
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
