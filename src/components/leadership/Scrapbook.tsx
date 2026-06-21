import { useEffect, useRef } from "react";
import mic1 from "@/assets/photos/mic1.jpg";
import mic2 from "@/assets/photos/mic2.jpg";
import teamNight from "@/assets/photos/team-night.jpg";
import ksum from "@/assets/photos/ksum.jpg";
import akcsscSmall from "@/assets/photos/akcssc-small.jpg";
import akcsscGroup from "@/assets/photos/akcssc-group.jpg";
import classOf2024 from "@/assets/photos/class-of-2024.jpg";
import tinkherhack from "@/assets/photos/tinkherhack.jpg";
import ieeePresent from "@/assets/photos/ieee-present.jpg";
import leads from "@/assets/photos/team (1).jpeg"
import present from "@/assets/photos/pres.jpeg"

/* ---------- shared atoms ---------- */

function Tape({
  className = "",
  color = "yellow",
  rotate = 0,
}: {
  className?: string;
  color?: "yellow" | "pink" | "blue";
  rotate?: number;
}) {
  const bg =
    color === "pink"
      ? "var(--color-tape-pink)"
      : color === "blue"
        ? "oklch(0.85 0.06 240 / 0.6)"
        : "var(--color-tape)";
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-20 block ${className}`}
      style={{
        background: bg,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 2px, transparent 2px 6px)",
      }}
    />
  );
}

function Polaroid({
  children,
  caption,
  rotate = -3,
  className = "",
  bg = "linear-gradient(135deg, oklch(0.7 0.1 250), oklch(0.55 0.14 260))",
  tape = true,
  src,
  alt,
}: {
  children?: React.ReactNode;
  caption: string;
  rotate?: number;
  className?: string;
  bg?: string;
  tape?: boolean;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`group relative inline-block select-none transition-transform duration-500 ease-out will-change-transform hover:-translate-y-2 hover:rotate-0 hover:scale-[1.04] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        background: "#fdfdfe",
        padding: "14px 14px 56px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.08), 0 14px 30px -10px rgba(0,0,0,0.18)",
      }}
    >
      {tape && (
        <Tape color="yellow" rotate={-6} className="-top-3 left-1/2 h-5 w-20 -translate-x-1/2" />
      )}
      <div
        className="relative flex h-40 w-48 items-center justify-center overflow-hidden text-white sm:h-44 sm:w-56"
        style={{ background: bg, fontFamily: "var(--font-marker)" }}
      >
        {src ? (
          <img
            src={src}
            alt={alt ?? caption}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          children
        )}
      </div>
      <p
        className="absolute bottom-3 left-0 right-0 px-2 text-center text-[1.15rem] leading-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {caption}
      </p>
    </div>
  );
}

function StickyNote({
  children,
  color = "yellow",
  rotate = 2,
  className = "",
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green";
  rotate?: number;
  className?: string;
}) {
  const bg = {
    yellow: "var(--color-sticky-yellow)",
    pink: "var(--color-sticky-pink)",
    blue: "var(--color-sticky-blue)",
    green: "var(--color-sticky-green)",
  }[color];
  return (
    <div
      className={`relative inline-block p-5 transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 hover:scale-[1.03] ${className}`}
      style={{
        background: bg,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "2px 4px 6px rgba(0,0,0,0.12), inset 0 -20px 30px rgba(0,0,0,0.04)",
        fontFamily: "var(--font-hand)",
        color: "var(--color-ink)",
        minWidth: 180,
        maxWidth: 260,
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 96% 100%, 0 100%)",
      }}
    >
      {children}
    </div>
  );
}

function NotebookCard({
  children,
  className = "",
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        backgroundColor: "#fbfbfd",
        backgroundImage:
          "repeating-linear-gradient(transparent 0 27px, oklch(0.85 0.03 250 / 0.4) 27px 28px), linear-gradient(90deg, transparent 38px, oklch(0.7 0.1 250 / 0.35) 38px 39px, transparent 39px)",
        padding: "28px 28px 28px 52px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 18px 40px -12px rgba(0,0,0,0.18)",
        fontFamily: "var(--font-hand)",
        color: "var(--color-ink)",
      }}
    >
      <div aria-hidden className="absolute left-3 top-3 flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="block h-3 w-3 rounded-full"
            style={{ background: "rgba(0,0,0,0.08)" }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}

