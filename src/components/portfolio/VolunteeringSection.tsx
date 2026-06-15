import { Link } from "react-router-dom";
import { ArrowUpRight, Users, Calendar, Heart } from "lucide-react";
import RevealSection from "./RevealSection";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Leadership", value: "4+", icon: Calendar },
  { label: "Communities", value: "7+", icon: Users },
  { label: "Events Organized", value: "30+", icon: Heart },
];

const VolunteeringSection = () => {
  return (
    <section className="px-6 py-32 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          {/* Section header */}
          <div className="mb-16 md:mb-24">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
              ( Beyond Code )
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Building Communities,<br />
              <span className="text-accent-blue">Leading People.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              Stories, people, and purpose.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-28">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent-blue/10 text-accent-blue">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium ml-14">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 max-w-3xl mb-12">
              “If engineering taught me how to build systems,{' '}
              <span className="text-accent-blue font-medium">volunteering taught me how to understand people.</span>”
            </blockquote>

            <Link
              to="/leadership"
              className="group inline-flex items-center gap-3 text-base font-medium text-foreground hover:text-accent-blue transition-colors duration-300"
            >
              <span className="relative">
                Explore my leadership journey
                <span className="absolute -bottom-1 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
              <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover:text-accent-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </RevealSection>
      </div>
    </section>
  );
};

export default VolunteeringSection;