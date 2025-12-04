import { useTheme } from "@mui/material";
import { useState } from "react";

type UseRedGreenTransitionParams = {
  transitionProp: "color" | "stroke";
  delta: number;
  reverseIndicator?: boolean;
  persist: boolean;
};

const useRedGreenTransition = ({
  delta,
  reverseIndicator,
  persist,
  transitionProp,
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

  return { updateColor, color, transitionStyle: `${transitionProp} 1s ease` };
};

export default useRedGreenTransition;
