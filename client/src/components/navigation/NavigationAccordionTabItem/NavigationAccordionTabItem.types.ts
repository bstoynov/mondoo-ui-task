import type { NavigationTabBaseProps } from "@/types";
import type { ReactElement } from "react";

export type NavigationAccordionTabItemProps<T> = Omit<
  NavigationTabBaseProps,
  "tabs"
> & {
  tabs: T[];
  renderTab: (data: T) => ReactElement;
};
