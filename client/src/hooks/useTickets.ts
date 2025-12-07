import { spaceIdVar } from "@/apollo/reactiveVars";
import { GET_TICKETS } from "@/graphql/queries/GetTickets";
import { useQuery, useReactiveVar } from "@apollo/client/react";

const useTickets = () => {
  const spaceId = useReactiveVar(spaceIdVar);

  const { data, error, loading } = useQuery(GET_TICKETS, {
    variables: { spaceId },
    skip: !spaceId,
  });

  return {
    data: data?.tickets,
    error,
    loading,
  };
};

export default useTickets;
