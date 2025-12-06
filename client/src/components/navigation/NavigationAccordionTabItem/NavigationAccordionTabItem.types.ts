import type {
  NavigationTab,
  NavigationTabAccordionComponentProps,
} from "@/sharedTypes";

export type NavigationAccordionTabItemProps = Omit<NavigationTab, "tabs"> &
  NavigationTabAccordionComponentProps;
