import { Box } from "@mui/material";
import { motion } from "motion/react";
import type { ActiveTabIndicatorProps } from "./ActiveTabIndicator.types";

const MotionBox = motion(Box);

function ActiveTabIndicator({ active }: ActiveTabIndicatorProps) {
  if (!active) return null;

  return (
    <MotionBox
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      borderRadius={2}
      layoutId="activeTabIndicator"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.primaryHighlight,
      })}
      // TODO: move to constants
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    />
  );
}

export default ActiveTabIndicator;
