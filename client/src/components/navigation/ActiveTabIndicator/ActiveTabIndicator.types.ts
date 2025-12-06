import type { NavigationTabLinkComponentProps } from "@/sharedTypes";

export type ActiveTabIndicatorProps = Pick<
  NavigationTabLinkComponentProps,
  "active"
> & {
  layoutId: string;
};