function Doodle({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute text-foreground ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

function CurvedArrow({
  className = "",
  d,
  rotate = 0,
}: {
  className?: string;
  d: string;
  rotate?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 120"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <marker
          id={`arr-${d.length}`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd={`url(#arr-${d.length})`}
        strokeDasharray="0"
      />
    </svg>
  );
}

/* ---------- parallax hook ---------- */

const parallaxRegistry = new Set<{
  el: HTMLElement;
  speed: number;
  current: number;
  target: number;
  visible: boolean;
}>();
let parallaxTicking = false;
let parallaxIO: IntersectionObserver | null = null;

function ensureParallaxLoop() {
  if (parallaxTicking) return;
  parallaxTicking = true;
  const tick = () => {
    let active = false;
    parallaxRegistry.forEach((item) => {
      if (!item.visible) return;
      // ease toward target for smoother feel
      const next = item.current + (item.target - item.current) * 0.12;
      if (Math.abs(next - item.current) > 0.05) active = true;
      item.current = next;
      item.el.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0)`;
    });
    if (active || parallaxRegistry.size > 0) {
      requestAnimationFrame(tick);
    } else {
      parallaxTicking = false;
    }
  };
  requestAnimationFrame(tick);
}

function recomputeTargets() {
  const vh = window.innerHeight;
  parallaxRegistry.forEach((item) => {
    const rect = item.el.getBoundingClientRect();
    item.target = (rect.top + rect.height / 2 - vh / 2) * item.speed;
  });
}

function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    el.style.willChange = "transform";
    el.style.backfaceVisibility = "hidden";

    const item = { el, speed, current: 0, target: 0, visible: true };
    parallaxRegistry.add(item);

    if (!parallaxIO) {
      parallaxIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            parallaxRegistry.forEach((it) => {
              if (it.el === entry.target) it.visible = entry.isIntersecting;
            });
          });
          if (entries.some((e) => e.isIntersecting)) ensureParallaxLoop();
        },
        { rootMargin: "200px 0px" },
      );
    }
    parallaxIO.observe(el);

    const onScroll = () => {
      recomputeTargets();
      ensureParallaxLoop();
    };
    const onResize = () => {
      recomputeTargets();
      ensureParallaxLoop();
    };

    // initialize without easing on first paint
    const rect = el.getBoundingClientRect();
    item.target = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
    item.current = item.target;
    el.style.transform = `translate3d(0, ${item.target.toFixed(2)}px, 0)`;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    ensureParallaxLoop();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      parallaxIO?.unobserve(el);
      parallaxRegistry.delete(item);
      el.style.willChange = "";
    };
  }, [speed]);
  return ref;
}

function ParallaxLayer({
  speed,
  children,
  className = "",
}: {
  speed: number;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useParallax<HTMLDivElement>(speed);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---------- page ---------- */

export function Scrapbook() {

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "var(--color-paper)",
        backgroundImage:
          "radial-gradient(oklch(0.5 0.02 250 / 0.06) 1px, transparent 1px), radial-gradient(oklch(0.5 0.02 250 / 0.04) 1px, transparent 1px)",
        backgroundSize: "22px 22px, 11px 11px",
        backgroundPosition: "0 0, 11px 11px",
        color: "var(--color-ink)",
      }}
    >
      {/* section-by-section snap scrolling (desktop only, proximity = non-hijacking) */}
      <style>{`
        @media (min-width: 768px) and (prefers-reduced-motion: no-preference) {
          html { scroll-snap-type: y proximity; scroll-behavior: smooth; }
          .scrap-section { scroll-snap-align: start; scroll-snap-stop: always; }
        }
        .scrap-section { scroll-margin-top: 0; }
        .scrap-divider {
          height: 1px;
          background-image: repeating-linear-gradient(90deg, oklch(0.5 0.02 250 / 0.25) 0 8px, transparent 8px 16px);
        }
      `}</style>

      {/* ============ BACK TO PORTFOLIO ============ */}
      <div className="fixed left-4 top-4 z-50 sm:left-6 sm:top-6">
        <a
          href="/"
          className="group relative inline-flex items-center gap-2 px-4 py-2 transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-0"
          style={{
            transform: "rotate(-2deg)",
            background: "#fdfdfe",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 10px 20px -8px rgba(0,0,0,0.18)",
            fontFamily: "var(--font-marker)",
            color: "var(--color-ink)",
          }}
          aria-label="Back to portfolio"
        >
          <Tape color="blue" rotate={-12} className="-top-2 left-1/2 h-3 w-12 -translate-x-1/2" />
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span>
          <span className="text-lg">back to portfolio</span>
        </a>
      </div>

      {/* subtle watercolor spot */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-32 h-40 w-40 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.06 250 / 0.25), oklch(0.6 0.06 250 / 0) 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* ============ HERO ============ */}
      <section className="scrap-section relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 md:min-h-[100vh]">
        <ParallaxLayer speed={-0.04} className="relative">
          <p className="text-[1.4rem] tracking-wide" style={{ fontFamily: "var(--font-type)" }}>
            chapter 01 — the human side of engineering
          </p>
          <h1
            className="mt-4 text-[clamp(3rem,9vw,7.5rem)] leading-[0.95]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Beyond Code:
            <br />
            <span style={{ color: "var(--color-accent-red)" }}>Building Communities,</span>
            <br />
            Leading People
            <Doodle
              className="-top-2 right-4 text-3xl"
              style={{ fontFamily: "var(--font-marker)" }}
            >
              ❤
            </Doodle>
          </h1>
          <p
            className="mt-8 max-w-xl text-2xl leading-snug"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            If engineering taught me how to build systems, volunteering taught me how to{" "}
            <u>understand people</u>.
          </p>
        </ParallaxLayer>

        {/* floating polaroids */}
        <ParallaxLayer speed={0.05} className="absolute right-4 top-4 hidden md:block">
          <Polaroid
            caption="the class of 2024 ✨"
            rotate={6}
            src={classOf2024}
            alt="Receiving Class of 2024 recognition on stage"
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.09} className="absolute right-6 top-[360px] hidden lg:block">
          <Polaroid
            caption="mic in hand, again"
            rotate={-7}
            src={mic1}
            alt="Speaking on mic at a hackathon"
          />
        </ParallaxLayer>

        <StickyNote
          color="yellow"
          rotate={-4}
          className="absolute left-2 top-10 hidden sm:inline-block"
        >
          <p className="text-lg leading-snug">
            4 years.
            <br />
            countless meetings.
            <br />
            <span className="text-2xl font-bold">zero regrets.</span>
          </p>
        </StickyNote>

        <CurvedArrow
          className="left-[42%] top-[55%] h-20 w-40 hidden md:block"
          d="M10,60 Q100,0 190,50"
          rotate={5}
        />
      </section>

      {/* ============ INTRO NOTEBOOK ============ */}
      <div aria-hidden className="scrap-divider mx-auto my-0 max-w-5xl" />
      <section className="scrap-section mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <ParallaxLayer speed={-0.02}>
          <NotebookCard rotate={-1} className="relative">
            <Tape color="pink" rotate={-8} className="-top-3 left-12 h-5 w-24" />
            <Tape color="blue" rotate={6} className="-top-3 right-16 h-5 w-20" />
            <p className="text-xl leading-relaxed">
              Over four years, I spent countless hours in classrooms, meeting rooms, auditoriums,
              buses, conference halls, hackathons, and late-night calls — not because it was
              required, but because I genuinely enjoyed bringing people together.
            </p>
            <p className="mt-4 text-xl leading-relaxed">
              What started as a curious first-year trying to be part of everything slowly became a
              journey of leadership, community building, and service. I learned that{" "}
              <span
                style={{
                  background: "oklch(0.93 0.06 250 / 0.6)",
                  padding: "0 6px",
                }}
              >
                leadership is rarely about titles.
              </span>{" "}
              It's about showing up when things get messy.
            </p>
          </NotebookCard>
        </ParallaxLayer>
      </section>

      {/* ============ CLASS REP — favorite ============ */}
      <div aria-hidden className="scrap-divider mx-auto max-w-6xl" />
      <section className="scrap-section relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
          <div className="relative">
            <p className="text-2xl" style={{ fontFamily: "var(--font-type)" }}>
              🎓 the role closest to my heart
            </p>
            <h2
              className="mt-2 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Class
              <br />
              Representative
            </h2>
            <p
              className="mt-2 text-2xl"
              style={{ fontFamily: "var(--font-marker)", color: "var(--color-accent-red)" }}
            >
              2022 — 2025 · 72 students · 4 years
            </p>

            <NotebookCard rotate={1} className="mt-8">
              <p className="text-xl leading-relaxed">
                Late-night calls. Endless WhatsApp messages. Negotiating deadlines with faculty.
                Tracking attendance shortages. Solving team conflicts. Coordinating schedules.
              </p>
              <p className="mt-4 text-2xl" style={{ fontFamily: "var(--font-marker)" }}>
                I probably called Shahan Miss more often than my own mother.
                <span className="ml-2">😅</span>
              </p>
            </NotebookCard>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6 md:block md:h-[760px]">
            <ParallaxLayer speed={0.06} className="md:absolute md:left-0 md:top-0">
              <Polaroid
                caption="the core team · post-event glow"
                rotate={-6}
                src={teamNight}
                alt="Team photo after a late event"
              />
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} className="md:absolute md:right-2 md:top-4">
              <Polaroid
                caption="AKCSSC '24 · volunteers"
                rotate={5}
                src={akcsscSmall}
                alt="AKCSSC volunteers smiling for the camera"
              />
            </ParallaxLayer>
            <ParallaxLayer speed={0.04} className="md:absolute md:left-2 md:top-[380px]">
              <Polaroid
                caption="hosting, mic check 1-2"
                rotate={4}
                src={present}
                alt="project presentation"
              />
            </ParallaxLayer>
            <ParallaxLayer speed={0.12} className="md:absolute md:right-0 md:top-[240px]">
              <Polaroid
                caption="KSUM trip · founders' faces"
                rotate={-8}
                src={ksum}
                alt="Outside Kerala Startup Mission"
              />
            </ParallaxLayer>
          </div>
        </div>
      </section>

      {/* ============ COMMUNITIES — scattered scrapbook ============ */}
      <div aria-hidden className="scrap-divider mx-auto max-w-7xl" />
      <section className="scrap-section relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20">
        <div className="mb-16 flex items-end justify-between">
          <h2
            className="text-[clamp(2.5rem,7vw,6rem)] leading-none"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            the communities
            <br />
            <span style={{ color: "var(--color-accent-teal)" }}>that shaped me</span>
          </h2>
          <p className="hidden text-xl md:block" style={{ fontFamily: "var(--font-marker)" }}>
            ↓ ↓ ↓ scroll, drag your eyes around ↓ ↓ ↓
          </p>
        </div>

        {/* TinkerHub */}
        <div className="relative mb-32 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <ParallaxLayer speed={-0.05}>
            <NotebookCard rotate={-2}>
              <p
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                🚀 TinkerHub GECK
              </p>
              <p className="text-lg" style={{ fontFamily: "var(--font-type)" }}>
                Campus Lead · 2024 — 2025
              </p>
              <p className="mt-3 text-xl leading-relaxed">
                TinkerHub changed the way I think. It introduced me to the maker culture — learning
                by building, failing, trying again.
              </p>
              <ul className="mt-4 space-y-2 text-xl">
                <li>✦ 10+ technical events & workshops</li>
                <li>✦ hackathons + learning programs</li>
                <li>
                  ✦{" "}
                  <span
                    style={{
                      background: "oklch(0.9 0.08 255 / 0.5)",
                      padding: "0 4px",
                    }}
                  >
                    Tink Her Hack — GECK's first women-only hackathon
                  </span>
                </li>
              </ul>
            </NotebookCard>
          </ParallaxLayer>

          <div className="relative flex flex-wrap justify-center gap-6 md:block md:h-[420px]">
            <ParallaxLayer speed={0.08} className="md:absolute md:left-4 md:top-0">
              <Polaroid
                caption="Tink Her Hack 3.0 · in the zone"
                rotate={5}
                src={tinkherhack}
                alt="Participants coding at Tink Her Hack 3.0"
              />
            </ParallaxLayer>
            <ParallaxLayer speed={0.04} className="md:absolute md:right-2 md:top-32">
              <Polaroid
                caption=" 36 leads together"
                rotate={-6}
                src={leads}
                alt="On stage receiving recognition"
              />
            </ParallaxLayer>
            <StickyNote
              color="green"
              rotate={-5}
              className="md:absolute md:left-2 md:bottom-2 md:z-30"
            >
              <p className="text-lg">
                "you can't lead alone."
                <br />
                <span className="text-sm">— note to self, 2024</span>
              </p>
            </StickyNote>
          </div>
        </div>

        {/* IEEE */}
        <div className="relative mb-32 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="relative order-2 flex flex-wrap justify-center gap-6 md:order-1 md:block md:h-[420px]">
            <ParallaxLayer speed={0.07} className="md:absolute md:left-6 md:top-2">
              <Polaroid
                caption="AKCSSC '24 · 30+ volunteers"
                rotate={-5}
                src={akcsscGroup}
                alt="Large group photo at AKCSSC 2024"
              />
            </ParallaxLayer>
            <ParallaxLayer speed={0.11} className="md:absolute md:right-4 md:top-40">
              <Polaroid
                caption="pitching AKCSSC · IEEE meet"
                rotate={7}
                src={ieeePresent}
                alt="Presenting collaborations slide at IEEE"
              />
            </ParallaxLayer>
            <StickyNote
              color="blue"
              rotate={4}
              className="md:absolute md:right-50 md:bottom-70 md:z-30"
            >
              <p className="text-lg">
                behind-the-scenes
                <br />
                <span className="text-2xl font-bold">matters most.</span>
              </p>
            </StickyNote>
          </div>

          <ParallaxLayer speed={-0.04} className="order-1 md:order-2">
            <NotebookCard rotate={2}>
              <p
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                🌐 IEEE
              </p>
              <p className="text-lg" style={{ fontFamily: "var(--font-type)" }}>
                Volunteer → WiT Coordinator → Webmaster, Kerala Section
              </p>
              <p className="mt-3 text-xl leading-relaxed">
                I started as a volunteer learning from seniors. I left having organised
                women-focused initiatives across Kerala and maintained section-level web platforms.
              </p>
              <p className="mt-4 text-2xl" style={{ fontFamily: "var(--font-marker)" }}>
                a camp for 150 delegates teaches you that
                <br /> logistics = love.
              </p>
            </NotebookCard>
          </ParallaxLayer>
        </div>

        {/* MuLearn + SHE GEC in collage */}
        <div className="relative grid gap-8 md:grid-cols-2">
          <ParallaxLayer speed={-0.03}>
            <NotebookCard rotate={-1}>
              <p
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                🌱 MuLearn
              </p>
              <p className="text-lg" style={{ fontFamily: "var(--font-type)" }}>
                intern → community builder → mentor
              </p>
              <p className="mt-3 text-xl leading-relaxed">
                more than a learning platform — a network of mentors, peers and friends across
                campuses. Guided juniors through learning pathways and watched the GECK community
                grow.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["pathways", "interest groups", "karma", "campus drives"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-base"
                    style={{
                      background: "oklch(0.87 0.05 250 / 0.5)",
                      fontFamily: "var(--font-hand)",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </NotebookCard>
          </ParallaxLayer>

          <ParallaxLayer speed={0.03}>
            <NotebookCard rotate={2}>
              <p
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                👩 SHE GEC
              </p>
              <p className="text-lg" style={{ fontFamily: "var(--font-type)" }}>
                first-year volunteer → Chairperson
              </p>
              <ul className="mt-3 space-y-1 text-xl">
                <li>• women's health awareness</li>
                <li>• menstrual hygiene programs</li>
                <li>• self-defense workshops</li>
                <li>• safe spaces to talk</li>
              </ul>
              <p
                className="mt-4 text-2xl"
                style={{ fontFamily: "var(--font-marker)", color: "var(--color-accent-red)" }}
              >
                tech is more powerful when more women lead it.
              </p>
            </NotebookCard>
          </ParallaxLayer>
        </div>

        {/* doodle arrows */}
        <CurvedArrow
          className="left-[10%] top-[28%] hidden h-32 w-48 md:block"
          d="M10,10 Q120,80 190,30"
          rotate={-5}
        />
        <CurvedArrow
          className="right-[8%] top-[60%] hidden h-32 w-48 md:block"
          d="M190,10 Q60,90 10,30"
        />
      </section>

      {/* ============ CLOSING ============ */}
      <div aria-hidden className="scrap-divider mx-auto max-w-5xl" />
      <section className="scrap-section relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <ParallaxLayer speed={-0.03}>
          <p className="text-2xl" style={{ fontFamily: "var(--font-type)" }}>
            🌟 what leadership means to me —
          </p>
          <p
            className="mt-6 text-[clamp(2rem,5vw,4rem)] leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            it was never about being the person{" "}
            <span style={{ color: "var(--color-accent-red)" }}>in front</span>.
            <br />
            it was about being the person people could <u>call when they needed help</u>.
          </p>

          <div className="relative mt-16">
            <NotebookCard rotate={-1.5}>
              <Tape
                color="pink"
                rotate={-10}
                className="-top-3 left-1/2 h-5 w-24 -translate-x-1/2"
              />
              <p className="text-2xl leading-relaxed">
                Through communities, volunteering, and leadership roles, I discovered something
                unexpected: I didn't just help build events and programs.
              </p>
              <p className="mt-4 text-3xl" style={{ fontFamily: "var(--font-marker)" }}>
                I built relationships, memories, and a version of myself that believes —
              </p>
              <p
                className="mt-4 text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--color-accent-teal)",
                }}
              >
                people always matter more than positions.
              </p>
            </NotebookCard>
          </div>

          <p className="mt-12 text-right text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            — with love & gratitude
            <br />
            <span style={{ fontFamily: "var(--font-marker)" }}>✿ end of chapter 01 ✿</span>
          </p>
        </ParallaxLayer>
      </section>

    </main>
  );
}
