import { Stack } from "@mui/material";
import { useMetrics } from "@/hooks";
import MetricItem from "../MetricItem/MetricItem";

function MetricList() {
  const { data, loading } = useMetrics("find-andy");

  if (loading) {
    // TODO: handle loading
    return null;
  }

  if (!data) {
    // TODO: handle no data
    return null;
  }

  return (
    <Stack direction="row" gap={4}>
      {data.map((metric) => (
        <MetricItem key={metric.title} {...metric} />
      ))}
    </Stack>
  );
}

export default MetricList;
