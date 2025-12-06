import type {
  NavigationTab,
  NavigationTabAccordionComponentProps,
} from "@/types";

export type NavigationAccordionTabItemProps = Omit<NavigationTab, "tabs"> &
  NavigationTabAccordionComponentProps;
