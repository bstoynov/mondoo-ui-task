import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import NavigationAccordionTabItem from "../NavigationAccordionTabItem/NavigationAccordionTabItem";
import NavigationLinkTabItem from "../NavigationLinkTabItem/NavigationLinkTabItem";
import TeamTabItem from "../TeamTabItem/TeamTabItem";
import { useNavigationTabs } from "@/hooks";
import { spaceIdVar } from "@/apollo/reactiveVars";

function NavigationTabList() {
  const spaceId = spaceIdVar();
  const { data, defaultTabId } = useNavigationTabs();
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  useEffect(() => {
    // false positive: https://github.com/facebook/react/issues/34045
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveTabId(defaultTabId);
  }, [spaceId, defaultTabId]);

  return (
    <Stack gap={4}>
      {data.map(({ id, name, tabs }) =>
        tabs ? (
          <NavigationAccordionTabItem
            key={id}
            id={id}
            name={name}
            tabs={tabs}
            renderTab={(teamTab) => (
              <TeamTabItem
                key={teamTab.id}
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
