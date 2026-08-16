import Budgeting from "@/components/features/budgeting";
import DigitalOnboarding from "@/components/features/digital-onboarding";
import FeaturesHero from "@/components/features/hero";
import MiniApps from "@/components/features/mini-apps";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <DigitalOnboarding />
      <MiniApps />
      <Budgeting />
    </>
  );
};

export default page;
