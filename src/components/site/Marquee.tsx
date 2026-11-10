import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
  ariaLabel?: string;
};

/** Infinite CSS marquee. Content is rendered twice; the duplicate is hidden from assistive tech. */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = false,
  className,
  trackClassName,
  ariaLabel,
}: MarqueeProps) {
  return (
    <div
      className={cn("relative flex overflow-hidden", pauseOnHover && "pause-on-hover", className)}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      aria-label={ariaLabel}
      role={ariaLabel ? "region" : undefined}
    >
      <div
        className={cn(
          "marquee-track flex w-max shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        <div className={cn("flex shrink-0 items-center", trackClassName)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", trackClassName)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
