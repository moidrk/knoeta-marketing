import {
  ArrowRight,
  BookOpen,
  ChartNoAxesCombined,
  Check,
  Compass,
  Layers2,
  MessageSquareText,
} from "lucide-react";
import { Brand } from "../brand";
import { IntelligenceField } from "../intelligence-field";

export function ProductStage() {
  return (
    <div className="product-stage">
      <div className="guidance-fragment" aria-hidden="true">
        <span className="fragment-icon">
          <MessageSquareText size={18} />
        </span>
        <span className="ui-kicker">A MOMENT TO REFLECT</span>
        <p>
          What would change
          <br />
          your thinking?
        </p>
        <span className="fragment-rule" />
        <span className="fragment-note">
          A better question. A deeper understanding.
        </span>
      </div>
      <div
        className="dashboard-preview"
        aria-label="An illustrative preview of the Knoeta learning platform"
      >
        <aside className="preview-sidebar" aria-hidden="true">
          <Brand compact />
          <div className="preview-nav">
            <span className="active">
              <Compass />
              Overview
            </span>
            <span>
              <Layers2 />
              Simulations
            </span>
            <span>
              <MessageSquareText />
              Expert Coach
            </span>
            <span>
              <ChartNoAxesCombined />
              Progress
            </span>
            <span>
              <BookOpen />
              Clinical Library
            </span>
          </div>
          <div className="sidebar-footnote">
            A little practice.
            <br />A new perspective.
          </div>
        </aside>
        <div className="preview-main">
          <div className="preview-topline">
            <span>Your learning journey</span>
            <span className="preview-status">
              <span /> Practice. Reflect. Grow.
            </span>
          </div>
          <div className="preview-heading">
            <span className="ui-kicker">YOUR NEXT CHAPTER</span>
            <h2>Make room for a new perspective.</h2>
            <p>Build on what you know. Explore what comes next.</p>
          </div>
          <div className="preview-workspace">
            <div className="current-practice">
              <span className="practice-icon">
                <Layers2 size={22} />
              </span>
              <span className="ui-kicker">CLINICAL SIMULATION</span>
              <h3>
                Put your judgment <br />
                into practice.
              </h3>
              <p>
                Consider the evidence. <br />
                Commit to a decision.
              </p>
              <span className="practice-preview-note">
                Practice with purpose{" "}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
            <div className="preview-journey">
              <div className="journey-heading">
                <h3>Learning that connects.</h3>
                <span className="ui-kicker">OVER TIME</span>
              </div>
              <IntelligenceField variant="trajectory" />
              <div className="journey-note">
                <Check size={15} aria-hidden="true" /> Every reflection is a
                place to begin.
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="stage-caption" aria-hidden="true">
        PURPOSEFUL PRACTICE. LASTING PERSPECTIVE.
      </span>
    </div>
  );
}
