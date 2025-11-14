import { mockMetrics } from "../data/mockMetrics";
import { delay, validateSpaceId } from "./utils";

export const getMetrics = async (spaceId: string) => {
  validateSpaceId(spaceId);
  await delay(2000);
  return mockMetrics.find((metric) => metric.spaceId === spaceId);
};
