import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-stone text-canvas hover:bg-cream",
  secondary:
    "border border-stone/40 text-stone hover:border-stone hover:bg-stone/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
