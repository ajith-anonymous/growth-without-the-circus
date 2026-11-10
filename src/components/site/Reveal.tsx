import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number; children: ReactNode };

/** Fades/slides content in once it enters the viewport. MotionConfig handles reduced motion. */
export function Reveal({ delay = 0, y = 32, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type LinesProps = {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  animateOnMount?: boolean;
};

/** Masked line-by-line text reveal for editorial headlines. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  as = "h2",
  animateOnMount = false,
}: LinesProps) {
  const Tag = motion[as];
  const trigger = animateOnMount
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-80px" } };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{
              hidden: { y: "105%" },
              show: { y: "0%", transition: { duration: 1, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
