import type { MetricMetaDataMap } from "@/sharedTypes";

// TODO: use random maxValues
// TODO: audio all values so they make sense, also change BE to show more dramatic diffs
export const metricMetaDataMap: MetricMetaDataMap = {
  totalRisk: {
    title: "Total Risk Score",
    subtitle: "Composite score across all inventory",
    maxValue: 420,
    decimalPrecision: 1,
    reverseIndicator: true,
  },
  criticalExposures: {
    title: "Critical exposures",
    subtitle: "Vulnerabilities requiring immediate fixes",
    maxValue: 16,
  },
  compliance: {
    title: "Policy Compliance",
    subtitle: "Pass/fail trend against your checks",
    maxValue: 100,
    unit: "%",
  },
  speed: {
    title: "Remediation Speed",
    subtitle: "Avg time to close critical vs high findings",
    decimalPrecision: 1,
    maxValue: 840,
    unit: "H",
    reverseIndicator: true,
  },
};

export const SIGNIFICANCE_RANGE = {
  bottom: 0.15,
  top: 0.85,
};
