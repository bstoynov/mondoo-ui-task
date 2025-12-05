import { DRAMATIC_ANIMATION } from "@/constants/common/animation.constants";
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
      delay: DRAMATIC_ANIMATION.delay,
      duration: DRAMATIC_ANIMATION.duration,
      ease: DRAMATIC_ANIMATION.easing,
      onComplete,
    });

    return () => animation.stop();
  }, [rollingNum, end, onComplete]);

  return result;
};

export default useAnimateNumberValue;
