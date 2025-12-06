import type {
  NavigationTabBaseProps,
  NavigationTabComponentProps,
  TeamData,
} from "@/types";

export type TeamHighlightColorMapType = Record<TeamData["id"], string>;

export type TeamTabItemProps = NavigationTabBaseProps<TeamData> &
  NavigationTabComponentProps;
