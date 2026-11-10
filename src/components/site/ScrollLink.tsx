import { Link, useLocation } from "@tanstack/react-router";
import type { MouseEvent, ReactNode } from "react";

/** Smoothly scrolls to a home-page section, or navigates home first from other pages. */
export function ScrollLink({
  to,
  className,
  children,
  onNavigate,
  ...rest
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  "aria-current"?: "true" | undefined;
}) {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return (
      <Link to="/" hash={to === "top" ? undefined : to} className={className} onClick={onNavigate} {...rest}>
        {children}
      </Link>
    );
  }

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (to === "top") {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", "/");
      return;
    }
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${to}`);
    }
  };

  return (
    <a href={to === "top" ? "/" : `#${to}`} onClick={handle} className={className} {...rest}>
      {children}
    </a>
  );
}
