import { GET_TEAMS } from "@/graphql/queries/GetTeams";
import { useQuery } from "@apollo/client/react";

// TODO: see if spaceId can remain string or can be derived from user
const useTeams = (spaceId: string) => {
  const { data, error, loading } = useQuery(GET_TEAMS, {
    variables: { spaceId },
  });

  return {
    data: data ? data.teams : undefined,
    error,
    loading,
  };
};

export default useTeams;
