import type { GetTeamsQuery } from "@/types/graphql";

type TeamListData = GetTeamsQuery["teams"];

export type TeamData = Omit<NonNullable<TeamListData>[number], "__typename">;
