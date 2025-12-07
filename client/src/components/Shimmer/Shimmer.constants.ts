import { keyframes } from "@mui/material";

const SHIMMER_KEYFRAMES = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const SHIMMER_ANIMATION_PROPS = {
  animation: `${SHIMMER_KEYFRAMES} 1.3s linear infinite`,
  background:
    "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
};
