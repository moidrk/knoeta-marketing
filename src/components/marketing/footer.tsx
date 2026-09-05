import { Brand } from "./brand";
import { navigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <a href="#top" aria-label="Knoeta home">
        <Brand />
      </a>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>
        <span className="signal-dot" />
        Built for a healthier tomorrow.
      </p>
    </footer>
  );
}
