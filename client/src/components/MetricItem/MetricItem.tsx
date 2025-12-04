import { Box, Stack, Typography } from "@mui/material";
import RollingNumber from "../RollingNumber/RollingNumber";
import CircularProgress from "../CircularProgress/CircularProgress";
import MetricDelta from "../MetricDelta/MetricDelta";
import type { MetricItemType } from "./MetricItem.types";
import { metricMetaDataMap } from "./MetricItem.constants";

function MetricItem({
  name,
  value,
  delta,
  reverseIndicator,
  maxValue,
  significant,
}: MetricItemType) {
  return (
    <Stack
      component="li"
      sx={(theme) => ({
        padding: 6,
        backgroundColor: "#0000004D", // TODO: use theme color
        borderRadius: 6,
      })}
    >
      <Box>
        <CircularProgress
          currentProgress={value}
          totalProgress={maxValue}
          delta={delta}
          significant={significant}
          mainContent={
            <RollingNumber
              value={value}
              delta={delta}
              reverseIndicator={reverseIndicator}
              significant={significant}
              decimalPrecision={metricMetaDataMap[name].decimalPrecision}
              unit={metricMetaDataMap[name].unit}
            />
          }
          footerContent={
            <MetricDelta
              delta={delta}
              reverseIndicator={reverseIndicator}
              decimalPrecision={metricMetaDataMap[name].decimalPrecision}
              unit={metricMetaDataMap[name].unit}
            />
          }
          reverseIndicator={reverseIndicator}
        />
      </Box>
      <Stack>
        <Typography
          component="h3"
          color="textPrimary"
          fontWeight={800}
          fontSize={13}
          textAlign="center"
          textTransform="uppercase"
          letterSpacing={1.5}
        >
          {metricMetaDataMap[name].title}
        </Typography>
        <Typography
          component="p"
          color="textSecondary"
          fontSize={11}
          lineHeight={1.42}
          textAlign="center"
        >
          {metricMetaDataMap[name].subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default MetricItem;
