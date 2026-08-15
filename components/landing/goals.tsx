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

// Goals
const ourGoals = [
  {
    title: "Empower Financial Freedom",
    description:
      "Dashen Bank Super App brings budgeting, account management, and secure payments together so you can make confident choices about your money without complexity or confusion.",
    image: "/images/model-1.webp",
  },
  {
    title: "Simplify Daily Life",
    description:
      "Dashen Bank Super App makes checking balances, paying bills, and transferring funds quick and intuitive, so you spend less time managing money and more time living your life.",
    image: "/images/model-2.webp",
  },
  {
    title: "Connect People and Services",
    description:
      "Dashen Bank Super App links your financial needs with everyday services like payments and transfers, so everything you rely on stays connected in a single, secure platform.",
    image: "/images/model-3.webp",
  },
];

const Goals = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <section className="max-w-6xl mx-auto w-full flex items-center flex-col py-16 md:py-24 px-6 sm:px-6 lg:px-8">
      <Image
        src={"/images/goals.svg"}
        height={500}
        width={500}
        className="w-20"
        alt="Target"
      />
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase leading-tight mt-8 text-center text-slate-900">
        What&apos;s Our Goal?
      </h2>
      <p className="text-center text-slate-500 w-full max-w-xl text-sm sm:text-base mb-10 sm:mb-12">
        Carry Dashen Super App with you wherever you go. Our mobile app provides
        a smooth and secure banking experience.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {ourGoals.map((goal, index) => {
          return (
            <div
              key={index}
              className={`group border  rounded-2xl overflow-hidden pt-8 bg-white flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-3 px-6">
                <h2 className="text-center text-lg font-semibold mb-3 uppercase text-slate-900">
                  {goal.title}
                </h2>
                <p className="text-center text-sm text-slate-500 leading-relaxed">
                  {goal.description}
                </p>
              </div>
              <div className="overflow-hidden w-full">
                <Image
                  src={goal.image}
                  alt={goal.title}
                  width={500}
                  height={500}
                  className={`w-60 mx-auto object-cover ${index === 2 ? "scale-140 group-hover:scale-145 mb-14" : "group-hover:scale-105 mt-7 mb-0"} transition-transform duration-700`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;
