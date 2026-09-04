import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] pt-32">
      <Container>
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-dim">
          Page Not Found
        </p>
        <h1 className="font-display text-5xl font-light text-cream">
          This room is not on the plan.
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex bg-stone px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-canvas transition-colors hover:bg-cream"
        >
          Return Home
        </Link>
      </Container>
    </section>
  );
}
