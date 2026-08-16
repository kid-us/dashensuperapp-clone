import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="z-10 w-full min-h-screen flex flex-col relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/mountain.webp')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#1a3976] via-[#466692] to-[#F7F7F7] opacity-85"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#F7F7F7] to-transparent pointer-events-none"></div>

        <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8  pb-6 mt-36 flex-1">
          <div className="max-w-3xl space-y-3.5">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white uppercase text-center animate-fade-in-up">
              Dashen Bank Super App
            </h1>
            <p
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase text-center leading-tight animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              Secure, Fast, and Easy
            </p>
            <div
              className="text-center space-y-1 text-xs text-white/95 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <p>Secure, fast banking in Dashen Bank Super App.</p>
              <p>
                Check balances, transfer funds, pay bills—all in one simple
                place.
              </p>
            </div>
          </div>
          {/* Desktop Hero Image */}
          <div
            className="relative w-full hidden sm:flex justify-center mt-4 sm:mt-8 pb-8 animate-fade-in-up"
            style={{ animationDelay: "450ms" }}
          >
            <Image
              src="/images/mobile-app-mockup.webp"
              alt="Mockup"
              width={1000}
              height={1000}
              className="w-full px-6 md:px-0 lg:max-w-lg xl:max-w-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Mobile-only Hero Image */}
        <div
          className="relative w-full sm:hidden flex justify-center mt-4 sm:mt-8 pb-8 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <Image
            src="/images/mobile-app-mockup.webp"
            alt="Mockup"
            width={1000}
            height={1000}
            className="w-full px-6 md:px-0 lg:max-w-lg xl:max-w-xl object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
