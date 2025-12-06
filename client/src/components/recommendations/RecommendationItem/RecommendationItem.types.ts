import type { RecommendationItem } from "@/sharedTypes";

export type RecommendationItemProps = RecommendationItem & {
  active: boolean;
  onClick: () => void;
};
