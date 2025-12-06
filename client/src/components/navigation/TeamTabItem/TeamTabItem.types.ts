import type {
  NavigationTab,
  NavigationTabLinkComponentProps,
  TeamData,
} from "@/sharedTypes";

export type TeamHighlightColorMapType = Record<TeamData["id"], string>;

export type TeamTabItemProps = NavigationTab & NavigationTabLinkComponentProps;
