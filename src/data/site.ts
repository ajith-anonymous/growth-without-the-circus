/**
 * Global site configuration. Every contact/social field is optional:
 * leave a value as null until it is verified, and the UI falls back gracefully.
 */
export const site = {
  name: "Devavi Media",
  tagline: "Performance Marketing, Minus the Circus.",
  description:
    "Devavi Media partners with ambitious brands to drive measurable growth through Meta Ads, Google Ads, performance strategy, creative testing, and data-driven optimisation.",
  /** Verified public company page. */
  linkedin: "https://www.linkedin.com/company/devavimedia" as string | null,
  /** Not yet verified — add when confirmed, e.g. "https://www.instagram.com/…" */
  instagram: null as string | null,
  /** Not yet verified — add when confirmed, e.g. "hello@devavimedia.com" */
  email: null as string | null,
  /** Optional external booking link (Calendly etc.). */
  bookingUrl: null as string | null,
  locationLine: "Gurugram, India",
};

/** Primary "talk to us" destination, resolved from whatever is configured. */
export function primaryContactHref(): string {
  if (site.bookingUrl) return site.bookingUrl;
  if (site.email) return `mailto:${site.email}?subject=${encodeURIComponent("Let's talk growth")}`;
  return site.linkedin ?? "/#contact";
}

export const isExternal = (href: string) => /^https?:\/\//.test(href);

export const navItems = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
