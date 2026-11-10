import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { growthSteps } from "@/data/content";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function GrowthSystems() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-labelledby="growth-title" className="relative overflow-hidden bg-grid-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index="04" tone="light">Growth systems</SectionLabel>
        <RevealLines
          id="growth-title"
          className="mt-8 type-display text-huge"
          lines={["From first click", <><span className="text-outline-light">to</span> loyal <span className="text-signal">customer.</span></>]}
        />

        <div ref={ref} className="relative mt-20">
          {/* desktop connector */}
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-paper/15 lg:block" aria-hidden="true">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-signal" />
          </div>
          {/* mobile connector */}
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-paper/15 lg:hidden" aria-hidden="true">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-signal" />
          </div>

          <ol className="grid gap-12 lg:grid-cols-5 lg:gap-6">
            {growthSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <li className="group relative pl-20 lg:pl-0">
                  <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border border-paper/20 bg-ink font-grotesk text-sm font-bold transition-colors duration-500 group-hover:border-signal group-hover:bg-signal group-hover:text-ink lg:relative">
                    {step.number}
                  </span>
                  <h3 className="type-wide text-3xl lg:mt-10 xl:text-4xl">{step.title}</h3>
                  <p className="mt-4 max-w-xs leading-relaxed text-paper/60">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
