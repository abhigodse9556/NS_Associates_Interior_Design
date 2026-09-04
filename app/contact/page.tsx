import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NS Associates to discuss a residential, commercial, or hospitality interior design project.",
};

const details = [
  ["Email", "nikhilsalunkhe4399@gmail.com"],
  ["Phone", "+91 9075135232 | +91 7385171520"],
  ["Studio", "Satara | Pune"],
  ["Hours", "Mon-Fri, 9:00-18:00 GMT"],
];

export default function ContactPage() {
  return (
    <section className="pt-32">
      <Container className="pb-24 md:pb-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Tell us about"
              accent="your space."
            />
            <p className="mb-12 mt-8 max-w-sm text-sm leading-relaxed text-stone-dim">
              We take on a limited number of new projects each season. Send a
              short note and we will arrange an introductory call within two
              working days.
            </p>
            <div className="space-y-6">
              {details.map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-dim">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-cream">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] uppercase tracking-[0.2em] text-stone-dim transition-colors hover:text-stone"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
