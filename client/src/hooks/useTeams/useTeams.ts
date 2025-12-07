import { spaceIdVar } from "@/apollo/reactiveVars";
import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery, useReactiveVar } from "@apollo/client/react";

const useTeams = () => {
  const spaceId = useReactiveVar(spaceIdVar);

  const { data, error, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId },
    skip: !spaceId,
  });

  return {
    data: data ? data.teams : undefined,
    error,
    loading,
  };
};

export default useTeams;
