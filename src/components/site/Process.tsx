import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/content";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-labelledby="process-title" className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="09">Our process</SectionLabel>
            <RevealLines
              id="process-title"
              className="mt-8 type-display text-huge"
              lines={["Less talk.", "Better", <span key="e" className="text-signal">execution.</span>]}
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink/65">
                A clear rhythm from the first conversation to scale — so you always know what's
                happening, and why.
              </p>
            </Reveal>
          </div>
        </div>

        <ol ref={ref} className="relative lg:col-span-7">
          <span className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/15" aria-hidden="true">
            <motion.span style={{ scaleY }} className="block h-full w-full origin-top bg-signal" />
          </span>
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial="idle"
              whileInView="active"
              viewport={{ margin: "-45% 0px -45% 0px" }}
              className="relative flex gap-8 pb-16 last:pb-0 sm:gap-10"
            >
              <motion.span
                variants={{
                  idle: { backgroundColor: "var(--paper)", color: "var(--ink)", scale: 1 },
                  active: { backgroundColor: "var(--signal)", color: "var(--ink)", scale: 1.08 },
                }}
                transition={{ duration: 0.4 }}
                className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-ink/20 font-grotesk text-sm font-bold"
              >
                {step.number}
              </motion.span>
              <motion.div
                variants={{ idle: { opacity: 0.35, x: 0 }, active: { opacity: 1, x: 8 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-1"
              >
                <p className="eyebrow text-ink/45">Step {i + 1}</p>
                <h3 className="mt-2 type-display text-[clamp(2.4rem,5vw,4.5rem)]">{step.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">{step.text}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
