import { InAppChat } from "@/types/types";
import { Coins, ShieldCheck, MessageCircle, HandCoins } from "lucide-react";

export const inAppChatInfos: InAppChat[] = [
  {
    icon: Coins,
    name: "Send and Receive Payments Instantly",
    description:
      "Transfer money directly through chat in just a few taps. Whether it's splitting a bill or sending cash to a friend, it's fast, easy, and secure.",
  },
  {
    icon: ShieldCheck,
    name: "Secure and Private Communication",
    description:
      "Every message and transaction is protected with advanced encryption, ensuring your conversations and financial details remain completely confidential.",
  },
  {
    icon: MessageCircle,
    name: "Seamless Conversations",
    description:
      "Stay connected with friends right inside Dashen Superapp. Chat, share updates, and manage your finances—all without switching apps.",
  },
  {
    icon: HandCoins,
    name: "Request Money Effortlessly",
    description:
      "Need to collect payments? Simply send a request in chat and get notified once it’s received. No account numbers, no extra steps—just instant confirmation.",
  },
];
