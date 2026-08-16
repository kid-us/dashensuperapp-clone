import { AppStoreLinks, LinkTypes } from "../types/types";

export const navLinks: LinkTypes[] = [
  { name: "Home", url: "/" },
  { name: "Features", url: "/features" },
  { name: "FAQ", url: "/faq" },
  { name: "Blogs", url: "/blogs" },
  { name: "Help Desk", url: "/help-desk" },
  { name: "Contact Us", url: "/contact-us" },
];

export const appStoreLinks: AppStoreLinks[] = [
  {
    name: "Google Play",
    url: "#",
    icon: "/icons/play-store.png",
  },
  {
    name: "App Store",
    url: "#",
    icon: "/icons/app-store.png",
  },
];
