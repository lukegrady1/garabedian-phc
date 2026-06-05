import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "24/7 Emergency Service",
};

export default function EmergencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-secondary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-center">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6" />
            <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1.0] tracking-[-0.02em] font-extrabold uppercase mb-6">
              Emergency Service
            </h1>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] opacity-90 mb-8">
              Burst pipe? No heat? Gas smell? Don{"'"}t wait — our licensed
              technicians are available around the clock, every day of the year.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-4 bg-primary text-white font-headline text-[24px] md:text-[36px] leading-[1.2] font-bold px-8 md:px-12 py-5 md:py-6 uppercase hover:opacity-90 transition-all"
            >
              <Phone className="w-7 h-7 md:w-9 md:h-9" />
              {siteConfig.phone}
            </a>
            <p className="font-body text-[13px] md:text-[14px] uppercase tracking-[0.15em] font-bold mt-4 opacity-70">
              Available 24 hours a day, 7 days a week, 365 days a year
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We Cover */}
      <FadeIn>
        <section className="w-full bg-surface py-[48px] md:py-[80px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold text-primary uppercase mb-8 md:mb-12 text-center">
              Emergency Services We Handle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="border-2 border-primary p-5 md:p-8">
                <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary mb-3">
                  Plumbing Emergencies
                </h3>
                <ul className="font-body text-[15px] md:text-[16px] leading-[1.8] text-primary space-y-1">
                  <li>Burst or frozen pipes</li>
                  <li>Sewage backups</li>
                  <li>Major water leaks</li>
                  <li>No hot water</li>
                  <li>Overflowing fixtures</li>
                </ul>
              </div>
              <div className="border-2 border-primary p-5 md:p-8">
                <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary mb-3">
                  Heating Emergencies
                </h3>
                <ul className="font-body text-[15px] md:text-[16px] leading-[1.8] text-primary space-y-1">
                  <li>Complete heat loss</li>
                  <li>Boiler malfunctions</li>
                  <li>Furnace breakdowns</li>
                  <li>Gas leaks or odors</li>
                  <li>Carbon monoxide alerts</li>
                </ul>
              </div>
              <div className="border-2 border-primary p-5 md:p-8">
                <h3 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary mb-3">
                  Cooling Emergencies
                </h3>
                <ul className="font-body text-[15px] md:text-[16px] leading-[1.8] text-primary space-y-1">
                  <li>A/C system failures</li>
                  <li>Refrigerant leaks</li>
                  <li>Compressor issues</li>
                  <li>Electrical faults</li>
                  <li>Extreme heat situations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Trust badges */}
      <FadeIn>
        <section className="w-full bg-primary text-white py-[32px] md:py-[48px] px-[20px] md:px-[40px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-surface-variant" />
              <span className="font-headline text-[18px] md:text-[24px] font-semibold uppercase">
                24/7/365 Availability
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-surface-variant" />
              <span className="font-headline text-[18px] md:text-[24px] font-semibold uppercase">
                {siteConfig.license}
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Bottom CTA */}
      <FadeIn>
        <section className="w-full bg-secondary text-white py-[48px] md:py-[80px] px-[20px] md:px-[40px] text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-headline text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-bold uppercase mb-6">
              Don{"'"}t Hesitate — Call Now
            </h2>
            <p className="font-body text-[15px] md:text-[18px] leading-[1.6] opacity-90 mb-8">
              When an emergency strikes, every minute counts. Our on-call
              technicians are ready to respond immediately.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="bg-primary text-white font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold px-8 md:px-10 py-4 md:py-5 uppercase hover:opacity-90 transition-all inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Call {siteConfig.phone}
            </a>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
