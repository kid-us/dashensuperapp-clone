import { LinkTypes } from "../types/types";

export const footerLinks: LinkTypes[] = [
  // Quick Links
  { name: "Home", url: "/", section: "Quick Links" },
  { name: "Features", url: "/features", section: "Quick Links" },
  { name: "Faq", url: "/faq", section: "Quick Links" },

  // Home
  { name: "Hero", url: "/#hero", section: "Home" },
  {
    name: "Feature Page",
    url: "/#feature",
    section: "Home",
  },
  {
    name: "Faq Page",
    url: "/#faq",
    section: "Home",
  },

  // Features
  { name: "Enterprise", url: "/features#enterprise", section: "Features" },
  { name: "Pricing", url: "/features#pricing", section: "Features" },
  { name: "Compare Features", url: "/features#compare", section: "Features" },

  // FAQ
  { name: "How It Works", url: "/faq#how-it-works", section: "FAQ" },
  { name: "Pricing FAQ", url: "/faq#pricing-faq", section: "FAQ" },
  { name: "General FAQ", url: "/faq#general-faq", section: "FAQ" },
  { name: "Support", url: "/faq#support", section: "FAQ" },
];
