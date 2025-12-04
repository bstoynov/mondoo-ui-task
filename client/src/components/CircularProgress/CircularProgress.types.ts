import type { ReactElement } from "react";

export type CircularProgressProps = {
  currentProgress: number;
  totalProgress: number;
  delta: number;
  diameter?: number;
  strokeWidth?: number;
  usableArcPercent?: number;
  mainContent?: ReactElement;
  footerContent?: ReactElement;
  reverseIndicator?: boolean;
  significant?: boolean;
};
