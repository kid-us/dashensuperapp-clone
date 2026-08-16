import type { Metadata } from "next";
import Budgeting from "@/components/features/budgeting";
import DigitalOnboarding from "@/components/features/digital-onboarding";
import ECommerce from "@/components/features/e-commerce";
import FeaturesHero from "@/components/features/features-hero";
import InAppChat from "@/components/features/in-app-chat";
import MiniApps from "@/components/features/mini-apps";
import OfflineBanking from "@/components/features/offline-banking";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the powerful features of Dashen Bank Super App: digital onboarding with Fayda ID, budgeting tracking, 200+ mini apps, cashless e-commerce, in-app messaging, and offline USSD banking.",
};

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
