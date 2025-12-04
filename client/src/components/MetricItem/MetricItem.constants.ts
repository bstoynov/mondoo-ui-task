import type { MetricMetaDataMap } from "./MetricItem.types";

export const metricMetaDataMap: MetricMetaDataMap = {
  totalRisk: {
    title: "Total Risk Score",
    subtitle: "Composite score across all inventory",
    decimalPrecision: 1,
  },
  criticalExposures: {
    title: "Critical exposures",
    subtitle: "Vulnerabilities requiring immediate fixes",
  },
  compliance: {
    title: "Policy Compliance",
    subtitle: "Pass/fail trend against your checks",
    unit: "%",
  },
  speed: {
    title: "Remediation Speed",
    subtitle: "Avg time to close critical vs high findings",
    decimalPrecision: 1,
    unit: "H",
  },
};
