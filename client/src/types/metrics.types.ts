import type { GetMetricsQuery } from "@/types/graphql";

export type MetricName = Exclude<
  keyof GetMetricsQuery["metrics"],
  "__typename" | "spaceId"
>;

export type MetricBaseData = Pick<
  GetMetricsQuery["metrics"][MetricName],
  "value" | "delta"
>;

export type MetricMetaData = {
  title: string;
  subtitle: string;
  maxValue: number;
  decimalPrecision?: number;
  unit?: string;
  reverseIndicator?: boolean;
  significant?: boolean;
};

export type MetricMetaDataMap = Record<MetricName, MetricMetaData>;

export type MetricData = MetricBaseData & MetricMetaData;
