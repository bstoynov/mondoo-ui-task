import { GET_METRICS } from "@/graphql/queries/GetMetrics";
import { enrichMetricsData } from "@/utils/metrics.utils";
import { useQuery } from "@apollo/client/react";

// TODO: see if spaceId can remain string or can be derived from user
const useMetrics = (spaceId: string) => {
  const { data, error, loading } = useQuery(GET_METRICS, {
    variables: { spaceId },
  });

  return {
    data: enrichMetricsData(data),
    error,
    loading,
  };
};

export default useMetrics;
