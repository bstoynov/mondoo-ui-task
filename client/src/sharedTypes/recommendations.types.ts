import type { GetRecommendationsQuery } from "@/types/graphql";

type RecommendationsData = Omit<
  GetRecommendationsQuery["recommendations"],
  "__typename"
>;

export type RecommendationName = keyof RecommendationsData;

export type RecommendationNameMapperType = Record<
  RecommendationName,
  (count: RecommendationsData[keyof RecommendationsData]) => string
>;

export type RecommendationItem = {
  id: string;
  name: string;
  type: "recommendation" | "report";
};
