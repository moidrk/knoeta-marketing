"use client";

import { useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Layers2 } from "lucide-react";

const choices = [
  {
    label: "Revisit the evidence",
    reflection: "Which piece of evidence carries the most weight — and why?",
  },
  {
    label: "Consider another perspective",
    reflection: "What might someone with a different perspective notice?",
  },
  {
    label: "Explain my decision",
    reflection:
      "Make your reasoning visible. What connects the evidence to your choice?",
  },
];

export function SimulationPreview() {
  const [selected, setSelected] = useState<number | null>(null);
  const touched = useRef(false);
  const reduce = useReducedMotion();
  return (
    <m.div
      className="simulation-surface"
      onViewportEnter={() => {
        if (!touched.current) setSelected(1);
      }}
      viewport={{ once: true, amount: 0.65 }}
    >
      <div className="artifact-topline">
        <span>
          <Layers2 size={16} aria-hidden="true" /> Clinical Simulation
        </span>
        <span>Practice preview</span>
      </div>
      <div className="simulation-body">
        <p className="ui-kicker">PAUSE AT THE DECISION</p>
        <h3>
          What would strengthen
          <br />
          your reasoning?
        </h3>
        <p className="simulation-instruction">
          Explore a way to think it through.
        </p>
        <div
          className="decision-options"
          role="group"
          aria-label="Explore a reasoning approach"
        >
          {choices.map((choice, index) => (
            <button
              key={choice.label}
              aria-pressed={selected === index}
              onClick={() => {
                touched.current = true;
                setSelected(index);
              }}
              className={selected === index ? "selected" : ""}
            >
              <span className="option-marker">
                {selected === index ? (
                  <Check size={13} aria-hidden="true" />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              {choice.label}
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div
          className="reflection-feedback"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="feedback-label">A QUESTION TO TAKE FURTHER</span>
          <m.p
            key={selected}
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {selected === null
              ? "Every decision is an opportunity to reflect."
              : choices[selected].reflection}
          </m.p>
        </div>
      </div>
    </m.div>
  );
}
