import { graphql } from "@/types";

export const GET_METRICS = graphql(`
  query GetMetrics($spaceId: ID!) {
    metrics(spaceId: $spaceId) {
      compliance {
        delta
        value
      }
      totalRisk {
        value
        delta
      }
      criticalExposures {
        value
        delta
      }
      speed {
        value
        delta
      }
    }
  }
`);
