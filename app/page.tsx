import Hero from "@/components/landing/hero";
import AccountLink from "@/components/landing/account-link";
import AppFeatures from "@/components/landing/app-features";
import NumbersInfo from "@/components/landing/numbers-info";

const page = () => {
  return (
    <main>
      <Hero />
      <AccountLink />
      <AppFeatures />
      <NumbersInfo />
    </main>
  );
};

export default page;
