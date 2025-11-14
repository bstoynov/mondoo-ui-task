import { mockTickets } from "@/data/mockTickets";
import { delay, validateSpaceId } from "./utils";

export const getTickets = async (spaceId: string) => {
  validateSpaceId(spaceId);
  await delay(1000);
  return mockTickets.filter((ticket) => ticket.spaceId === spaceId);
};
