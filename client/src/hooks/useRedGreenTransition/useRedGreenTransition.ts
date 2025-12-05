import { useTheme } from "@mui/material";
import { useState } from "react";
import type { UseRedGreenTransitionParams } from "./useRedGreenTransition.types";
import { RED_GREEN_TRANSITION_PROPS } from "@/constants";

const useRedGreenTransition = ({
  delta,
  reverseIndicator,
  persist,
  transitionProperty,
}: UseRedGreenTransitionParams) => {
  const theme = useTheme();
  let startColor;

  if (reverseIndicator) {
    startColor =
      delta < 0 ? theme.palette.success.main : theme.palette.error.main;
  } else {
    startColor =
      delta < 0 ? theme.palette.error.main : theme.palette.success.main;
  }

  const [color, setColor] = useState(startColor);

  const updateColor = () => {
    if (persist) {
      return;
    }

    setColor(theme.palette.common.white);
  };

  return {
    updateColor,
    color,
    transitionStyle: {
      ...RED_GREEN_TRANSITION_PROPS,
      transitionProperty,
    },
  };
};

export default useRedGreenTransition;
