import { clients } from "@/data/clients";
import { Marquee } from "./Marquee";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function LogoTile({ name, logo, logoWidth }: (typeof clients)[number]) {
  const wide = (logoWidth ?? 0) > 700;
  return (
    <div className="group grid h-32 w-60 shrink-0 place-items-center rounded-2xl border border-paper/10 bg-ink-soft px-8 transition-colors duration-500 hover:border-signal/60 sm:h-40 sm:w-72">
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          width={logoWidth}
          height={140}
          className={`${wide ? "h-6 sm:h-7" : "h-14 sm:h-16"} w-auto max-w-full logo-mono transition-all duration-500 group-hover:opacity-100 group-hover:filter-none`}
        />
      ) : (
        <span className="type-wide text-2xl tracking-[0.2em] text-paper/75 transition-colors group-hover:text-paper sm:text-3xl">
          {name}
        </span>
      )}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section aria-labelledby="clients-title" className="overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="02" tone="light">Partners</SectionLabel>
            <RevealLines
              id="clients-title"
              className="mt-8 type-display text-huge"
              lines={["Good work.", <span key="g" className="text-signal">Great partnerships.</span>]}
            />
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-paper/60">
              We work alongside founders and ambitious teams building the next generation of consumer
              brands.
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal className="mt-16 sm:mt-20">
        <Marquee duration={45} pauseOnHover className="mask-fade-x" trackClassName="gap-4 pr-4" ariaLabel="Brands we work with">
          {clients.map((c) => (
            <LogoTile key={c.name} {...c} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
