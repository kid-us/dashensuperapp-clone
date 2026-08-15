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

interface AnimatedNumberProps {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

const AnimatedNumber = ({
  end,
  decimals = 0,
  suffix = "",
  duration = 2000,
  trigger,
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easedProgress = progress * (2 - progress); // easeOutQuad
      const currentVal = easedProgress * end;

      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const NumbersInfo = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="w-full relative min-h-150 h-auto lg:h-[80dvh] py-16 lg:py-0 flex items-center justify-center overflow-hidden">
      <div
        className="absolute left-0 right-0 inset-0 bg-center bg-cover h-full"
        style={{
          backgroundImage: "url('/images/galaxy.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute bg-black/60 top-0 right-0 left-0 bottom-0"></div>
      </div>

      <div className="relative flex items-center justify-center h-full w-full">
        <div className="text-center w-full max-w-7xl px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 uppercase leading-tight"
            style={{
              background:
                "linear-gradient(275.09deg, rgb(255, 255, 255) 24.32%, rgb(87, 104, 255) 87.53%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Numbers Speak <br /> for themselves!
          </h2>

          {/* Numbers */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-5xl mx-auto"
          >
            <div className="text-center">
              <p
                className="text-[72px] sm:text-[90px] md:text-[100px] lg:text-[120px] font-bold text-white leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(255, 255, 255) 37.98%, rgba(2, 19, 108, 0.7) 89.56%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedNumber
                  end={2}
                  decimals={0}
                  suffix="M+"
                  trigger={isVisible}
                />
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wider">
                Active Monthly Users
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[72px] sm:text-[90px] md:text-[100px] lg:text-[120px] font-bold text-white leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(255, 255, 255) 37.98%, rgba(2, 19, 108, 0.7) 89.56%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedNumber
                  end={1.8}
                  decimals={1}
                  suffix="B+"
                  trigger={isVisible}
                />
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wider">
                Daily Transactions
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-[72px] sm:text-[90px] md:text-[100px] lg:text-[120px] font-bold text-white leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(255, 255, 255) 37.98%, rgba(2, 19, 108, 0.7) 89.56%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedNumber
                  end={200}
                  decimals={0}
                  suffix="+"
                  trigger={isVisible}
                />
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wider">
                Mini Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersInfo;
