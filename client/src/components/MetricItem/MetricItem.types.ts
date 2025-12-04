// TODO: remove this once integrated with graphql
export type MetricName =
  | "totalRisk"
  | "criticalExposures"
  | "compliance"
  | "speed";

export type MetricMetaDataMap = Record<
  MetricName,
  { title: string; subtitle: string; decimalPrecision?: number; unit?: string }
>;

export type MetricItemType = {
  name: MetricName;
  value: number;
  delta: number;
  maxValue: number;
  reverseIndicator?: boolean;
  significant?: boolean;
};
