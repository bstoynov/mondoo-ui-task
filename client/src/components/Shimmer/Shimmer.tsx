import { Box, keyframes } from "@mui/material";
import type { ShimmerProps } from "./Shimmer.types";

// TODO: move to constants
const slideAcross = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

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
      <Box
        height="100%"
        sx={{
          // TODO: move to constants
          animation: `${slideAcross} 1.3s linear infinite`,
          background:
            // TODO: move to constants
            "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </Box>
  );
}

export default Shimmer;
