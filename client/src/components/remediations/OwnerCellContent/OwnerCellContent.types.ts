import type { UserData } from "@/sharedTypes";

export type OwnerCellContentProps = {
  ownerId: string;
};

export type UserIdToNameMap = Record<UserData["id"], UserData["name"]>;
