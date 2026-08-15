import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full lg:h-dvh h-[105dvh] relative">
      <div
        className="absolute left-0 right-0 inset-0 bg-center bg-cover h-full lg:h-[102dvh]"
        style={{
          backgroundImage: "url('/images/mountain.webp')",
        }}
      >
        <div className="absolute top-0 inset-0 bg-linear-to-b from-[#1a3976] via-[#466692] to-[#F7F7F7] opacity-85 lg:pb-0"></div>
      </div>

      <div className="absolute top-32 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center space-y-3.5">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase text-center animate-fade-in-up">
            Dashen Bank Super App
          </h1>
          <p
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase text-center leading-tight animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            Secure, Fast, and Easy
          </p>
          <div
            className="text-center space-y-1 text-xs text-white/95 max-w-sm sm:max-w-md animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <p>Secure, fast banking in Dashen Bank Super App.</p>
            <p>
              Check balances, transfer funds, pay bills—all in one simple place.
            </p>
          </div>
        </div>

        <div
          className="mt-10 sm:mt-14 lg:mt-16 flex justify-center w-full animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <Image
            src="/images/mobile-app-mockup.webp"
            alt="Mockup"
            width={1000}
            height={1000}
            className="w-72 h-auto sm:w-105 md:w-120 lg:w-147.5 lg:h-144 object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
