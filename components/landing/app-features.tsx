"use client";

import { useEffect, useState, useRef } from "react";
import {
  Landmark,
  Smartphone,
  Clock,
  PieChart,
  Wallet,
  CreditCard,
  HandCoins,
  MessagesSquare,
  ArrowRight,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./feature-card";

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

// Feature cards, listed in clockwise order starting from the top. Position
// is computed (not hard-coded) so the ring stays perfectly circular and
// scales with the container at any size.
const FEATURES = [
  { id: "bank", label: "Send To Other Bank", icon: Landmark },
  { id: "topup", label: "Mobile Topup", icon: Smartphone },
  { id: "schedule", label: "Schedule Payments", icon: Clock },
  { id: "budget", label: "Budget Tracker", icon: PieChart },
  { id: "request", label: "Request Money", icon: HandCoins },
  { id: "micro", label: "Micro Finance", icon: CreditCard },
  { id: "wallet", label: "Send To Wallet", icon: Wallet },
  { id: "chat", label: "Chat Banking", icon: MessagesSquare },
];

// Ring geometry, all in % of the square container so it's fully responsive.
const CARD_RADIUS = 35; // how far the cards sit from center
const IMAGE_RADIUS = 15; // radius of the center image -> where lines must land
const START_ANGLE = -90; // 0deg = 3 o'clock, so -90 starts at 12 o'clock
const ANGLE_STEP = 360 / FEATURES.length;

function pointOnRing(index: number, radius: number) {
  const angle = ((START_ANGLE + index * ANGLE_STEP) * Math.PI) / 180;
  return {
    left: 50 + radius * Math.cos(angle),
    top: 50 + radius * Math.sin(angle),
  };
}

const AppFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [bankingRef, bankingVisible] = useIntersectionVisible();
  const [budgetingRef, budgetingVisible] = useIntersectionVisible();
  const [chattingRef, chattingVisible] = useIntersectionVisible();
  const [ecommerceRef, ecommerceVisible] = useIntersectionVisible();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % FEATURES.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto py-12 md:py-24 px-6 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              Experience the convenience of making multiple{" "}
              <br className="hidden sm:block" /> payments with one app.
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Get Everything You Need in One App
            </p>
          </div>
          <Link
            href={"/features"}
            className="flex text-primary font-medium text-sm items-center gap-1 border py-3 px-6 rounded-full hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 group whitespace-nowrap bg-white"
          >
            See All Features{" "}
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-12 lg:gap-8 items-center">
          {/* Diagram — square, responsive, with breathing room so cards never clip */}
          <div className="col-span-1 lg:col-span-2 w-full max-w-125 lg:max-w-none mx-auto">
            <div className="relative w-full aspect-square select-none overflow-visible">
              {/* Connector lines: every line starts on the image's edge */}
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {FEATURES.map((f, i) => {
                  const card = pointOnRing(i, CARD_RADIUS);
                  const edge = pointOnRing(i, IMAGE_RADIUS);
                  const isActive = i === activeIndex;
                  return (
                    <line
                      key={f.id}
                      x1={edge.left}
                      y1={edge.top}
                      x2={card.left}
                      y2={card.top}
                      vectorEffect="non-scaling-stroke"
                      stroke={isActive ? "#0D39A5" : "#d7d9e6"}
                      strokeWidth={isActive ? 1.4 : 1}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  );
                })}
              </svg>

              {/* Center image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="relative w-[25%] aspect-square">
                  <Image
                    src="/images/logo.svg"
                    alt="App Features"
                    fill
                    sizes="(max-width: 640px) 40vw, 220px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Feature cards, evenly spaced around the ring */}
              {FEATURES.map((f, i) => {
                const pos = pointOnRing(i, CARD_RADIUS);
                return (
                  <FeatureCard
                    key={f.id}
                    feature={f}
                    active={i === activeIndex}
                    left={pos.left}
                    top={pos.top}
                  />
                );
              })}
            </div>
          </div>

          {/* Side descriptions */}
          <div className="space-y-10 w-full">
            <div
              ref={bankingRef}
              className={`space-y-3 bg-white p-6 rounded-2xl ${bankingVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D39A5] text-white">
                <Landmark size={20} strokeWidth={2.5} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">Banking</h3>
              <p className="text-xs md:text-[13.5px] text-zinc-500 leading-relaxed">
                From opening accounts to managing cards and tracking expenses,
                Dashen Bank Super App brings the full banking experience to your
                fingertips. Every interaction is simplified so checking
                balances, paying bills, and moving money feels effortless and
                fits around your lifestyle, not the other way around.
              </p>
            </div>
            <div
              ref={budgetingRef}
              className={`space-y-3 bg-white p-6 rounded-2xl ${budgetingVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D39A5] text-white">
                <PieChart size={20} strokeWidth={2.5} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">
                Budgeting
              </h3>
              <p className="text-xs md:text-[13.5px] text-zinc-500 leading-relaxed">
                Every transaction becomes an insight. Set spending limits,
                review your money flow, and track where every birr goes. Dashen
                Bank Super App gives you clear control over your finances so you
                can stay ahead of your spending and plan with confidence instead
                of wondering where your money went.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-12">
          <div
            ref={chattingRef}
            className={`space-y-3 bg-white p-6 rounded-2xl ${chattingVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D39A5] text-white">
              <MessagesSquare size={20} strokeWidth={2.5} />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">
              In App Chatting
            </h3>
            <p className="text-xs md:text-[13.5px] text-zinc-500 leading-relaxed">
              Keep conversations and confirmations together in one secure
              thread. Share payment details, send receipts, and stay connected
              without leaving the app. Dashen Bank Super App makes banking chats
              feel as simple and natural as everyday messaging, so you always
              have the full picture right where you need it.
            </p>
          </div>
          <div
            ref={ecommerceRef}
            className={`space-y-3 bg-white p-6 rounded-2xl ${ecommerceVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D39A5] text-white">
              <Store size={20} strokeWidth={2.5} />
            </div>
            <h3 className="font-semibold text-lg text-slate-900">E-Commerce</h3>
            <p className="text-xs md:text-[13.5px] text-zinc-500 leading-relaxed">
              Browse partner stores, shop online, and pay securely—all from
              inside Dashen Bank Super App. No need to jump between apps or
              websites when you want to buy what you need. With integrated
              payments and the same security you trust for banking, your
              shopping experience stays connected and simple.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
