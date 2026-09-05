import { Hero } from "@/components/marketing/hero/hero";
import { PlatformIntro } from "@/components/marketing/platform-intro";
import { ProductStory } from "@/components/marketing/product-story/product-story";
import { GrowthSystem } from "@/components/marketing/growth-system";
import { ClosingCTA } from "@/components/marketing/closing-cta";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <PlatformIntro />
        <ProductStory />
        <GrowthSystem />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
