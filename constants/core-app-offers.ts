import { Offer } from "@/types/types";
import { MessageSquare, Palette, Store, UserPlus } from "lucide-react";

export const coreAppOffers: Offer[] = [
  {
    icon: UserPlus,
    name: "Create a bank account at the comfort of your home!",
    description:
      "Dashen Bank Super App makes opening an account simple. Use your Fayda Digital ID to verify your identity from anywhere. Once approved, enjoy immediate access to secure transfers, account management, payments, and all essential banking services in one trusted app.",
    image: "/images/create-account-mobile-mockup.webp",
  },
  {
    icon: Palette,
    name: "Update your Visual Preference",
    description:
      "Dashen Bank Super App gives you full control over your app experience. Switch between light and dark themes instantly to match your mood, time of day, or eye comfort. Whether you're checking balances during the day or managing payments at night, the app adapts to your visual preference while keeping all your banking secure and accessible.",
    image: "/images/theme-mobile-mockup-4.webp",
  },
  {
    icon: Store,
    name: "Browse, Shop, and Pay from Your Favorite Merchants",
    description:
      "Dashen Bank Super App connects you to your favorite stores and services directly inside the app. Browse partner merchants, explore products and offers, and pay securely without switching between apps. From everyday shopping to essential services, everything you need stays connected in one secure, convenient platform.",
    image: "/images/shop-mobile-mockup-5.webp",
  },
  {
    icon: MessageSquare,
    name: "Chat, Share, and Connect with Friends In-App",
    description:
      "Stay in touch without leaving Dashen Superapp—send messages, share payment confirmations, and keep conversations flowing with friends all within the app. Quick, secure, and convenient, it's the easiest way to stay connected while managing your finances at the same time.",
    image: "/images/chat-mobile-mockup.webp",
  },
];
