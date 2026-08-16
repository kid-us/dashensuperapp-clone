import { LucideIcon } from "lucide-react";

export interface LinkTypes {
  name: string;
  url: string;
  section?: string;
  target?: string;
}

export interface SocialMedia {
  name: string;
  url: string;
  type:
    | "facebook"
    | "instagram"
    | "twitter"
    | "linkedin"
    | "youtube"
    | "tiktok";
}

export interface AppStoreLinks {
  name: string;
  url: string;
  icon: string;
}

// Goals Types
export interface Goal {
  name: string;
  description: string;
  image: string;
}

// Core App Offers Types
export interface Offer extends Goal {
  icon?: LucideIcon;
}
