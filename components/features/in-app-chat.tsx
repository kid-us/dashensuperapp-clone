"use client";

import { inAppChatInfos } from "@/constants/in-app-chat";
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

const InAppChat = () => {
  const [containerRef, isVisible] = useIntersectionVisible();

  return (
    <div className="relative overflow-hidden bg-linear-to-r from-[#eef1ff] via-white to-[#e9edff] border-t border-slate-100">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-32 bottom-45 h-100 w-100 rounded-full bg-[#d9defb]/50 blur-3xl" />

      <div className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center space-y-4 mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            In-App Chatting
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Help users manage their money effortlessly with instant transfers,
            clear budgeting, and easy payments—all in one place.
          </p>
        </div>

        {/* Layout Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-11 items-center gap-8 lg:gap-10"
        >
          {/* Left Cards */}
          <div className="w-full col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 lg:space-y-10">
            {inAppChatInfos.slice(0, 2).map((chat, index) => (
              <div
                key={index}
                className={`group bg-white p-6 sm:p-8 border border-slate-100 rounded-2xl rounded-tl-none shadow-sm hover:shadow-xl hover:border-slate-200/60 hover:-translate-y-1.5 transition-all duration-700 ease-out select-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-90 pointer-events-none"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D39A5] group-hover:bg-[#0D39A5] group-hover:text-white transition-all duration-500 shrink-0">
                  <chat.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#0D39A5] transition-colors duration-300">
                    {chat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {chat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image Mockup */}
          <div
            className={`w-full col-span-1 lg:col-span-3 flex justify-center max-w-70 lg:max-w-none mx-auto py-6 lg:py-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95 pointer-events-none"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Image
              src="/images/in-app-chatting.webp"
              width={700}
              height={700}
              alt="In App Chat"
              className="h-auto w-full object-contain select-none animate-float-mockup"
              priority
            />
          </div>

          {/* Right Cards */}
          <div className="w-full col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-0 lg:space-y-10">
            {inAppChatInfos.slice(2, 4).map((chat, index) => (
              <div
                key={index}
                className={`group bg-white p-6 sm:p-8 border border-slate-100 rounded-2xl rounded-tr-none shadow-sm hover:shadow-xl hover:border-slate-200/60 hover:-translate-y-1.5 transition-all duration-700 ease-out select-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-90 pointer-events-none"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D39A5] group-hover:bg-[#0D39A5] group-hover:text-white transition-all duration-500 shrink-0">
                  <chat.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#0D39A5] transition-colors duration-300">
                    {chat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {chat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InAppChat;
