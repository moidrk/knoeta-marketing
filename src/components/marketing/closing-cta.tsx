import Image from "next/image";
import { EnterLink } from "./brand";
import { IntelligenceField } from "./intelligence-field";
import { Reveal } from "@/components/motion/reveal";

export function ClosingCTA() {
  return (
    <section
      id="about"
      className="closing-section"
      aria-labelledby="closing-title"
    >
      <Reveal>
        <div className="closing-panel">
          <Image
            src="/images/dawn-landscape.webp"
            alt=""
            fill
            sizes="(max-width: 600px) 100vw, 96vw"
            className="dawn-landscape"
          />
          <div className="closing-wash" aria-hidden="true" />
          <IntelligenceField variant="closing" />
          <div className="closing-copy">
            <p className="eyebrow">A brighter tomorrow</p>
            <h2 id="closing-title">
              Better clinicians.
              <br />
              <em>Brighter care.</em>
            </h2>
          </div>
          <div className="closing-action">
            <EnterLink />
            <p>Be part of what’s next.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
