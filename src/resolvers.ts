import { getMetrics } from "@/services/metricsService";
import { getRecommendations } from "@/services/recommendationsService";
import { getTeams } from "@/services/teamsService";
import { getUser } from "@/services/userService";

export const resolvers = {
  Query: {
    recommendations: async () => await getRecommendations(),
    metrics: async () => await getMetrics(),
    user: async () => await getUser(),
    teams: async (_, { spaceId }: { spaceId: string }) =>
      await getTeams(spaceId),
  },
};
