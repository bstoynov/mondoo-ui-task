import { EXTREME_EASE_OUT } from "@/constants/animation.constants";
import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import type { UseAnimateNumberValueParams } from "./useAnimateNumberValue.types";

const useAnimateNumberValue = ({
  start,
  end,
  transformer,
  onComplete,
}: UseAnimateNumberValueParams) => {
  const rollingNum = useMotionValue(start);

  const result = useTransform(rollingNum, transformer);

  useEffect(() => {
    const animation = animate(rollingNum, end, {
      delay: EXTREME_EASE_OUT.delay,
      duration: EXTREME_EASE_OUT.duration,
      ease: EXTREME_EASE_OUT.easing,
      onComplete,
    });

    return () => animation.stop();
  }, [rollingNum, end, onComplete]);

  return result;
};

export default useAnimateNumberValue;
