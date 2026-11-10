import { motion } from "framer-motion";
import { services, type Service } from "@/data/services";
import { primaryContactHref } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./Cta";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Tone = "ink" | "signal" | "snow" | "outline";

const layout: { span: string; tone: Tone; tall?: boolean }[] = [
  { span: "md:col-span-2 lg:col-span-7 lg:row-span-2", tone: "ink", tall: true },
  { span: "lg:col-span-5", tone: "signal" },
  { span: "lg:col-span-5", tone: "snow" },
  { span: "lg:col-span-4", tone: "snow" },
  { span: "lg:col-span-4", tone: "ink" },
  { span: "md:col-span-2 lg:col-span-4", tone: "outline" },
];

const toneClasses: Record<Tone, { card: string; muted: string; num: string; tag: string; btn: string }> = {
  ink: {
    card: "bg-ink text-paper",
    muted: "text-paper/60",
    num: "text-outline-light group-hover:text-signal",
    tag: "border-paper/15 text-paper/70",
    btn: "bg-paper text-ink group-hover:bg-signal",
  },
  signal: {
    card: "bg-signal text-ink",
    muted: "text-ink/70",
    num: "text-outline-dark group-hover:text-ink",
    tag: "border-ink/20 text-ink/80",
    btn: "bg-ink text-paper",
  },
  snow: {
    card: "bg-snow text-ink",
    muted: "text-ink/60",
    num: "text-outline-dark group-hover:text-signal",
    tag: "border-ink/15 text-ink/70",
    btn: "bg-ink text-paper group-hover:bg-signal group-hover:text-ink",
  },
  outline: {
    card: "border border-ink/15 bg-transparent text-ink hover:bg-ink hover:text-paper",
    muted: "text-ink/60 group-hover:text-paper/60",
    num: "text-outline-dark group-hover:text-signal",
    tag: "border-ink/15 text-ink/70 group-hover:border-paper/20 group-hover:text-paper/70",
    btn: "bg-ink text-paper group-hover:bg-signal group-hover:text-ink",
  },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { span, tone, tall } = layout[index];
  const t = toneClasses[tone];
  return (
    <Reveal delay={(index % 3) * 0.08} className={cn(span)}>
      <motion.a
        href={primaryContactHref()}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-colors duration-500 sm:p-9",
          t.card,
          tall ? "min-h-[420px] lg:min-h-[640px]" : "min-h-[320px]",
        )}
        aria-label={`${service.title} — talk to us about this service`}
      >
        {tall && (
          <svg
            aria-hidden="true"
            viewBox="0 0 400 200"
            className="pointer-events-none absolute -right-10 bottom-24 w-[80%] opacity-40 transition-opacity duration-700 group-hover:opacity-80"
          >
            {Array.from({ length: 22 }).map((_, i) => (
              <rect
                key={i}
                x={i * 18}
                y={200 - (20 + Math.pow(i, 1.55) * 2.6)}
                width="8"
                height={20 + Math.pow(i, 1.55) * 2.6}
                rx="2"
                fill={i > 17 ? "var(--signal)" : "var(--paper)"}
                fillOpacity={i > 17 ? 1 : 0.12}
              />
            ))}
          </svg>
        )}
        <div className="relative flex items-start justify-between gap-6">
          <span
            className={cn(
              "type-display transition-colors duration-500",
              tall ? "text-[clamp(5rem,12vw,11rem)]" : "text-[clamp(4rem,7vw,6rem)]",
              t.num,
            )}
          >
            {service.number}
          </span>
          <span
            className={cn(
              "grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg transition-all duration-500 group-hover:rotate-45",
              t.btn,
            )}
          >
            <ArrowUpRight />
          </span>
        </div>
        <div className="relative mt-10">
          <h3 className={cn("type-wide", tall ? "text-[clamp(2.2rem,4.5vw,4rem)]" : "text-[clamp(1.6rem,2.6vw,2.2rem)]")}>
            {service.title}
          </h3>
          <p className={cn("mt-4 max-w-md leading-relaxed transition-colors", tall ? "text-lg" : "text-base", t.muted)}>
            {service.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className={cn("rounded-full border px-3 py-1 font-grotesk text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors", t.tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.a>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="03">Services</SectionLabel>
            <RevealLines
              id="services-title"
              className="mt-8 type-display text-huge"
              lines={["The systems", "behind scalable", <span key="g" className="text-signal">growth.</span>]}
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="font-grotesk text-xl font-medium leading-snug sm:text-2xl">
              Every campaign has a purpose. <span className="text-ink/50">Every rupee has a job.</span>{" "}
              Every decision has a reason.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
