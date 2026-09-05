"use client";

import { useState } from "react";
import { m, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  MessageSquareText,
  ScanLine,
} from "lucide-react";
import Image from "next/image";

const perspectives = [
  {
    label: "Evidence",
    icon: BookOpen,
    kicker: "START WITH WHAT YOU KNOW",
    title: "Look beyond the first answer.",
    text: "Which evidence supports your decision? Which evidence asks you to think again?",
    note: "Bring the relevant evidence into focus.",
  },
  {
    label: "Perspective",
    icon: ScanLine,
    kicker: "MAKE SPACE FOR ANOTHER VIEW",
    title: "A different view can change the question.",
    text: "Consider the strongest alternative to your reasoning. What would you need to understand it?",
    note: "Explore the reasoning behind another approach.",
  },
  {
    label: "Reflection",
    icon: MessageSquareText,
    kicker: "CONNECT IT TO YOUR PRACTICE",
    title: "Notice what changed your thinking.",
    text: "What will you carry into your next decision? Put the shift in your own words.",
    note: "Turn a moment of insight into a next step.",
  },
];

export function GuidancePreview() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = perspectives[active];
  return (
    <div className="guidance-surface">
      <div className="artifact-topline">
        <span>
          <Image src="/brand/knoeta-mark.png" alt="" width={22} height={22} />{" "}
          Expert Coach
        </span>
        <span>Guided reasoning</span>
      </div>
      <div className="guidance-body">
        <div
          className="guidance-switcher"
          role="group"
          aria-label="Explore expert guidance"
        >
          {perspectives.map((item, index) => (
            <button
              key={item.label}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <item.icon size={14} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </div>
        <div
          className="guidance-response"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="ui-kicker">{current.kicker}</p>
          <m.div
            key={active}
            initial={reduce ? false : { opacity: 0.5, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h3>{current.title}</h3>
            <p>{current.text}</p>
          </m.div>
        </div>
        <div className="guidance-takeaway">
          <span className="takeaway-line" />
          <p>{current.note}</p>
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
