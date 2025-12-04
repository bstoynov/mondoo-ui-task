import { Stack } from "@mui/material";
import MetricItem from "../MetricItem/MetricItem";
import type { MetricItemType } from "../MetricItem/MetricItem.types";

const metrics: MetricItemType[] = [
  {
    name: "totalRisk",
    value: 375.23,
    delta: 12.41,
    reverseIndicator: true,
    maxValue: 500,
    significant: true,
  },
  {
    name: "criticalExposures",
    value: 24,
    delta: -3,
    reverseIndicator: true,
    maxValue: 100,
  },
  {
    name: "compliance",
    value: 87.5,
    delta: 4.2,
    reverseIndicator: false,
    maxValue: 100,
    significant: true,
  },
  {
    name: "speed",
    value: 142,
    delta: -18,
    reverseIndicator: true,
    maxValue: 300,
  },
];

function MetricList() {
  return (
    <Stack component="ul" direction="row" spacing={4}>
      {metrics.map((metric) => (
        <MetricItem {...metric} />
      ))}
    </Stack>
  );
}

export default MetricList;
