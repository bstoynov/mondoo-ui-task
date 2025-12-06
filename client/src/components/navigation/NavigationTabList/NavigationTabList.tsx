import { Stack } from "@mui/material";
import { useState } from "react";
import NavigationAccordionTabItem from "../NavigationAccordionTabItem/NavigationAccordionTabItem";
import NavigationLinkTabItem from "../NavigationLinkTabItem/NavigationLinkTabItem";
import TeamTabItem from "../TeamTabItem/TeamTabItem";
import { useNavigationTabs } from "@/hooks";
import { STATIC_TABS_DATA } from "@/constants";

function NavigationTabList() {
  const [activeTabId, setActiveTabId] = useState(STATIC_TABS_DATA[0].id);
  // TODO: use real spaceId
  const { tabs, loading } = useNavigationTabs("find-andy");

  // TODO: handle loading
  if (loading) return null;

  return (
    <Stack gap={4}>
      {tabs.map(({ id, name, tabs }) =>
        tabs ? (
          <NavigationAccordionTabItem
            key={id}
            id={id}
            name={name}
            tabs={tabs}
            renderTab={(teamTab) => (
              <TeamTabItem
                id={teamTab.id}
                name={teamTab.name}
                active={teamTab.id === activeTabId}
                onClick={() => setActiveTabId(teamTab.id)}
              />
            )}
          />
        ) : (
          <NavigationLinkTabItem
            key={id}
            id={id}
            name={name}
            active={id === activeTabId}
            onClick={() => setActiveTabId(id)}
          />
        )
      )}
    </Stack>
  );
}

export default NavigationTabList;
