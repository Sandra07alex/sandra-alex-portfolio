import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import RevealSection from "@/components/portfolio/RevealSection";

const ease = [0.25, 0.1, 0.25, 1] as const;

const chapters = [
  {
    no: "01",
    emoji: "🎓",
    title: "Class Representative",
    subtitle: "The role closest to my heart",
    period: "2022 – 2025",
    body: [
      "If someone asks me which leadership role I loved the most, the answer is simple: Class Representative. For three years, I had the privilege of representing a class of 72 students.",
      "The role wasn't about attendance sheets or announcements. It was about making sure everything kept moving smoothly within the daily chaos of college life — late-night calls, endless WhatsApp messages, negotiating deadlines with faculty, tracking attendance shortages, helping classmates with internal marks, solving team conflicts, and coordinating academic schedules.",
      "Looking back, I often joke that I probably called our staff advisor, Shahan Miss, more frequently than my own mother. And honestly, I enjoyed every bit of it.",
    ],
    highlights: [
      "Planning Onam celebrations and dress codes",
      "Organizing Christmas activities",
      "Arranging Iftar gatherings",
      "Coordinating industrial visits and tours",
      "Making sure every student felt included",
    ],
  },
  {
    no: "02",
    emoji: "🚀",
    title: "TinkerHub GECK",
    subtitle: "Former Campus Lead · Learning to build communities",
    period: "2024 – 2025",
    body: [
      "TinkerHub changed the way I think. It introduced me to the maker culture — the idea that learning happens best by building, experimenting, failing, and trying again.",
      "My journey wasn't always smooth. There were moments of rejection, uncertainty, and wondering whether I could keep the community moving forward. But together with an amazing team, we built something real.",
      "Some of my favorite memories aren't from the stage but from the people — the conversations, the campus visits, the leadership graduation, and the friendships that continue today.",
    ],
    highlights: [
      "Conducted 10+ technical events and workshops",
      "Organized hackathons and learning programs",
      "Built opportunities for students to explore technology",
      "Hosted Tink Her Hack — the first women-focused hackathon in GECK",
    ],
  },
  {
    no: "03",
    emoji: "🌐",
    title: "IEEE",
    subtitle: "From participant to leader",
    period: "",
    body: [
      "IEEE was one of the first communities that attracted me because of its professionalism and culture. I started as a volunteer attending events and learning from seniors.",
      "Later, I became Women in Tech Coordinator at IEEE SB GECK and eventually contributed at the Kerala Section level as Webmaster for IEEE LINK Kerala Section.",
      "One memory that always stays with me is helping organize a three-day camp for around 150 delegates, where behind-the-scenes teamwork mattered just as much as the sessions themselves.",
    ],
    highlights: [
      "Organizing women-focused technology initiatives",
      "Collaborating with volunteers across Kerala",
      "Managing and maintaining IEEE web platforms",
      "Working with teams from different colleges",
      "Helping organize large-scale student programs",
    ],
  },
  {
    no: "04",
    emoji: "🌱",
    title: "MuLearn",
    subtitle: "Growing through mentorship",
    period: "",
    body: [
      "My MuLearn journey started as an intern. What I found was much more than a learning platform — it was a network of mentors, peers, and friends spread across campuses.",
      "I still remember the excitement of introducing MuLearn to students, speaking with faculty, and seeing more people join the ecosystem.",
    ],
    highlights: [
      "Helped strengthen the MuLearn community at GECK",
      "Supported students in technical learning",
      "Guided juniors through learning pathways",
      "Contributed as a mentor and community builder",
    ],
  },
  {
    no: "05",
    emoji: "👩",
    title: "SHE GEC",
    subtitle: "Chairperson · Empowering women through action",
    period: "",
    body: [
      "SHE GEC was one of the first communities I connected with as a first-year student. From being part of organizing teams to serving as Chairperson, I worked on initiatives that put women's wellbeing and leadership first.",
      "These experiences strengthened my belief that technology becomes more impactful when more women are empowered to participate and lead.",
    ],
    highlights: [
      "Women's health awareness",
      "Menstrual hygiene programs",
      "Self-defense workshops",
      "Leadership opportunities for women",
      "Creating safe spaces for discussion and growth",
    ],
  },
];

