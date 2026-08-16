import Budgeting from "@/components/features/budgeting";
import DigitalOnboarding from "@/components/features/digital-onboarding";
import ECommerce from "@/components/features/e-commerce";
import FeaturesHero from "@/components/features/hero";
import MiniApps from "@/components/features/mini-apps";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <DigitalOnboarding />
      <MiniApps />
      <Budgeting />
      <ECommerce />
    </>
  );
};

export default page;
