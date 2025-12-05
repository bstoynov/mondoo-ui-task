import { Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import type { RollingNumberProps } from "./RollingNumber.types";
import { useAnimateNumberValue, useRedGreenTransition } from "@/hooks";

const MotionTypography = motion(Typography);

function RollingNumber({
  value,
  delta,
  reverseIndicator,
  significant = false,
  decimalPrecision = 0,
  unit = "",
}: RollingNumberProps) {
  const { color, updateColor, transitionStyle } = useRedGreenTransition({
    transitionProperty: "color",
    persist: significant,
    delta,
    reverseIndicator,
  });

  const rollingNumber = useAnimateNumberValue({
    start: value - delta,
    end: value,
    transformer: (animatedValue) => animatedValue.toFixed(decimalPrecision),
    onComplete: updateColor,
  });

  return (
    <Stack direction="row" gap={0.5}>
      <MotionTypography
        // TODO: convert to design token styles
        textAlign="center"
        fontSize={38}
        lineHeight={1}
        fontWeight="bold"
        color={color}
        style={transitionStyle}
      >
        {rollingNumber}
      </MotionTypography>
      <MotionTypography
        textAlign="center"
        fontSize={24}
        lineHeight={1}
        fontWeight="bold"
        color={color}
        style={transitionStyle}
      >
        {unit}
      </MotionTypography>
    </Stack>
  );
}

export default RollingNumber;
