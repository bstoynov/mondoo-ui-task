import { mockUser } from "@/data/mockUser";
import { GraphQLError } from "graphql";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getValidSpaceIds = (): string[] => {
  return mockUser.spaces.map((space) => space.id);
};

export const validateSpaceId = (spaceId: string): void => {
  const validSpaceIds = getValidSpaceIds();

  if (!validSpaceIds.includes(spaceId)) {
    throw new GraphQLError(
      `Invalid spaceId: "${spaceId}".  Valid spaceIds are: ${validSpaceIds.join(
        ", "
      )}`,
      {
        extensions: {
          code: "INVALID_SPACE_ID",
          validSpaceIds,
        },
      }
    );
  }
};
