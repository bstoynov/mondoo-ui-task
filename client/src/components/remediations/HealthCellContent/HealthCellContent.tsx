import { useAnimateNumberValue } from "@/hooks";
import { Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import type { HealthCellContentProps } from "./HealthCellContent.types";
import CellContent from "../CellContent/CellContent";

const MotionTypography = motion.create(Typography);

function HealthCellContent({ value }: HealthCellContentProps) {
  const rollingNumber = useAnimateNumberValue({
    start: 0,
    end: value,
    transformer: (animatedValue) => `+${animatedValue.toFixed(2)}`,
  });

  return (
    <CellContent>
      <Stack
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={4}
        paddingRight={4}
        borderRadius={1}
        sx={(theme) => ({
          background: theme.palette.background.accent,
        })}
        justifyContent="center"
        alignItems="center"
      >
        <MotionTypography
          fontSize={10}
          lineHeight={1.6}
          color="textAccent"
          fontWeight="bold"
        >
          {rollingNumber}
        </MotionTypography>
      </Stack>
    </CellContent>
  );
}
export default HealthCellContent;
