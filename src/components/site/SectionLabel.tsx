import { cn } from "@/lib/utils";

/** Small numbered editorial label, e.g. "(03) — Services". */
export function SectionLabel({
  index,
  children,
  tone = "dark",
  className,
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-ink/60" : "text-paper/55",
        className,
      )}
    >
      <span className="text-signal">({index})</span>
      <span className={cn("h-px w-8", tone === "dark" ? "bg-ink/25" : "bg-paper/25")} />
      {children}
    </p>
  );
}