const otherInitiatives = [
  "Udyamama project presentations",
  "STRIDE social impact initiatives",
  "Department-level placement preparation programs",
  "CSD Skill Up mentorship activities",
  "Technical festivals and conferences",
  "Community outreach and awareness campaigns",
];

const Leadership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* ─── Top nav ─── */}
        <div className="px-6 md:px-12 lg:px-20 pt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back
          </Link>
        </div>

        {/* ─── Hero ─── */}
        <section className="px-6 md:px-12 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="mx-auto max-w-4xl">
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
              className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.02]"
            >
              Building communities,
              <br />
              <span className="text-accent-blue">leading people.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-10 text-xl sm:text-2xl text-foreground font-light leading-relaxed"
            >
              If engineering taught me how to build systems,{" "}
              <span className="text-accent-blue font-medium">volunteering taught me how to understand people.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              <p>
                Over four years, I spent countless hours in classrooms, meeting rooms, auditoriums,
                buses, conference halls, hackathons, and late-night calls — not because it was
                required, but because I genuinely enjoyed bringing people together.
              </p>
              <p>
                What started as a curious first-year student trying to be part of everything slowly
                became a journey of leadership, community building, and service. I learned that
                leadership is rarely about titles. It's about showing up when things get messy,
                solving problems nobody notices, and making life a little easier for the people
                around you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Chapters / timeline ─── */}
        <section className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* vertical spine */}
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block"
              />

              <div className="space-y-28 md:space-y-36">
                {chapters.map((c) => (
                  <RevealSection key={c.no}>
                    <article className="relative md:pl-16">
                      {/* node + big number */}
                      <span
                        aria-hidden
                        className="absolute left-0 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent-blue ring-4 ring-background hidden md:block"
                      />

                      <div className="flex items-baseline gap-4">
                        <span className="text-5xl md:text-7xl font-black text-border leading-none select-none">
                          {c.no}
                        </span>
                        <span className="text-3xl md:text-4xl" aria-hidden>
                          {c.emoji}
                        </span>
                      </div>

                      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                        {c.title}
                      </h2>
                      <p className="mt-3 text-sm sm:text-base text-accent-blue font-medium">
                        {c.subtitle}
                        {c.period && (
                          <span className="text-muted-foreground/70 font-normal">
                            {" "}
                            · {c.period}
                          </span>
                        )}
                      </p>

                      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
                        <div className="space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                          {c.body.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>

                        <ul className="space-y-3 self-start">
                          {c.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-sm text-foreground/80 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-blue/70"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Other initiatives ─── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <RevealSection>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-2xl" aria-hidden>🤝</span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Other initiatives & contributions
                </h2>
              </div>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                Along the way, I also had the chance to contribute in smaller but meaningful ways.
                Not every idea became a success. Not every event went as planned. But every
                experience taught me something valuable.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {otherInitiatives.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-foreground/80 px-4 py-2 rounded-full ring-1 ring-border hover:ring-accent-blue/50 hover:text-accent-blue transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ─── Closing pull quote ─── */}
        <section className="px-6 md:px-12 lg:px-20 pb-32 md:pb-44">
          <div className="mx-auto max-w-4xl">
            <RevealSection>
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
                ( What leadership means to me )
              </span>
              <blockquote className="mt-8 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                Leadership was never about being the person in front. It was about being the person
                people could <span className="text-accent-blue">call when they needed help.</span>
              </blockquote>

              <div className="mt-10 space-y-5 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                <p>
                  The greatest reward wasn't a title or certificate — it was knowing that classmates,
                  juniors, friends, and teammates felt comfortable reaching out whenever they were
                  stuck.
                </p>
                <p>
                  Through communities, volunteering, and leadership roles, I discovered something
                  unexpected: I didn't just help build events and programs. I built relationships,
                  memories, and a version of myself that believes{" "}
                  <span className="text-foreground font-medium">
                    people always matter more than positions.
                  </span>
                </p>
              </div>

              <div className="mt-16">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to home
                </Link>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
};

export default Leadership;
