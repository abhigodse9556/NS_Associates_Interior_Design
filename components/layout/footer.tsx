import Link from "next/link";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-slate-600 border-rule">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
        <div>
          <Link href="/" className="font-display text-lg font-light text-white">
            NS Associates
          </Link>
          <p className="mt-1 text-xs text-white">Satara | Pune</p>
        </div>
        <nav
          className="flex flex-wrap gap-6 md:gap-10"
          aria-label="Footer navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-white">
          (c) 2026 NS Associates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
