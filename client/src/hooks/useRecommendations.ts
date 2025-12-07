import { spaceIdVar } from "@/apollo/reactiveVars";
import { GET_RECOMMENDATIONS } from "@/graphql/queries/GetRecommendations";
import { parseRecommendationsData } from "@/utils";
import { useQuery, useReactiveVar } from "@apollo/client/react";

const useRecommendations = () => {
  const spaceId = useReactiveVar(spaceIdVar);

  const { data, error, loading } = useQuery(GET_RECOMMENDATIONS, {
    variables: { spaceId },
    skip: !spaceId,
  });

  return {
    data: data && parseRecommendationsData(data),
    error,
    loading,
  };
};

export default useRecommendations;
