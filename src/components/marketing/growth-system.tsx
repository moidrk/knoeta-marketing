import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function GrowthSystem() {
  return (
    <section
      id="for-clinicians"
      className="growth-system container"
      aria-labelledby="growth-title"
    >
      <Reveal>
        <p className="eyebrow">For the clinician you’re becoming</p>
        <h2 id="growth-title">
          Built around
          <br />
          how clinicians grow.
        </h2>
        <p className="growth-description">
          Clinical expertise doesn’t stand still.
          <br />
          Neither should the way you develop it.
        </p>
        <ol
          className="growth-steps"
          aria-label="The continuous learning approach"
        >
          {["Practice", "Reflect", "Get guidance", "Build mastery"].map(
            (step, index) => (
              <li key={step}>
                <span className="growth-node">
                  <span />
                </span>
                <span className="growth-step-text">{step}</span>
                {index < 3 && (
                  <ArrowRight
                    size={16}
                    className="growth-arrow"
                    aria-hidden="true"
                  />
                )}
              </li>
            ),
          )}
        </ol>
      </Reveal>
    </section>
  );
}
