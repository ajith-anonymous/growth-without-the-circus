import { motion } from "framer-motion";
import { reasons } from "@/data/content";
import { RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function WhyDevavi() {
  return (
    <section aria-labelledby="why-title" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index="06" tone="light">Why Devavi</SectionLabel>
        <RevealLines
          id="why-title"
          className="mt-8 type-display text-huge"
          lines={[
            "Not another agency.",
            <>
              <span className="text-outline-light">A</span> growth <span className="text-signal">partner.</span>
            </>,
          ]}
        />

        <ol className="mt-16 border-t border-paper/15 sm:mt-20">
          {reasons.map((r, i) => (
            <motion.li
              key={r.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="group relative grid gap-4 overflow-hidden border-b border-paper/15 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-signal transition-transform duration-700 ease-expo group-hover:scale-y-100"
              />
              <span className="relative type-display text-6xl text-outline-light transition-colors duration-500 group-hover:text-ink sm:text-7xl lg:col-span-2 lg:px-2">
                {r.number}
              </span>
              <h3 className="relative type-wide text-3xl transition-colors duration-500 group-hover:text-ink sm:text-4xl lg:col-span-5 xl:text-5xl">
                {r.title}
              </h3>
              <p className="relative max-w-xl text-lg leading-relaxed text-paper/60 transition-colors duration-500 group-hover:text-ink/80 lg:col-span-5 lg:pr-4">
                {r.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
