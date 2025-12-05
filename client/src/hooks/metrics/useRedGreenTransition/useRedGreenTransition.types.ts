import type { MetricBaseData, MetricMetaData } from "@/types";

export type UseRedGreenTransitionParams = Pick<MetricBaseData, "delta"> &
  Pick<MetricMetaData, "reverseIndicator"> & {
    transitionProp: "color" | "stroke";
    persist: MetricMetaData["significant"];
  };
