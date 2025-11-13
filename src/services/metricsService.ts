import { mockMetrics } from "../data/mockMetrics";
import { delay } from "./utils";

export const getMetrics = async () => {
  await delay(2000);
  return mockMetrics;
};
