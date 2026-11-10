import { Linkedin } from "lucide-react";
import { founders, teamMembers, type Founder } from "@/data/team";
import { ArrowUpRight } from "./Cta";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function Portrait({ founder }: { founder: Founder }) {
  if (founder.photo) {
    return (
      <img
        src={founder.photo}
        alt={`Portrait of ${founder.name}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover grayscale transition-all duration-1000 ease-expo group-hover:scale-105 group-hover:grayscale-0"
      />
    );
  }
  // Editorial placeholder — replace by setting `photo` in src/data/team.ts.
  return (
    <div className="relative grid h-full w-full place-items-center bg-stripes-ink transition-transform duration-1000 ease-expo group-hover:scale-105">
      <span className="type-display text-[clamp(7rem,18vw,15rem)] text-outline-light transition-colors duration-700 group-hover:text-signal">
        {founder.initials}
      </span>
      <span className="absolute bottom-5 left-5 h-3 w-3 rounded-full bg-signal" aria-hidden="true" />
    </div>
  );
}

function FounderCard({ founder, offset }: { founder: Founder; offset: boolean }) {
  return (
    <Reveal delay={offset ? 0.15 : 0} className={offset ? "lg:mt-24" : ""}>
      <article className="group">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
          <Portrait founder={founder} />
          <span className="eyebrow absolute right-5 top-5 rounded-full bg-paper px-3 py-2 text-ink">Co-founder</span>
        </div>
        <div className="mt-7 flex items-start justify-between gap-6">
          <div>
            <h3 className="type-wide text-4xl sm:text-5xl">{founder.name}</h3>
            <p className="eyebrow mt-3 text-ink/55">{founder.role}</p>
          </div>
          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition-all duration-500 hover:-translate-y-1 hover:bg-signal hover:text-ink"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="mt-5 max-w-lg leading-relaxed text-ink/70">{founder.bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {founder.focus.map((f) => (
            <li key={f} className="rounded-full border border-ink/15 px-3 py-1 font-grotesk text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
              {f}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Team() {
  const members = teamMembers.filter((m) => m.visible);
  return (
    <section id="team" aria-labelledby="team-title" className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="07">The people</SectionLabel>
            <RevealLines
              id="team-title"
              className="mt-8 type-display text-huge"
              lines={["Good strategy", "starts with", <span key="g" className="text-signal">good people.</span>]}
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-ink/65">
              A team that believes in ownership, curiosity, and doing the work that actually moves
              businesses forward.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-8 lg:gap-14">
          {founders.map((f, i) => (
            <FounderCard key={f.name} founder={f} offset={i === 1} />
          ))}
        </div>

        {members.length > 0 && (
          <Reveal className="mt-24">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow text-ink/55">The wider team</p>
                <p className="mt-4 type-wide text-3xl">People doing the work.</p>
              </div>
              <ul className="border-t border-ink/15 lg:col-span-8">
                {members.map((m, i) => {
                  const row = (
                    <>
                      <span className="font-grotesk text-xs font-bold text-signal">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-grotesk text-xl font-semibold sm:text-2xl">{m.name}</span>
                      <span className="hidden text-sm text-ink/55 sm:block">{m.role ?? "Devavi Media"}</span>
                      {m.linkedin && (
                        <span className="text-lg text-ink/50 transition-colors group-hover:text-signal" aria-hidden="true">
                          <ArrowUpRight />
                        </span>
                      )}
                    </>
                  );
                  return (
                    <li key={m.name} className="border-b border-ink/15">
                      {m.linkedin ? (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-6 py-5 transition-[padding] duration-500 ease-expo hover:pl-3"
                          aria-label={`${m.name} on LinkedIn`}
                        >
                          {row}
                        </a>
                      ) : (
                        <div className="flex items-center gap-6 py-5">{row}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
