"use client";

import Image from "next/image";
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

const MiniApps = () => {
  const [containerRef, isVisible] = useIntersectionVisible();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const endValue = 200;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // cubic ease out curve for natural deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative bg-black py-12 lg:py-24 overflow-hidden flex items-center"
    >
      {/* Primary color gradients on left and right sides */}
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-6 sm:px-10 lg:px-8 h-full mx-auto">
        <h2 className="relative text-center text-5xl md:text-7xl font-bold bg-linear-to-b from-[#FFFFFF] to-[#012169] bg-clip-text text-transparent transition-all duration-1000">
          {count}+ <br />
          MINI APPS
        </h2>
        <Image
          src="/images/mini-apps.webp"
          alt="Mini Apps"
          width={700}
          height={700}
          className={`relative md:w-187.5 h-auto object-contain my-10 select-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95 pointer-events-none"
          }`}
          style={{ transitionDelay: "200ms" }}
        />
        <p
          className={`relative text-xs md:text-base text-[#C5C5C5] max-w-xl text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          From booking services to paying bills and shopping online, Dashen
          Superapp brings you 200+ mini apps designed to simplify every part of
          your daily life. One app, endless possibilities.
        </p>
      </div>
    </div>
  );
};

export default MiniApps;
