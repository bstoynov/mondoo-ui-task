import type { ReactElement } from "react";

export type NavigationTab = {
  id: string;
  name: string;
  tabs?: NavigationTab[];
};

export type NavigationTabLinkComponentProps = {
  active: boolean;
  onClick: () => void;
};

export type NavigationTabAccordionComponentProps = {
  tabs: NavigationTab[];
  renderTab: (tab: NavigationTab) => ReactElement;
};
