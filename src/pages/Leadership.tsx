import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star, Sparkles, Phone, MessageCircle, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import RevealSection from "@/components/portfolio/RevealSection";

import stage from "@/assets/leadership/stage.jpg";
import hackathon from "@/assets/leadership/hackathon.jpg";
import onam from "@/assets/leadership/onam.jpg";
import group from "@/assets/leadership/group.jpg";
import meeting from "@/assets/leadership/meeting.jpg";

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ───────────────────────── scrapbook primitives ───────────────────────── */

const tilt = (deg: number) => ({ transform: `rotate(${deg}deg)` });

const StickyNote = ({
  children,
  rotate = -2,
  tone = "sky",
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  tone?: "sky" | "blue" | "ink" | "paper";
  className?: string;
}) => {
  const tones: Record<string, string> = {
    sky: "bg-[#eaf2fd] text-[#1e3a8a]",
    blue: "bg-[#dbe9fb] text-[#1d4ed8]",
    ink: "bg-[#16223f] text-[#bdd6fb]",
    paper: "bg-[#fbfaf5] text-foreground",
  };
  return (
    <motion.div
      whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={tilt(rotate)}
      className={`relative paper-shadow px-5 py-5 ${tones[tone]} ${className}`}
    >
      <span className="washi" aria-hidden />
      {children}
    </motion.div>
  );
};

const Polaroid = ({
  src,
  caption,
  rotate = 3,
  className = "",
  w = 260,
  h = 195,
}: {
  src: string;
  caption: string;
  rotate?: number;
  className?: string;
  w?: number;
  h?: number;
}) => (
  <motion.figure
    whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    style={tilt(rotate)}
    className={`bg-white p-2.5 pb-1 paper-shadow-lg ${className}`}
  >
    <img
      src={src}
      alt={caption}
      loading="lazy"
      width={w}
      height={h}
      className="block h-auto w-full object-cover"
    />
    <figcaption className="font-hand text-xl leading-tight text-[#1e3a8a] px-1 py-2">
      {caption}
    </figcaption>
  </motion.figure>
);

