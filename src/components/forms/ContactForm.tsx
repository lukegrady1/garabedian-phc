"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

const services = [
  "Select a service...",
  "Emergency Plumbing",
  "Heating System Repair",
  "A/C Maintenance",
  "Water Heater Install",
  "Drain Cleaning",
];

const inputStyles =
  "w-full bg-surface-bright border-2 border-primary px-4 py-3 font-body text-on-surface focus:border-[3px] focus:border-primary focus:outline-none focus:ring-0";

const labelStyles =
  "uppercase text-[12px] font-bold tracking-[0.15em] text-primary block font-body";

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={cn("bg-white p-6 md:p-10 border-2 border-primary", className)}>
        <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-8 text-primary">
          Service Inquiry
        </h2>
        <div className="py-12 text-center">
          <p className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary mb-4">
            Request Received
          </p>
          <p className="font-body text-[16px] leading-[1.5] text-on-surface">
            Thank you for contacting us. A technician will reach out to you
            shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-6 md:p-10 border-2 border-primary", className)}>
      <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-4 text-primary">
        Service Inquiry
      </h2>
      <div className="bg-secondary/10 border-2 border-secondary p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span className="font-body text-[13px] md:text-[14px] leading-[1.5] text-primary">
          <strong>Having an emergency?</strong> Please call us directly at{" "}
          <a href="tel:5087574803" className="font-bold text-secondary underline">
            508-757-4803
          </a>{" "}
          instead of filling out this form.
        </span>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name + Phone side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="contact-name" className={labelStyles}>
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="John Doe"
              className={inputStyles}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-phone" className={labelStyles}>
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="(508) 000-0000"
              className={inputStyles}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="contact-email" className={labelStyles}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="john@example.com"
            className={inputStyles}
            required
          />
        </div>

        {/* Service Needed */}
        <div className="space-y-2">
          <label htmlFor="contact-service" className={labelStyles}>
            Service Needed
          </label>
          <select
            id="contact-service"
            className={cn(inputStyles, "appearance-none")}
            defaultValue=""
            required
          >
            {services.map((service, i) => (
              <option key={service} value={i === 0 ? "" : service} disabled={i === 0}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="contact-message" className={labelStyles}>
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Describe your issue or project..."
            className={inputStyles}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-secondary text-white font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase py-5 hover:brightness-110 transition-colors duration-300"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
