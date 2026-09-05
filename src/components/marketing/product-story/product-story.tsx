import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SimulationPreview } from "./simulation-preview";
import { GuidancePreview } from "./guidance-preview";
import { IntelligenceField } from "../intelligence-field";
import { site } from "@/lib/site";

export function ProductStory() {
  return (
    <div className="product-stories container">
      <section
        id="simulation"
        className="story story-simulation"
        aria-labelledby="simulation-title"
      >
        <Reveal className="story-copy" delay={0.08}>
          <p className="story-number">
            01 <span>Clinical Simulation</span>
          </p>
          <h2 id="simulation-title">
            Practice decisions.
            <br />
            <span className="muted-heading">Build perspective.</span>
          </h2>
          <p>
            Step into a decision. Weigh the evidence, commit to your reasoning,
            and discover what another attempt can teach you.
          </p>
          <a className="text-link" href={`${site.clinicalUrl}/simulations`}>
            Explore clinical simulation{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="story-visual">
          <div className="simulation-environment">
            <SimulationPreview />
          </div>
          <p className="artifact-caption">
            A space to practice the thinking behind the decision.
          </p>
        </Reveal>
      </section>
      <section
        className="story story-guidance"
        aria-labelledby="guidance-title"
      >
        <Reveal className="story-copy">
          <p className="story-number">
            02 <span>Expert Guidance</span>
          </p>
          <h2 id="guidance-title">
            A better question.
            <br />
            <span className="muted-heading">A deeper understanding.</span>
          </h2>
          <p>
            Go beyond the answer. Explore expert reasoning, test your
            assumptions, and make space for a different point of view.
          </p>
          <a className="text-link" href={`${site.clinicalUrl}/coach`}>
            Meet Expert Coach <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="story-visual" delay={0.08}>
          <div className="guidance-environment">
            <GuidancePreview />
          </div>
          <p className="artifact-caption">
            Guidance that opens up your thinking.
          </p>
        </Reveal>
      </section>
      <section
        id="approach"
        className="judgment-story"
        aria-labelledby="judgment-title"
      >
        <Reveal>
          <div className="judgment-heading">
            <div>
              <p className="story-number">
                03 <span>Judgment Over Time</span>
              </p>
              <h2 id="judgment-title">
                Every experience.
                <br />
                <em>A clearer perspective.</em>
              </h2>
            </div>
            <p>
              Connect practice, reflection, and evidence in a learning record
              that grows with you.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <figure className="trajectory-visual">
            <div className="trajectory-label">
              <span className="signal-dot" />A CONNECTED LEARNING JOURNEY
            </div>
            <IntelligenceField variant="trajectory" />
            <div className="trajectory-insight">
              <span>Practice becomes perspective.</span>
              <p>Carry your learning forward.</p>
            </div>
            <div className="trajectory-key">
              <span>
                <i className="key-practice" />
                Practice
              </span>
              <span>
                <i className="key-guidance" />
                Guidance
              </span>
              <span>
                <i className="key-reflection" />
                Reflection
              </span>
            </div>
            <figcaption>
              A conceptual illustration of continuous learning.
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </div>
  );
}
