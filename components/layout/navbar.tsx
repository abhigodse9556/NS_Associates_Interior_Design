"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-rule bg-canvas/95 backdrop-blur-md"
          : "bg-canvas/20"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-xl font-light tracking-wide text-cream"
          onClick={() => setOpen(false)}
        >
          NS Associates
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm uppercase tracking-widest text-stone-dim transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="border border-stone/40 px-5 py-2 text-sm uppercase tracking-widest text-stone transition-all hover:bg-stone hover:text-canvas"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-px w-6 bg-stone transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-stone transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      <div
        className={`overflow-hidden border-rule bg-canvas transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-80 border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm uppercase tracking-widest text-stone-dim"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
