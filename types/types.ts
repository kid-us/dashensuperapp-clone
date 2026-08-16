import { LucideIcon } from "lucide-react";

// Links Types
export interface LinkTypes {
  name: string;
  url: string;
  section?: string;
  target?: string;
}

// Social Media Types
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

// App Store Links Types
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

// Blogs Types
export interface Blog {
  title: string;
  image: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
}
