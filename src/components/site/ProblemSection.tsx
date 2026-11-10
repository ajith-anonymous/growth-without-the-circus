import { X } from "lucide-react";
import { problems } from "@/data/content";
import { Marquee } from "./Marquee";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function ProblemChip({ text, tone }: { text: string; tone: "ink" | "paper" }) {
  return (
    <span
      className={
        tone === "ink"
          ? "flex items-center gap-4 rounded-full bg-ink px-7 py-5 font-grotesk text-lg font-semibold text-paper sm:text-2xl"
          : "flex items-center gap-4 rounded-full border border-ink/15 bg-snow px-7 py-5 font-grotesk text-lg font-semibold text-ink sm:text-2xl"
      }
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-signal text-ink">
        <X className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
      </span>
      {text}
    </span>
  );
}

export function ProblemSection() {
  const half = Math.ceil(problems.length / 2);
  return (
    <section id="about" aria-labelledby="problem-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:px-8 sm:pt-32">
        <SectionLabel index="01">The problem</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <RevealLines
            id="problem-title"
            className="type-display text-huge lg:col-span-9"
            lines={[
              "Your brand doesn't",
              <>
                need more <span className="text-outline-dark">noise.</span>
              </>,
              "It needs better",
              <span key="g" className="text-signal">growth.</span>,
            ]}
          />
          <Reveal delay={0.2} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-ink/70">
              Clicks are easy to buy. Sustainable growth is harder to build. The difference lies in
              understanding the numbers, the customer, and the strategy behind every decision.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col gap-4 pb-24 sm:pb-32" aria-label="Common growth problems">
        <Marquee duration={50} trackClassName="gap-4 pr-4" pauseOnHover>
          {problems.slice(0, half).map((p) => (
            <ProblemChip key={p} text={p} tone="ink" />
          ))}
        </Marquee>
        <Marquee duration={50} reverse trackClassName="gap-4 pr-4" pauseOnHover>
          {problems.slice(half).concat(problems.slice(0, 1)).map((p, i) => (
            <ProblemChip key={p + i} text={p} tone="paper" />
          ))}
        </Marquee>
      </div>

      <div className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12">
          <p className="eyebrow text-paper/40 lg:col-span-2">The shift</p>
          <RevealLines
            as="p"
            className="type-wide text-big lg:col-span-10"
            lines={[
              "Growth isn't about spending more.",
              <span key="d" className="text-paper/40">
                It's about making <span className="text-signal">every decision</span> count.
              </span>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
