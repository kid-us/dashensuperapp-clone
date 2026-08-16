import Budgeting from "@/components/features/budgeting";
import DigitalOnboarding from "@/components/features/digital-onboarding";
import ECommerce from "@/components/features/e-commerce";
import FeaturesHero from "@/components/features/features-hero";
import InAppChat from "@/components/features/in-app-chat";
import MiniApps from "@/components/features/mini-apps";
import OfflineBanking from "@/components/features/offline-banking";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <DigitalOnboarding />
      <MiniApps />
      <Budgeting />
      <ECommerce />
      <InAppChat />
      <OfflineBanking />
    </>
  );
};

export default page;
