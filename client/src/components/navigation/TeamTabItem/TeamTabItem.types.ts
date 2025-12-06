import type {
  NavigationTab,
  NavigationTabLinkComponentProps,
  TeamData,
} from "@/types";

export type TeamHighlightColorMapType = Record<TeamData["id"], string>;

export type TeamTabItemProps = NavigationTab & NavigationTabLinkComponentProps;
