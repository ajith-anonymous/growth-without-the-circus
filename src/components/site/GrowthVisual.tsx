import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const curve = "M20 250 C 90 245, 120 228, 160 205 S 240 150, 270 120 S 340 50, 390 30";
const area = `${curve} L 390 280 L 20 280 Z`;
const nodes = [
  { x: 160, y: 205, label: "Attention" },
  { x: 270, y: 120, label: "Acquisition" },
  { x: 390, y: 30, label: "Revenue" },
];

/** Original abstract "growth instrument": an animated curve moving from attention to revenue. */
export function GrowthVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper/10 bg-ink-soft p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="eyebrow text-paper/50">Growth system</p>
        <p className="eyebrow flex items-center gap-2 text-paper/50">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" /> Compounding
        </p>
      </div>
      <svg viewBox="0 0 410 290" className="h-auto w-full" role="img" aria-label="Abstract curve rising from attention to acquisition to revenue">
        <defs>
          <linearGradient id="gv-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="20" x2="390" y1={30 + i * 50} y2={30 + i * 50} stroke="var(--ink-line)" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.rect
            key={`b${i}`}
            x={30 + i * 31}
            width="10"
            rx="2"
            fill="var(--paper)"
            fillOpacity={0.08 + i * 0.012}
            initial={{ height: 0, y: 280 }}
            animate={{ height: 30 + i * 18 + (i % 3) * 8, y: 280 - (30 + i * 18 + (i % 3) * 8) }}
            transition={{ duration: 1.2, ease, delay: 0.6 + i * 0.05 }}
          />
        ))}
        <motion.path
          d={area}
          fill="url(#gv-area)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        />
        <motion.path
          d={curve}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease, delay: 0.8 }}
        />
        {nodes.map((n, i) => (
          <motion.g
            key={n.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 + i * 0.35, ease }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r="9" fill="var(--ink)" stroke="var(--signal)" strokeWidth="2" />
            <circle cx={n.x} cy={n.y} r="3.5" fill="var(--paper)" />
            <text
              x={n.x - 14}
              y={n.y + (i === 2 ? 28 : -18)}
              textAnchor="end"
              fill="var(--paper)"
              fillOpacity="0.75"
              style={{ font: "600 11px var(--font-grotesk)", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-paper/10">
        {["Strategy", "Execution", "Optimisation"].map((t) => (
          <div key={t} className="bg-ink-soft px-3 py-3 text-center">
            <p className="font-grotesk text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/60">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
