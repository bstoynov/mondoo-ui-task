import { Stack } from "@mui/material";
import { useMetrics } from "@/hooks";
import MetricItem from "../MetricItem/MetricItem";
import Shimmer from "@/components/Shimmer/Shimmer";

function MetricList() {
  const { data, loading } = useMetrics();

  return (
    <Stack direction="row" gap={4}>
      {data && !loading
        ? data.map((metric) => <MetricItem key={metric.title} {...metric} />)
        : // TODO: add to constants
          [0, 1, 2, 3].map((item) => (
            <Shimmer key={item} borderRadius={6} height={231} />
          ))}
    </Stack>
  );
}

export default MetricList;
