import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function PlatformIntro() {
  return (
    <section
      id="product"
      className="platform-intro container"
      aria-labelledby="platform-title"
    >
      <Reveal>
        <p className="eyebrow">The Knoeta platform</p>
        <div className="intro-grid">
          <h2 id="platform-title">
            A more thoughtful
            <br />
            way to develop
            <br />
            <em>clinical judgment.</em>
          </h2>
          <div className="intro-aside">
            <p>
              Knoeta brings together simulation, expert guidance, and
              longitudinal learning. So every experience becomes part of a
              bigger picture.
            </p>
            <a href="#simulation" className="text-link">
              Discover a different kind of learning{" "}
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
