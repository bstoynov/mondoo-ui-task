import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { parseRecommendationsData } from "@/utils/recommendations.utils";
import { useQuery } from "@apollo/client/react";

// TODO: see if spaceId can remain string or can be derived from user
const useRecommendations = (spaceId: string) => {
  const { data, error, loading } = useQuery(GET_RECOMMENDATIONS, {
    variables: { spaceId },
  });

  return {
    data: data && parseRecommendationsData(data),
    error,
    loading,
  };
};

export default useRecommendations;
