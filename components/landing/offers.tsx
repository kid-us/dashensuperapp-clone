"use client";

import { coreAppOffers } from "@/constants/core-app-offers";
import { appStoreLinks } from "@/constants/nav-links";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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

const CoreAppOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerRef, isVisible] = useIntersectionVisible();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreAppOffers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-linear-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-slate-900 leading-tight">
            Everything you need in one powerful app
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            At Dashen Bank, we focus on providing secure, reliable, and
            convenient banking combined with premium lifestyle services to meet
            your everyday needs.
          </p>

          {/* App Store Download Badges CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 select-none">
            {appStoreLinks.map((app) => (
              <Link
                href={app.url}
                key={app.name}
                className="flex items-center gap-3 border border-slate-200 rounded-2xl px-5 py-2.5 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 hover:shadow-xs md:w-auto w-48"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-slate-400 block font-normal uppercase tracking-wider">
                    {app.name === "Google Play"
                      ? "Get it on"
                      : "Download on the"}
                  </span>
                  <span className="text-sm font-semibold">{app.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Layout Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Interactive Image Showcase Column (Sticky, Desktop Only) */}
          <div
            className={`hidden lg:flex lg:col-span-5 relative justify-center items-center transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Glowing background circles for aurora effect */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-400/20 blur-3xl -z-10 animate-pulse duration-4000"></div>
            <div className="absolute w-60 h-60 rounded-full bg-amber-400/10 blur-3xl -z-10 translate-x-20 -translate-y-20 animate-pulse duration-3000"></div>

            <div className="lg:sticky top-28 w-full aspect-9/18.5 relative select-none animate-float-mockup ">
              {/* Image Container with rounded corners */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-transparent">
                {coreAppOffers.map((offer, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === activeIndex
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-8 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      sizes="320px"
                      className={`object-contain ${idx === 0 ? "scale-105" : "scale-60"}`}
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Cards Column */}
          <div className="col-span-1 lg:col-span-7 space-y-5">
            {coreAppOffers.map((offer, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative p-6 sm:p-5 rounded-r-2xl cursor-pointer border select-none transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    isActive
                      ? "bg-white border-slate-100 shadow-[0_12px_36px_-12px_rgba(13,57,165,0.08)] scale-[1.01]"
                      : "bg-transparent border-transparent hover:bg-slate-50/70"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Glowing Active Border Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-[#0D39A5] to-blue-500 rounded-l-lg transition-transform duration-500 origin-top ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  ></div>

                  <div className="flex flex-col gap-4 items-start">
                    {/* Icon Container */}
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-xl shrink-0 transition-all duration-500 ${
                        isActive
                          ? "bg-linear-to-br from-[#0D39A5] to-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-blue-50 text-[#0D39A5] group-hover:scale-105"
                      }`}
                    >
                      {offer.icon && <offer.icon className="w-5 h-5" />}
                    </div>

                    {/* Text Details */}
                    <div className="space-y-2">
                      <h3
                        className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {offer.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreAppOffers;
