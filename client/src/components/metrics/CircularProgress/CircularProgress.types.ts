import type { ReactElement } from "react";
import type { MetricBaseData, MetricMetaData } from "@/types";

export type CircularProgressProps = Pick<
  MetricMetaData,
  "reverseIndicator" | "significant"
> & {
  currentProgress: MetricBaseData["value"];
  totalProgress: MetricMetaData["maxValue"];
  delta: MetricBaseData["delta"];
  diameter?: number;
  strokeWidth?: number;
  usableArcPercent?: number;
  mainContent?: ReactElement;
  footerContent?: ReactElement;
};
