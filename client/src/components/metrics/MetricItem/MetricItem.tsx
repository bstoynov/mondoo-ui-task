import { Box, Stack, Typography } from "@mui/material";
import RollingNumber from "../RollingNumber/RollingNumber";
import CircularProgress from "../CircularProgress/CircularProgress";
import MetricDelta from "../MetricDelta/MetricDelta";
import type { MetricItemProps } from "./MetricItem.types";

function MetricItem({
  title,
  subtitle,
  decimalPrecision,
  unit,
  value,
  delta,
  maxValue,
  reverseIndicator,
  significant,
}: MetricItemProps) {
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
              decimalPrecision={decimalPrecision}
              unit={unit}
            />
          }
          footerContent={
            <MetricDelta
              delta={delta}
              reverseIndicator={reverseIndicator}
              decimalPrecision={decimalPrecision}
              unit={unit}
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
          {title}
        </Typography>
        <Typography
          component="p"
          color="textSecondary"
          fontSize={11}
          lineHeight={1.42}
          textAlign="center"
        >
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default MetricItem;
