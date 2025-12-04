import { Stack, Typography, useTheme } from "@mui/material";
import type { MetricDeltaProps } from "./MetricDelta.types";

function MetricDelta({
  delta,
  reverseIndicator,
  decimalPrecision = 0,
  unit = "",
}: MetricDeltaProps) {
  const theme = useTheme();

  let color;

  if (reverseIndicator) {
    color = delta > 0 ? theme.palette.error.main : theme.palette.success.main;
  } else {
    color = delta > 0 ? theme.palette.success.main : theme.palette.error.main;
  }

  return (
    <Stack direction="row">
      <Typography color={color} fontSize={13} fontWeight="bold" lineHeight={2}>
        {delta > 0 ? "↑" : "↓"}{" "}
        {Math.abs(delta).toFixed(decimalPrecision).concat(unit)}
      </Typography>
    </Stack>
  );
}

export default MetricDelta;
