import Hero from "@/components/landing/hero";
import AccountLink from "@/components/landing/account-link";
import AppFeatures from "@/components/landing/app-features";
import NumbersInfo from "@/components/landing/numbers-info";
import Goals from "@/components/landing/goals";
import CoreAppOffers from "@/components/landing/offers";

const page = () => {
  return (
    <main>
      <Hero />
      <AccountLink />
      <AppFeatures />
      <NumbersInfo />
      <Goals />
      <CoreAppOffers />
    </main>
  );
};

export default page;
