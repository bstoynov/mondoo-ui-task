import type { MetricMetaDataMap } from "@/types";

// TODO: use random maxValues
// TODO: audio all values so they make sense, also change BE to show more dramatic diffs
export const metricMetaDataMap: MetricMetaDataMap = {
  totalRisk: {
    title: "Total Risk Score",
    subtitle: "Composite score across all inventory",
    maxValue: 500,
    decimalPrecision: 1,
    reverseIndicator: true,
    significant: true,
  },
  criticalExposures: {
    title: "Critical exposures",
    subtitle: "Vulnerabilities requiring immediate fixes",
    maxValue: 500,
    significant: false,
  },
  compliance: {
    title: "Policy Compliance",
    subtitle: "Pass/fail trend against your checks",
    maxValue: 500,
    unit: "%",
    significant: true,
  },
  speed: {
    title: "Remediation Speed",
    subtitle: "Avg time to close critical vs high findings",
    decimalPrecision: 1,
    maxValue: 500,
    unit: "H",
    reverseIndicator: true,
    significant: false,
  },
};
