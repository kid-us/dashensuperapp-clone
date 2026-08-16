"use client";

import Image from "next/image";
import { digitalOnboarding } from "@/constants/digital-onboarding";
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

const DigitalOnboarding = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              Digital Onboarding
            </h2>
            <p className="mt-3 text-sm text-slate-500 md:max-w-xl leading-relaxed">
              Help users manage their money effortlessly with instant transfers,
              clear budgeting, and easy payments—all in one place.
            </p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-12"
        >
          {digitalOnboarding.map((digital, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border border-slate-100/50 hover:border-slate-200/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between ${
                index === 1
                  ? "col-span-1 lg:col-span-4"
                  : "col-span-1 lg:col-span-3 p-6 sm:p-8"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                {digital.name !== "" && (
                  <h3 className="uppercase text-base sm:text-lg font-semibold leading-snug text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#0D39A5]">
                    {digital.name}
                  </h3>
                )}
                {digital.description !== "" && (
                  <p className="text-xs sm:text-sm my-3 sm:my-4 text-zinc-500 leading-relaxed font-normal">
                    {digital.description}
                  </p>
                )}
              </div>
              <div className="relative overflow-hidden w-full flex-1 flex items-end justify-center rounded-xl">
                <Image
                  src={digital.image}
                  alt={digital.name || "Digital Onboarding Mockup"}
                  width={700}
                  height={700}
                  className={`w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 ${
                    index === 1 ? "h-full" : "mt-8 lg:mt-16 rounded-xl"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalOnboarding;
