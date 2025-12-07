import { Stack } from "@mui/material";
import { useMetrics } from "@/hooks";
import MetricItem from "../MetricItem/MetricItem";
import Shimmer from "@/components/Shimmer/Shimmer";
import { METRICS_COUNT } from "./MetricList.constants";

function MetricList() {
  const { data, loading } = useMetrics();

  if (loading) {
    return (
      <Stack direction="row" gap={4}>
        {Array.from({ length: METRICS_COUNT }, (_, i) => (
          <Shimmer key={i} borderRadius={6} height={231} />
        ))}
      </Stack>
    );
  }
  if (!data) return null;

  return (
    <Stack direction="row" gap={4}>
      {data.map((metric) => (
        <MetricItem key={metric.title} {...metric} />
      ))}
    </Stack>
  );
}

export default MetricList;
