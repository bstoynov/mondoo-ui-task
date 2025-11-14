import { mockReports } from "@/data/mockReports";
import { delay, validateSpaceId } from "./utils";

export const getReports = async (spaceId: string) => {
  validateSpaceId(spaceId);
  await delay(1000);
  return mockReports.filter((report) => report.spaceId === spaceId);
};
