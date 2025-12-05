import type { MetricBaseData, MetricMetaData } from "@/types";

export type MetricDeltaProps = Pick<MetricBaseData, "delta"> &
  Pick<MetricMetaData, "decimalPrecision" | "unit" | "reverseIndicator">;
