import { spaceIdVar } from "@/apollo/reactiveVars";
import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { enrichMetricsData } from "@/utils/metrics.utils";
import { useQuery, useReactiveVar } from "@apollo/client/react";

const useMetrics = () => {
  const spaceId = useReactiveVar(spaceIdVar);

  const { data, error, loading } = useQuery(GET_METRICS, {
    variables: { spaceId },
    skip: !spaceId,
  });

  return {
    data: enrichMetricsData(data),
    error,
    loading,
  };
};

export default useMetrics;
