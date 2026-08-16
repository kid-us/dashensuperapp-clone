import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AccountLink = () => {
  return (
    <div className="relative bg-black min-h-118.5 h-auto lg:h-118.5 py-12 lg:py-0 overflow-hidden flex items-center">
      {/* Primary color gradients on left and right sides */}
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-6 sm:px-10 lg:px-8 h-full mx-auto text-white">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 lg:gap-28 items-center justify-center w-full">
          <div className="flex items-center justify-center col-span-1 select-none">
            <div className="w-16 sm:w-22 lg:w-28 overflow-visible">
              <Image
                src="/icons/fayda.webp"
                alt="Section Icon"
                width={1000}
                height={1000}
                className="w-full h-auto animate-float-nid"
              />
            </div>
            <div className="w-12 sm:w-16 lg:w-20 overflow-visible">
              <Image
                src="/icons/chain.png"
                alt="Section Icon"
                width={1000}
                height={1000}
                className="w-full h-auto animate-pulse-link ms-1.5 sm:ms-2"
              />
            </div>
            <div className="w-20 sm:w-26 lg:w-32 overflow-visible">
              <Image
                src="/icons/dashen.png"
                alt="Section Icon"
                width={1000}
                height={1000}
                className="w-full h-auto scale-140 animate-float-bank"
              />
            </div>
          </div>
          <div className="space-y-4 col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.2] relative">
              Link Your Dashen Bank <br className="hidden lg:block" /> Account
              with Your National ID (Fayda)
            </h1>
            <p className="text-xs text-white max-w-md lg:max-w-none">
              Use your Fayda digital ID to link and verify your Dashen Bank
              account from anywhere and anytime.
            </p>

            <Button className="bg-[#1349C5] rounded-full px-5 h-12 text-sm mt-6 group cursor-pointer relative">
              Link your Fayda{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-all ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLink;
