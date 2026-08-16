import Image from "next/image";

const ECommerce = () => {
  return (
    <div className="relative bg-black  py-12 lg:py-24 overflow-hidden flex items-center">
      {/* Primary color gradients on left and right sides */}
      <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-md h-112 rounded-full bg-primary/80 blur-[200px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-6 sm:px-10 lg:px-8 h-full mx-auto">
        <div className="relative max-w-xl text-center space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            E-Commerce
          </h1>
          <p className="text-xs md:text-sm text-[#C5C5C5] ">
            Help users manage their money effortlessly with instant transfers,
            clear budgeting, and easy payments—all in one place.
          </p>
        </div>
        <Image
          src={"/images/ecommerce-feature.webp"}
          alt="Mini Apps"
          width={700}
          height={700}
          className="relative md:w-187.5 h-auto object-contain my-10 animate-float-nid select-none"
        />
      </div>
    </div>
  );
};

export default ECommerce;
