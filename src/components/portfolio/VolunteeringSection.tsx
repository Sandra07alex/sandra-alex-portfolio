import { Users, Calendar, Heart, User } from "lucide-react";
import RevealSection from "./RevealSection";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Volunteering", value: "4+", icon: User },
  { label: "Communities", value: "10+", icon: Users },
  { label: "Events Organized", value: "50+", icon: Calendar },
  { label: "Classmates Represented", value: "72", icon: Heart },
];

const VolunteeringSection = () => {
  return (
    <section className="px-6 py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              {/* Label */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
                  ( 03 — Volunteering )
                </span>
                <div className="mt-2 w-8 h-0.5 bg-accent-blue/30" />
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black tracking-tight leading-[1.1]">
                Building Communities,<br />
                <span className="text-accent-blue">Making Impact.</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                From representing classmates to organizing community events and supporting student groups, these experiences taught me the value of service, coordination, and care.
              </p>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col items-start p-6 ${
                    index < 2 ? "border-b border-border/60" : ""
                  } ${index % 2 === 0 ? "border-r border-border/60" : ""}`}
                >
                  {/* Icon in light blue circle */}
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-blue/10 text-accent-blue mb-4">
                    <stat.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  {/* Value */}
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default VolunteeringSection;
