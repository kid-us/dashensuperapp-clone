const FeaturesHero = () => {
  return (
    <div className="flex flex-col">
      <div className="z-10 w-full min-h-screen flex flex-col relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/feature-hero-bg.webp')",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at left center, rgba(57, 107, 219, 0.333) 0%, transparent 60%), radial-gradient(circle at right center, rgba(57, 107, 219, 0.333) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#F7F7F7D9]/85"></div>

        <div className="relative z-10 text-black flex flex-col items-center justify-center min-h-screen gap-6 px-4">
          <h1 className="text-4xl md:text-6xl text-center font-bold leading-tight">
            The powerful <br />
            Features that makes
            <br />
            <span className="bg-linear-to-b from-black to-[#1752D9] bg-clip-text text-transparent">
              Dashen (A) Superapp
            </span>
          </h1>
          <p className="text-base text-[#686C7B] max-w-lg text-center leading-relaxed">
            The powerful features that make Dashen a true Superapp—bringing
            banking, shopping, and communication together into one seamless
            experience designed to simplify and enhance everyday life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
