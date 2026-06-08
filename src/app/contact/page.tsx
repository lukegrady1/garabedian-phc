import type { Metadata } from "next";
import {
  Phone,
  AlertCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Award,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

const serviceAreaTags = siteConfig.serviceAreaList;

export default function ContactPage() {
  return (
    <>
      {/* Header Band */}
      <header className="bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] py-10 md:py-16">
          <h1 className="font-headline text-[36px] sm:text-[48px] md:text-[80px] leading-[1] tracking-[-0.02em] font-extrabold uppercase">
            Contact Our Team
          </h1>
          <p className="font-body text-[15px] md:text-[18px] leading-[1.6] max-w-2xl mt-4 opacity-90">
            Expert plumbing, heating, and cooling solutions since 1916.
            Professional service for Worcester County homeowners and businesses.
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] py-[48px] md:py-[80px] grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">
        {/* Left Column: Form */}
        <FadeIn className="md:col-span-7">
          <ContactForm />
        </FadeIn>

        {/* Right Column: Panel + Map */}
        <FadeIn className="md:col-span-5 space-y-[24px]" delay={0.15}>
          {/* Info Panel */}
          <div className="bg-primary text-white p-6 md:p-10 border-2 border-primary">
            <h2 className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase border-b-2 border-white/30 pb-4 mb-6">
              Contact Details
            </h2>

            <div className="space-y-8">
              {/* Main Line */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-white/70 shrink-0 mt-1" />
                <div>
                  <p className="uppercase text-[12px] font-bold tracking-[0.15em] text-white/70 font-body">
                    Main Line
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* 24/7 Emergency Line */}
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-white/70 shrink-0 mt-1" />
                <div className="bg-white/10 p-4 w-full">
                  <p className="uppercase text-[12px] font-bold tracking-[0.15em] text-white font-body">
                    24/7 Emergency Line
                  </p>
                  <a
                    href={siteConfig.emergencyPhoneHref}
                    className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold text-white hover:underline"
                  >
                    {siteConfig.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white/70 shrink-0 mt-1" />
                <div>
                  <p className="uppercase text-[12px] font-bold tracking-[0.15em] text-white/70 font-body">
                    Address
                  </p>
                  <p className="font-body text-[15px] md:text-[18px] leading-[1.6]">
                    {siteConfig.address.street},
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-white/70 shrink-0 mt-1" />
                <div>
                  <p className="uppercase text-[12px] font-bold tracking-[0.15em] text-white/70 font-body">
                    Business Hours
                  </p>
                  <p className="font-body text-[16px] leading-[1.5]">
                    {siteConfig.hours.weekday}
                  </p>
                  <p className="font-body text-[16px] leading-[1.5]">
                    {siteConfig.hours.saturday}
                  </p>
                  <p className="font-body text-[16px] leading-[1.5]">
                    {siteConfig.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-10 pt-6 border-t-2 border-white/20">
              <p className="uppercase text-[12px] font-bold tracking-[0.15em] text-white/70 font-body mb-4">
                Service Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreaTags.map((town) => (
                  <span
                    key={town}
                    className="px-2 py-1 bg-white/10 border border-white/20 text-[12px] font-bold tracking-[0.15em] font-body"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </FadeIn>
      </section>

      {/* Trust Section */}
      <FadeIn>
        <section className="w-full bg-[#b3dcf1] py-12 border-t-2 border-b-2 border-primary">
          <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[24px]">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-9 h-9 text-primary" />
              <span className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Wrench className="w-9 h-9 text-primary" />
              <span className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                Master Plumber #11427
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Award className="w-9 h-9 text-primary" />
              <span className="font-headline text-[20px] md:text-[24px] leading-[1.2] font-semibold uppercase text-primary">
                100+ Years Experience
              </span>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
