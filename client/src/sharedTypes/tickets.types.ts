import type { GetTicketsQuery } from "@/types/graphql";

export type TicketData = Omit<
  NonNullable<GetTicketsQuery["tickets"]>[number],
  "__typename"
>;
