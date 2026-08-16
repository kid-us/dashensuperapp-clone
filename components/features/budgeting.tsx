"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { budgetingInfos } from "@/constants/budgeting";

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

const Budgeting = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              Budgeting Made Easy
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12"
        >
          {budgetingInfos.map((budget, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border border-slate-100/50 hover:border-slate-200/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                {budget.name !== "" && (
                  <h3 className="uppercase text-base sm:text-lg font-semibold leading-snug text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#0D39A5]">
                    {budget.name}
                  </h3>
                )}
                {budget.description !== "" && (
                  <p className="text-xs sm:text-xs my-3 sm:my-4 text-zinc-500 leading-relaxed font-normal">
                    {budget.description}
                  </p>
                )}
              </div>
              <div className="relative overflow-hidden w-full flex-1 flex items-end justify-center bg-[#396BDB33] p-4 rounded-2xl">
                <div className="bg-white/30 p-3 rounded-3xl">
                  <Image
                    src={budget.image}
                    alt={budget.name || "Digital Onboarding Mockup"}
                    width={1000}
                    height={1000}
                    className={`w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 rounded-3xl`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
