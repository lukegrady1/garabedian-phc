import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/base-path";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-primary text-white px-[20px] md:px-[40px] py-[32px] md:py-[80px] border-t-2 border-white/15">
      {/* Desktop: 4-column grid */}
      <div className="hidden md:grid grid-cols-4 gap-[24px]">
        {/* Column 1: Logo + Tagline */}
        <div className="flex flex-col gap-6">
          <Image
            src={withBasePath("/images/shared/logo.png")}
            alt={siteConfig.businessName}
            width={240}
            height={80}
            className="h-[80px] w-auto object-contain"
          />
          <p className="font-body text-[16px] leading-[1.5] text-white/70">
            Reliable plumbing, heating, and cooling since 1916. Serving Central
            Massachusetts with honesty and expert tradecraft.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/garabedianplumbing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Column 2: Service Areas */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-[24px] font-semibold leading-[1.2] uppercase border-b border-white/20 pb-2">
            Service Areas
          </h4>
          <ul className="font-body text-[16px] leading-[1.5] text-white/70 flex flex-col gap-1">
            {siteConfig.serviceAreaList.map((area) => (
              <li key={area}>{area}, MA</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-[24px] font-semibold leading-[1.2] uppercase border-b border-white/20 pb-2">
            Hours
          </h4>
          <div className="font-body text-[16px] leading-[1.5] text-white/70">
            <p>{siteConfig.hours.weekday}</p>
            <p>{siteConfig.hours.saturday}</p>
            <p>{siteConfig.hours.sunday}</p>
            <p className="mt-4 font-bold text-surface-variant uppercase">
              {siteConfig.hours.emergency}
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-block bg-secondary text-white font-headline text-[22px] leading-[1.2] font-bold tracking-[0.02em] px-4 py-2 mt-2 hover:opacity-90 transition-opacity"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Column 4: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-[24px] font-semibold leading-[1.2] uppercase border-b border-white/20 pb-2">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="/emergency" className="font-body text-[16px] leading-[1.5] text-white/70 hover:text-white transition-all underline">
              Emergency Service
            </Link>
            <Link href="/privacy" className="font-body text-[16px] leading-[1.5] text-white/70 hover:text-white transition-all underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-[16px] leading-[1.5] text-white/70 hover:text-white transition-all underline">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Map */}
        <div className="col-span-4 mt-12 flex justify-center">
          <iframe
            title="Garabedian Plumbing & Heating location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.766433365285!2d-71.82141712335424!3d42.26216017120219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4068fa659ea6f%3A0x4819bce85f24e8eb!2sGarabedian%20Plumbing%20%26%20Heating%20Inc.!5e0!3m2!1sen!2sus!4v1780856738599!5m2!1sen!2sus"
            className="w-full max-w-[760px] h-[320px] border-0 grayscale-[0.15]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Bar */}
        <div className="col-span-4 mt-12 pt-8 border-t border-white/10 flex flex-row justify-between items-center gap-4">
          <p className="uppercase text-[12px] font-bold tracking-[0.15em] font-body text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}.{" "}
            {siteConfig.license}. {siteConfig.epa}.
          </p>
          <a
            href="https://gradydigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[12px] font-bold tracking-[0.15em] font-body text-white/50 transition-colors group/credit"
          >
            Built by{" "}
            <span className="text-white/70 group-hover/credit:text-surface-variant transition-colors">
              Grady Digital
            </span>
          </a>
        </div>
      </div>

      {/* Mobile: compact layout */}
      <div className="md:hidden flex flex-col gap-6">
        {/* Logo + Social centered */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src={withBasePath("/images/shared/logo.png")}
            alt={siteConfig.businessName}
            width={240}
            height={80}
            className="h-[80px] w-auto object-contain"
          />
          <p className="font-body text-[13px] leading-[1.5] text-white/70 text-center">
            Reliable plumbing, heating, and cooling since 1916.
          </p>
          <a
            href="https://www.facebook.com/garabedianplumbing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 hover:text-white transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Service Areas + Hours side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-headline text-[14px] font-semibold uppercase border-b border-white/20 pb-1 mb-2">
              Service Areas
            </h4>
            <ul className="font-body text-[12px] leading-[1.6] text-white/70 flex flex-col gap-0.5">
              {siteConfig.serviceAreaList.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-[14px] font-semibold uppercase border-b border-white/20 pb-1 mb-2">
              Hours
            </h4>
            <div className="font-body text-[12px] leading-[1.6] text-white/70">
              <p>Mon–Fri: 8–4:30 PM</p>
              <p>Sat–Sun: Closed</p>
              <p className="mt-2 font-bold text-surface-variant uppercase text-[11px]">
                24/7 Emergency
              </p>
              <a
                href={siteConfig.phoneHref}
                className="inline-block bg-secondary text-white font-headline text-[15px] font-bold tracking-[0.02em] px-3 py-1.5 mt-1.5 hover:opacity-90 transition-opacity"
              >
                {siteConfig.phone}
              </a>
            </div>
            <h4 className="font-headline text-[14px] font-semibold uppercase border-b border-white/20 pb-1 mb-2 mt-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-1 font-body text-[12px] text-white/70">
              <Link href="/emergency" className="hover:text-white underline">Emergency Service</Link>
              <Link href="/privacy" className="hover:text-white underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white underline">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Map */}
        <iframe
          title="Garabedian Plumbing & Heating location on Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.766433365285!2d-71.82141712335424!3d42.26216017120219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4068fa659ea6f%3A0x4819bce85f24e8eb!2sGarabedian%20Plumbing%20%26%20Heating%20Inc.!5e0!3m2!1sen!2sus!4v1780856738599!5m2!1sen!2sus"
          className="w-full h-[220px] border-0 grayscale-[0.15]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-2 text-center">
          <p className="uppercase text-[10px] font-bold tracking-[0.1em] font-body text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. {siteConfig.license}.
          </p>
          <a
            href="https://gradydigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[10px] font-bold tracking-[0.1em] font-body text-white/50 transition-colors group/credit"
          >
            Built by{" "}
            <span className="text-white/70 group-hover/credit:text-surface-variant transition-colors">
              Grady Digital
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
