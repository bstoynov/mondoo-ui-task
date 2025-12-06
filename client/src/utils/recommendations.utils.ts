import type { RecommendationItem, RecommendationName } from "@/sharedTypes";
import type { GetRecommendationsQuery } from "@/types/graphql";

export const recommendationNameMapper: Record<
  RecommendationName,
  (count: number) => string
> = {
  readyToFix: (count: number) => `${count} fixes ready`,
  readyToReview: (count: number) => `Review ${count} new findings`,
  approachingSla: (count: number) => `${count} tasks due soon`,
};

export const getReportName = (name: string) => `${name} ready`;

export const parseRecommendationsData = (data: GetRecommendationsQuery) => {
  const recommendations: RecommendationItem[] = [];

  Object.entries(data.recommendations).forEach((recommendation) => {
    if (recommendation[0] === "__typename") return;

    const [key, value] = recommendation as [RecommendationName, number];

    if (recommendationNameMapper[key] && value) {
      recommendations.push({
        id: key,
        name: recommendationNameMapper[key](value),
        type: "recommendation",
      });
    }
  });

  const reports: RecommendationItem[] =
    data.reports?.map((report) => ({
      id: report.id,
      name: getReportName(report.name),
      type: "report",
    })) || [];

  return [...recommendations, ...reports];
};
