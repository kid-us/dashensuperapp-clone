"use client";

import { useState, useEffect, useRef } from "react";

function useIntersectionVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible] as const;
}

const OfflineBanking = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="relative w-full min-h-[60dvh] md:min-h-[75dvh] flex items-center justify-center md:justify-end px-6 sm:px-12 lg:px-24 py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/offline-banking.webp')",
        }}
      ></div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/35"></div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className={`relative z-10 flex flex-col items-center md:items-end text-center md:text-right max-w-lg text-white space-y-4 md:space-y-5 transition-all duration-1000 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white tracking-tight">
          Offline Banking
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-none text-white/90">
          USSD
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-white/80 max-w-sm">
          Stay connected to your finances even without internet access. With
          Dashen Superapp&apos;s USSD service, you can check balances, transfer
          money, and make payments anytime, anywhere—no data needed. Banking
          made truly accessible for everyone.
        </p>
        <div
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight select-all whitespace-nowrap mt-2"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(255, 255, 255) 37.98%, rgba(1, 33, 105, 0.7) 89.56%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          *675#
        </div>
      </div>
    </div>
  );
};

export default OfflineBanking;
