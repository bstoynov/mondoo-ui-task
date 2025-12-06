import { metricMetaDataMap } from "@/constants";
import type { GetMetricsQuery } from "@/types/graphql";
import type {
  MetricData,
  MetricMetaData,
  MetricName,
} from "@/sharedTypes/metrics.types";

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
    };
  });
};
