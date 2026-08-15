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
