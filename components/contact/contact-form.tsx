"use client";

import { useState } from "react";
import { services } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center border border-rule bg-canvas-mid p-8 md:p-10">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-stone text-stone">
          OK
        </div>
        <h2 className="font-display text-3xl font-light text-cream">
          Thank you.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-dim">
          We have received your message and will be in touch within two working
          days. This static form is ready to connect to enquiries when the
          backend is added.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6 border border-rule bg-canvas-mid p-6 md:p-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            type="text"
            name="name"
            placeholder="Clara Whitmore"
            className={inputClass}
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            name="email"
            placeholder="hello@email.com"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Service of Interest">
        <select
          required
          name="service"
          className={`${inputClass} bg-canvas-mid`}
        >
          <option className="bg-canvas" disabled value="">
            Select a service...
          </option>
          {services.map((service) => (
            <option
              className="bg-canvas"
              key={service.id}
              value={service.title}
            >
              {service.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about your project">
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Share the location, size, scope, and timeline of your project..."
          className={`${inputClass} resize-none`}
        />
      </Field>
      <button
        type="submit"
        className="w-full bg-stone py-3.5 text-sm font-medium uppercase tracking-widest text-canvas transition-colors hover:bg-cream"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-dim">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full border border-stone/20 bg-transparent px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-stone-dim/45 focus:border-stone";
