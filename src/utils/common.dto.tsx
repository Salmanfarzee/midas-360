import { marginMap } from "./constants";

export interface benifitsItemProp {
  title: string;
  description: string;
  marginTop: keyof typeof marginMap; // 👈 restricts to "4.1" | "5.6"
}

export type caseStudyItemProp = {
  title: string;
  content: string;
  bgImage: string;
  bgImageMobile: string;
  actionText: string;
  actionUrl: string;
};
