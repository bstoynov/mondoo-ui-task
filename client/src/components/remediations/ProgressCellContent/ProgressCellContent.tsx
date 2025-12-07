import { Box } from "@mui/material";
import type { ProgressCellContentProps } from "./ProgressCellContent.types";
import { motion } from "motion/react";
import { EXTREME_EASE_OUT } from "@/constants";
import CellContent from "../CellContent/CellContent";

const MotionBox = motion.create(Box);

function ProgressCellContent({ progress }: ProgressCellContentProps) {
  return (
    <CellContent>
      <Box width={120} bgcolor="#f0f0f02e" height="4px" borderRadius={1}>
        <MotionBox
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={EXTREME_EASE_OUT}
          height="100%"
          borderRadius={1}
          sx={(theme) => ({ background: theme.palette.common.white })}
        />
      </Box>
    </CellContent>
  );
}

export default ProgressCellContent;
