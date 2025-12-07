import { metricMetaDataMap, SIGNIFICANCE_RANGE } from "@/constants";
import type { GetMetricsQuery } from "@/types/graphql";
import type {
  MetricData,
  MetricMetaData,
  MetricName,
} from "@/sharedTypes/metrics.types";

// a metric is considered significant if its below or above a certain percent
const calculateMetricSignificance = (value: number, maxValue: number) =>
  value <= maxValue * SIGNIFICANCE_RANGE.bottom ||
  value >= maxValue * SIGNIFICANCE_RANGE.top;

export const enrichMetricsData = (
  rawData: GetMetricsQuery | undefined
): MetricData[] | undefined => {
  if (!rawData) {
    return;
  }

  return Object.entries(metricMetaDataMap).map((metric) => {
    const [name, metaData] = metric as [MetricName, MetricMetaData];

    return {
      ...metaData,
      ...rawData.metrics[name],
      significant: calculateMetricSignificance(
        rawData.metrics[name].value,
        metaData.maxValue
      ),
    };
  });
};
