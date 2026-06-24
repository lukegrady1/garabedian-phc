"use client";

import { useEffect, useRef, useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.766433365285!2d-71.82141712335424!3d42.26216017120219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4068fa659ea6f%3A0x4819bce85f24e8eb!2sGarabedian%20Plumbing%20%26%20Heating%20Inc.!5e0!3m2!1sen!2sus!4v1780856738599!5m2!1sen!2sus";

/**
 * Lazily mounts the Google Maps embed only when it scrolls near the viewport.
 * The heavy third-party iframe never loads on initial page render, so it does
 * not slow down the rest of the site. A placeholder reserves the space to
 * avoid layout shift.
 */
export function MapEmbed({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show]);

  return (
    <div ref={ref} className={className}>
      {show ? (
        <iframe
          title="Garabedian Plumbing & Heating location on Google Maps"
          src={MAP_SRC}
          className="w-full h-full border-0 grayscale-[0.15]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="w-full h-full bg-white/5 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-body text-[12px] leading-none tracking-[0.15em] font-bold uppercase text-white/40">
            Loading map…
          </span>
        </div>
      )}
    </div>
  );
}
