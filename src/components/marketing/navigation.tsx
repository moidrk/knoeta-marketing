"use client";

import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand, EnterLink } from "./brand";
import { navigation, site } from "@/lib/site";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  return (
    <header
      className="navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <a className="home-link" href="#top" aria-label="Knoeta home">
        <Brand />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="sign-in" href={site.clinicalUrl}>
          Sign in
        </a>
        <EnterLink />
      </div>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={close}>
            <span className="menu-index">0{index + 1}</span>
            {item.label}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ))}
        <a href={site.clinicalUrl} onClick={close}>
          Sign in to Knoeta <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
