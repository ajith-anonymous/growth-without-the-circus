import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { isExternal } from "@/data/site";

export const ctaVariants = cva(
  "group/cta relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-grotesk font-bold uppercase tracking-[0.14em] transition-all duration-500 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
  {
    variants: {
      variant: {
        signal:
          "bg-signal text-ink hover:bg-signal-deep hover:shadow-signal hover:-translate-y-0.5",
        ink: "bg-ink text-paper hover:bg-ink-soft hover:-translate-y-0.5",
        paper: "bg-paper text-ink hover:bg-snow hover:-translate-y-0.5",
        "outline-light":
          "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
        "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
      },
      size: {
        sm: "h-10 px-5 text-[0.68rem]",
        md: "h-13 px-7 text-[0.72rem]",
        lg: "h-16 px-9 text-xs sm:text-sm",
      },
    },
    defaultVariants: { variant: "signal", size: "md" },
  },
);

type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants> & { href: string; children: ReactNode };

export function Cta({ href, variant, size, className, children, ...rest }: CtaProps) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={cn(ctaVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Arrow that slides diagonally on parent hover. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-[1em] w-[1em] overflow-hidden", className)} aria-hidden="true">
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-expo group-hover/cta:-translate-y-full group-hover/cta:translate-x-full group-hover:-translate-y-full group-hover:translate-x-full">
        ↗
      </span>
      <span className="absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform duration-500 ease-expo group-hover/cta:translate-x-0 group-hover/cta:translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0">
        ↗
      </span>
    </span>
  );
}
