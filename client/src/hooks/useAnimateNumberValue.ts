import { DRAMATIC_ANIMATION } from "@/constants/animation.constants";
import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type UseAnimateNumberValueParams = {
  start: number;
  end: number;
  transformer: (value: number) => string;
  onComplete?: () => void;
};

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
      duration: DRAMATIC_ANIMATION.duration,
      ease: DRAMATIC_ANIMATION.easing,
      onComplete,
    });

    return () => animation.stop();
  }, [rollingNum, end, onComplete]);

  return result;
};

export default useAnimateNumberValue;
