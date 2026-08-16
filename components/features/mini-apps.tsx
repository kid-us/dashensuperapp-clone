import Image from "next/image";

const MiniApps = () => {
  return (
    <div className="relative bg-black  py-12 lg:py-24 overflow-hidden flex items-center">
      {/* Primary color gradients on left and right sides */}
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-6 sm:px-10 lg:px-8 h-full mx-auto">
        <h2 className="relative text-center text-5xl md:text-7xl font-bold bg-linear-to-b from-[#FFFFFF] to-[#012169] bg-clip-text text-transparent ">
          200+ <br />
          MINI APPS
        </h2>
        <Image
          src={"/images/mini-apps.webp"}
          alt="Mini Apps"
          width={700}
          height={700}
          className="relative md:w-187.5 h-auto object-contain my-10 select-none"
        />
        <p className="relative text-xs md:text-base text-[#C5C5C5] max-w-xl text-center">
          From booking services to paying bills and shopping online, Dashen
          Superapp brings you 200+ mini apps designed to simplify every part of
          your daily life. One app, endless possibilities.
        </p>
      </div>
    </div>
  );
};

export default MiniApps;
