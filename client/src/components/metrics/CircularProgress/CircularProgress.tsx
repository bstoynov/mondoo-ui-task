import { Stack } from "@mui/material";
import { motion } from "motion/react";
import type { CircularProgressProps } from "./CircularProgress.types";
import { useAnimateNumberValue, useRedGreenTransition } from "@/hooks";
import {
  degreesToRadians,
  getGapFraction,
  getRotationAngle,
} from "./CircularProgress.utils";
import { FULL_CIRCLE_DEGREES } from "./CircularProgress.constants";

function CircularProgress({
  totalProgress,
  currentProgress,
  delta,
  diameter = 148,
  strokeWidth = 6,
  usableArcPercent = 75,
  mainContent,
  footerContent,
  reverseIndicator,
  significant = false,
}: CircularProgressProps) {
  const radius = (diameter - strokeWidth) / 2;
  const center = diameter / 2;
  const fullArc = 2 * Math.PI * radius;
  const gapFraction = getGapFraction(usableArcPercent);
  const gapInDegrees = FULL_CIRCLE_DEGREES * gapFraction;
  const gapInRadians = degreesToRadians(gapInDegrees);
  const usableArc = fullArc - gapInRadians * radius;
  const { color, updateColor, transitionStyle } = useRedGreenTransition({
    transitionProp: "stroke",
    persist: significant,
    delta,
    reverseIndicator,
  });

  const progressStrokeDashArray = useAnimateNumberValue({
    start: currentProgress - delta,
    end: currentProgress,
    transformer: (value) => {
      const progress = value / totalProgress;
      const progressArcLength = usableArc * progress;
      return `${progressArcLength} ${fullArc}`;
    },
    onComplete: updateColor,
  });

  return (
    <Stack alignItems="center" position="relative">
      {mainContent ? (
        <Stack
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          justifyContent="center"
          alignItems="center"
        >
          {mainContent}
        </Stack>
      ) : null}

      {footerContent ? (
        <Stack
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          justifyContent="flex-end"
          alignItems="center"
          paddingBottom={2}
        >
          {footerContent}
        </Stack>
      ) : null}

      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#D9D9D9"
          strokeOpacity={0.13}
          strokeWidth={strokeWidth}
          strokeDasharray={`${usableArc} ${fullArc}`}
          strokeLinecap="round"
          fill="none"
          style={{
            transform: `rotate(${getRotationAngle(usableArcPercent)}deg)`,
            transformOrigin: "center",
          }}
        />

        {currentProgress ? (
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={progressStrokeDashArray}
            style={{
              transition: transitionStyle,
              transform: `rotate(${getRotationAngle(usableArcPercent)}deg)`,
              transformOrigin: "center",
            }}
          />
        ) : null}
      </svg>
    </Stack>
  );
}

export default CircularProgress;
