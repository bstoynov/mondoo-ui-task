import { mockRecommendations } from "@/data/mockRecommendations";
import { delay, validateSpaceId } from "./utils";

export const getRecommendations = async (spaceId: string) => {
  validateSpaceId(spaceId);
  await delay(1000);
  return mockRecommendations.find(
    (recommendation) => recommendation.spaceId === spaceId
  );
};