const BadgeTag = ({
  title,
  period,
  lines,
  rotate = -2,
}: {
  title: string;
  period: string;
  lines: string[];
  rotate?: number;
}) => (
  <motion.div
    whileHover={{ rotate: 0, y: -6 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    style={tilt(rotate)}
    className="relative w-56"
  >
    {/* binder clip */}
    <span className="absolute left-1/2 -top-3 z-10 h-4 w-8 -translate-x-1/2 rounded-sm bg-[#1e293b]" aria-hidden />
    <span className="absolute left-1/2 -top-5 z-0 h-4 w-5 -translate-x-1/2 rounded-t-full border-2 border-[#334155]" aria-hidden />
    <div className="rounded-2xl bg-[#1d4ed8] text-white px-5 pt-6 pb-5 paper-shadow-lg">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{period}</p>
      <h3 className="mt-1 text-xl font-black tracking-tight">{title}</h3>
      <ul className="mt-3 space-y-1.5">
        {lines.map((l) => (
          <li key={l} className="text-[13px] text-white/85 leading-snug pl-3 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-white/80">
            {l}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Lanyard = () => (
  <motion.div
    whileHover={{ rotate: 0, y: -6 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    style={tilt(2)}
    className="relative w-48"
  >
    {/* strap */}
    <div className="mx-auto h-16 w-10 bg-gradient-to-b from-[#1d4ed8] to-[#1e40af] [clip-path:polygon(35%_0,65%_0,80%_100%,20%_100%)]" />
    <div className="-mt-1 mx-auto h-3 w-6 rounded-full border-2 border-[#94a3b8] bg-white/40" />
    <div className="mt-1 rounded-xl bg-[#16223f] text-white px-4 py-5 text-center paper-shadow-lg">
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#9dc1f7]">IEEE</p>
      <p className="text-2xl font-black leading-none mt-1">CAMP '23</p>
      <span className="mt-3 inline-block rounded-md bg-[#1d4ed8] px-3 py-1 text-xs font-semibold tracking-wide">
        VOLUNTEER
      </span>
      <p className="mt-3 text-[11px] text-white/70">150 delegates · 3 days · almost no sleep</p>
    </div>
  </motion.div>
);

const Doodle = ({
  icon: Icon,
  className = "",
  rotate = 0,
}: {
  icon: typeof Heart;
  className?: string;
  rotate?: number;
}) => (
  <Icon
    aria-hidden
    style={tilt(rotate)}
    className={`absolute text-accent-blue/40 pointer-events-none ${className}`}
  />
);

/* ───────────────────────────── page ───────────────────────────── */

const Leadership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        {/* faint dotted board background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.4] [background-image:radial-gradient(hsl(var(--accent-blue)/0.12)_1px,transparent_1px)] [background-size:26px_26px]"
        />

        <div className="relative">
          {/* nav */}
          <div className="px-6 md:px-12 lg:px-20 pt-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          {/* ── HERO ── */}
          <section className="px-6 md:px-12 lg:px-20 pt-12 pb-16 md:pt-16">
            <div className="mx-auto max-w-5xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium"
              >
                ( Beyond Code )
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="mt-5 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.02]"
              >
                Building communities,
                <br />
                <span className="text-accent-blue">leading people.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease }}
                className="mt-8 max-w-2xl font-hand text-2xl sm:text-3xl leading-snug text-[#1e3a8a]"
              >
                If engineering taught me how to build systems, volunteering taught me how to
                understand people.
              </motion.p>

              {/* hero memory cluster */}
              <div className="relative mt-14 flex flex-wrap items-start justify-center gap-8 sm:gap-10">
                <Doodle icon={Sparkles} className="left-2 top-0 h-7 w-7" rotate={-10} />
                <Doodle icon={Heart} className="right-6 bottom-2 h-6 w-6" rotate={12} />

                <Polaroid src={stage} caption="On stage — it was never about the spotlight." rotate={-4} className="w-[230px]" w={230} h={290} />
                <StickyNote rotate={3} tone="sky" className="w-60 self-center">
                  <p className="font-hand text-2xl leading-tight">
                    Four years of saying yes to opportunities.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">
                    Countless classrooms, buses, conference halls and late-night calls — not because
                    it was required, but because I loved bringing people together.
                  </p>
                </StickyNote>
                <Polaroid src={group} caption="The people made all of it worth it." rotate={4} className="w-[250px]" w={250} h={188} />
              </div>
            </div>
          </section>

          {/* ── 01 · Class Representative ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-14">
              <div className="mx-auto max-w-5xl">
                <ChapterHead no="01" title="Class Representative" sub="The role closest to my heart · 2022 – 2025" />
                <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
                  <div className="flex flex-wrap gap-7">
                    <StickyNote rotate={-3} tone="blue" className="w-64">
                      <p className="font-hand text-2xl leading-tight">Representing 72 students.</p>
                      <p className="mt-2 text-sm leading-relaxed">
                        Late-night calls, endless WhatsApp messages, deadlines, attendance, internal
                        marks, team conflicts — keeping everything moving through the daily chaos.
                      </p>
                    </StickyNote>
                    <StickyNote rotate={2} tone="paper" className="w-60 self-end">
                      <p className="font-hand text-xl leading-tight text-[#1e3a8a]">
                        “Probably called our staff advisor more than my own mom.”
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" /> Shahan Miss · outgoing call
                      </p>
                    </StickyNote>
                    <BadgeTag
                      rotate={-2}
                      title="CLASS REP"
                      period="2022 – 2025"
                      lines={["Represented 72 classmates", "Solved problems quietly", "Built a safe space"]}
                    />
                  </div>
                  <div className="flex flex-wrap gap-7 justify-center lg:justify-end">
                    <Polaroid src={onam} caption="Onam — unity in colors & traditions." rotate={4} className="w-[230px]" w={230} h={230} />
                    <StickyNote rotate={-2} tone="ink" className="w-52 self-start">
                      <p className="font-hand text-xl leading-tight">Things we made happen</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>Onam celebrations</li>
                        <li>Christmas activities</li>
                        <li>Iftar gatherings</li>
                        <li>Industrial visits</li>
                      </ul>
                    </StickyNote>
                  </div>
                </div>
              </div>
            </section>
          </RevealSection>

          {/* ── 02 · TinkerHub ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-14">
              <div className="mx-auto max-w-5xl">
                <ChapterHead no="02" title="TinkerHub GECK" sub="Former Campus Lead · learning to build communities · 2024 – 2025" />
                <div className="mt-10 flex flex-wrap items-start gap-8 justify-center">
                  <Doodle icon={Star} className="left-4 top-2 h-6 w-6" rotate={-8} />
                  <Polaroid src={hackathon} caption="Learning by building, failing, trying again." rotate={-3} className="w-[290px]" w={290} h={218} />
                  <StickyNote rotate={3} tone="blue" className="w-64">
                    <p className="font-hand text-2xl leading-tight">Maker culture changed me.</p>
                    <p className="mt-2 text-sm leading-relaxed">
                      There were moments of rejection and uncertainty — but with an amazing team, we
                      built something real.
                    </p>
                  </StickyNote>
                  <div className="self-center rounded-2xl bg-[#16223f] text-white px-6 py-7 paper-shadow-lg" style={tilt(-2)}>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#9dc1f7]">Tink Her Hack</p>
                    <p className="mt-1 text-2xl font-black leading-tight">First women-only<br />hackathon in GECK</p>
                  </div>
                  <BadgeTag
                    rotate={2}
                    title="TINKERHUB"
                    period="Campus Lead"
                    lines={["10+ technical events", "Hackathons & workshops", "Opportunities to explore tech"]}
                  />
                </div>
              </div>
            </section>
          </RevealSection>

          {/* ── 03 · IEEE ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-14">
              <div className="mx-auto max-w-5xl">
                <ChapterHead no="03" title="IEEE" sub="From participant to leader" />
                <div className="mt-10 flex flex-wrap items-start gap-8 justify-center">
                  <Lanyard />
                  <StickyNote rotate={-3} tone="sky" className="w-64 self-center">
                    <p className="font-hand text-2xl leading-tight">From volunteer to webmaster.</p>
                    <p className="mt-2 text-sm leading-relaxed">
                      Women in Tech Coordinator at IEEE SB GECK, then Webmaster for IEEE LINK Kerala
                      Section — behind-the-scenes teamwork mattered as much as the sessions.
                    </p>
                  </StickyNote>
                  <Polaroid src={group} caption="Working with teams across Kerala." rotate={3} className="w-[250px]" w={250} h={188} />
                  <BadgeTag
                    rotate={-2}
                    title="IEEE"
                    period="2022 – 2024"
                    lines={["Volunteer · Web Master", "Women in Tech Coordinator", "3-day camp · 150 delegates"]}
                  />
                </div>
              </div>
            </section>
          </RevealSection>

          {/* ── 04 · MuLearn ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-14">
              <div className="mx-auto max-w-5xl">
                <ChapterHead no="04" title="MuLearn" sub="Growing through mentorship" />
                <div className="mt-10 flex flex-wrap items-start gap-8 justify-center">
                  <Doodle icon={Sparkles} className="right-8 top-0 h-6 w-6" rotate={14} />
                  <StickyNote rotate={3} tone="blue" className="w-64">
                    <p className="font-hand text-2xl leading-tight">From intern to mentor.</p>
                    <p className="mt-2 text-sm leading-relaxed">
                      More than a learning platform — a network of mentors, peers and friends across
                      campuses.
                    </p>
                  </StickyNote>
                  <Polaroid src={meeting} caption="Late-night plans, endless discussions." rotate={-4} className="w-[230px]" w={230} h={290} />
                  <StickyNote rotate={-2} tone="ink" className="w-56 self-center">
                    <p className="font-hand text-xl leading-tight">What I did</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Strengthened MuLearn at GECK</li>
                      <li>Guided juniors through pathways</li>
                      <li>Community builder & mentor</li>
                    </ul>
                  </StickyNote>
                </div>
              </div>
            </section>
          </RevealSection>

          {/* ── 05 · SHE GEC ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-14">
              <div className="mx-auto max-w-5xl">
                <ChapterHead no="05" title="SHE GEC" sub="Chairperson · empowering women through action" />
                <div className="mt-10 flex flex-wrap items-start gap-8 justify-center">
                  <BadgeTag
                    rotate={-3}
                    title="SHE GEC"
                    period="Chairperson"
                    lines={["Women's health awareness", "Self-defense workshops", "Safe spaces to grow"]}
                  />
                  <StickyNote rotate={2} tone="sky" className="w-64 self-center">
                    <p className="font-hand text-2xl leading-tight">People &gt; positions.</p>
                    <p className="mt-2 text-sm leading-relaxed">
                      Technology becomes more impactful when more women are empowered to participate
                      and lead.
                    </p>
                  </StickyNote>
                  <StickyNote rotate={-2} tone="paper" className="w-60">
                    <p className="inline-flex items-center gap-1.5 font-hand text-xl text-[#1e3a8a]">
                      <MessageCircle className="h-4 w-4" /> A junior calls for help.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      That's the best feeling — knowing people felt comfortable reaching out.
                    </p>
                  </StickyNote>
                </div>
              </div>
            </section>
          </RevealSection>

          {/* ── closing quote ── */}
          <RevealSection>
            <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
              <div className="mx-auto max-w-3xl text-center">
                <Quote className="mx-auto h-9 w-9 text-accent-blue/50" aria-hidden />
                <blockquote className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
                  Leadership was never about being the person in front. It was about being the person
                  people could <span className="text-accent-blue">call when they needed help.</span>
                </blockquote>
                <p className="mt-8 font-hand text-2xl text-[#1e3a8a]">
                  I built relationships, memories, and a version of myself that believes people
                  always matter more than positions.
                </p>

                <div className="mt-14">
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to home
                  </Link>
                </div>
              </div>
            </section>
          </RevealSection>
        </div>
      </main>
    </SmoothScroll>
  );
};

const ChapterHead = ({ no, title, sub }: { no: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-4">
    <span className="text-5xl md:text-7xl font-black text-accent-blue/15 leading-none select-none">
      {no}
    </span>
    <div>
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">{title}</h2>
      <p className="mt-2 text-sm text-accent-blue font-medium">{sub}</p>
    </div>
  </div>
);

export default Leadership;
