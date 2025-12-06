import type { MetricBaseData, MetricMetaData } from "@/sharedTypes";

export type MetricDeltaProps = Pick<MetricBaseData, "delta"> &
  Pick<MetricMetaData, "decimalPrecision" | "unit" | "reverseIndicator">;
