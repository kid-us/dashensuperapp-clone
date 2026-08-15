"use client";

import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  feature: {
    id: string;
    label: string;
    icon: LucideIcon;
  };
  active: boolean;
  left: number;
  top: number;
}

export default function FeatureCard({
  feature,
  active,
  left,
  top,
}: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <div
      className="absolute z-20 transition-all duration-500 ease-out"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: `translate(-50%, -50%) scale(${active ? 1.08 : 1})`,
      }}
    >
      <div
        className={[
          "flex flex-col justify-center items-center gap-1.5 rounded-xl bg-white",
          "p-2 sm:p-3 border border-slate-100",
          "transition-all duration-500",
          active
            ? "border-[#0D39A5]/80 shadow-[0_10px_24px_-8px_rgba(47,53,151,0.45)] ring-4 ring-[#0D39A5]/20"
            : "hover:border-slate-200 shadow-[0_4px_14px_-6px_rgba(20,20,50,0.1)]",
        ].join(" ")}
      >
        <span
          className={[
            "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full",
            "transition-all duration-500",
            active
              ? "bg-[#0D39A5] text-white shadow-[0_4px_10px_-2px_rgba(47,53,151,0.6)]"
              : "bg-[#2f3597]/10 text-[#0D39A5]/70",
          ].join(" ")}
        >
          <Icon
            className="w-4 h-4 sm:w-5 sm:h-5"
            strokeWidth={active ? 2.5 : 2}
          />
        </span>
        <span
          className={[
            "hidden md:inline text-[11px] sm:text-[12px] leading-tight transition-colors duration-500",
            active
              ? "font-semibold text-[#171a2e]"
              : "font-medium text-[#3a3d52]",
          ].join(" ")}
        >
          {feature.label}
        </span>
      </div>
    </div>
  );
}
