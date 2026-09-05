import { ArrowDown } from "lucide-react";
import { Navigation } from "../navigation";
import { EnterLink } from "../brand";
import { IntelligenceField } from "../intelligence-field";
import { ProductStage } from "./product-stage";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />
      <IntelligenceField />
      <Navigation />
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Clinical intelligence for clinicians</p>
        </Reveal>
        <Reveal delay={0.07}>
          <h1 id="hero-title">
            The AI healthcare product <br />
            <em>clinicians</em> need.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="hero-description">
            Practice, learn, and grow with clinical intelligence
            <br className="desktop-break" /> built around real judgment.
          </p>
          <div className="hero-actions">
            <EnterLink />
            <a className="button button-light" href="#product">
              See the platform <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
      <p className="hero-margin-note" aria-hidden="true">
        Sharper
        <br />
        clinicians.
        <br />
        <span>Brighter care.</span>
      </p>
      <Reveal className="stage-reveal" delay={0.22}>
        <ProductStage />
      </Reveal>
    </section>
  );
}
