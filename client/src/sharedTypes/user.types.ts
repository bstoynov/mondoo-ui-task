import type { GetUserQuery } from "@/types/graphql";

export type UserData = GetUserQuery["user"];

export type UserSpace = UserData["spaces"][number];
