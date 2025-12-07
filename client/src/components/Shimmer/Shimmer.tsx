import { Box } from "@mui/material";
import type { ShimmerProps } from "./Shimmer.types";
import { SHIMMER_ANIMATION_PROPS } from "./Shimmer.constants";

function Shimmer({ width, height, borderRadius }: ShimmerProps) {
  return (
    <Box
      position="relative"
      width={width || "100%"}
      overflow="hidden"
      height={height}
      borderRadius={borderRadius}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.primary,
      })}
    >
      <Box height="100%" sx={SHIMMER_ANIMATION_PROPS} />
    </Box>
  );
}

export default Shimmer;
