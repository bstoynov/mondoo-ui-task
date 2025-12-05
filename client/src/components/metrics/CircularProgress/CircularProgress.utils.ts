import { FULL_CIRCLE_DEGREES } from "./CircularProgress.constants";

export const getGapFraction = (usableArcPercent: number) =>
  1 - usableArcPercent / 100;

export const getRotationAngle = (usableArcPercent: number) => {
  const halfGapPercent = getGapFraction(usableArcPercent) / 2;
  return FULL_CIRCLE_DEGREES / 4 + halfGapPercent * FULL_CIRCLE_DEGREES;
};

export const degreesToRadians = (deg: number) => (deg * Math.PI) / 180;
