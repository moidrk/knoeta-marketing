"use client";

import { m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const trajectories = [
  "M-40 340 C140 345 150 70 350 200 S560 330 735 150 S980 105 1250 66",
  "M-40 225 C135 175 170 380 355 270 S550 105 735 150 S1000 110 1250 66",
  "M-40 410 C160 430 210 245 355 315 S530 310 735 150 S1000 100 1250 66",
];

export function IntelligenceField({
  variant = "hero",
}: {
  variant?: "hero" | "trajectory" | "closing";
}) {
  const reduce = useReducedMotion();
  return (
    <svg
      className={cn("intelligence-field", `field-${variant}`)}
      viewBox="0 0 1200 480"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {trajectories.map((d, index) => (
        <m.path
          key={d}
          d={d}
          className={`field-path path-${index}`}
          vectorEffect="non-scaling-stroke"
          initial={false}
          whileInView={
            reduce ? undefined : { pathLength: [0.05, 1], opacity: [0.15, 1] }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.3, delay: index * 0.15, ease: "easeInOut" }}
        />
      ))}
      <circle className="node node-violet" cx="350" cy="200" r="5" />
      <circle className="node node-sage" cx="355" cy="315" r="5" />
      <circle className="node-halo" cx="735" cy="150" r="18" />
      <circle className="node node-coral" cx="735" cy="150" r="7" />
      <circle className="node node-violet" cx="1110" cy="83" r="5" />
    </svg>
  );
}
