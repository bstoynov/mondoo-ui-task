import { mockRecommendations } from "@/data/mockRecommendations";
import { delay } from "./utils";

export const getRecommendations = async () => {
  await delay(1000);
  return mockRecommendations;
};
