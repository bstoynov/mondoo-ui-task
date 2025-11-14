import { mockTeams } from "@/data/mockTeams";
import { delay, validateSpaceId } from "./utils";

export const getTeams = async (spaceId: string) => {
  validateSpaceId(spaceId);
  await delay(200);
  return mockTeams.filter((team) => team.spaceId === spaceId);
};
