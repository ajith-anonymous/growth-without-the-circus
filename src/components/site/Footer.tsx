import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { services } from "@/data/services";
import { navItems, site } from "@/data/site";
import { ScrollLink } from "./ScrollLink";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    site.linkedin && { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
    site.instagram && { label: "Instagram", href: site.instagram, icon: Instagram },
    site.email && { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Linkedin }[];

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-wide text-3xl sm:text-4xl">
              Performance marketing, <span className="text-signal">minus the circus.</span>
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-paper/55">{site.description}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-7">
            <p className="eyebrow text-paper/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <ScrollLink to={n.id} className="text-paper/75 transition-colors hover:text-signal">
                    {n.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="eyebrow text-paper/40">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.number}>
                  <ScrollLink to="services" className="text-paper/75 transition-colors hover:text-signal">
                    {s.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-paper/40">Connect</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 text-paper/75 transition-colors hover:text-signal"
                  >
                    <s.icon className="h-4 w-4" /> {s.label}
                  </a>
                </li>
              ))}
              <li>
                <ScrollLink to="contact" className="inline-flex items-center gap-2 text-paper/75 transition-colors hover:text-signal">
                  Start a conversation ↗
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none whitespace-nowrap type-display text-[clamp(3rem,15.5vw,15rem)] leading-[0.8] text-hero-gradient"
        >
          Devavi<span className="text-signal">.</span>
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-paper/10 pt-6 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Devavi Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-paper">
              Privacy Policy
            </Link>
            <span>{site.locationLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
