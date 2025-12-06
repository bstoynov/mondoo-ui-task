import { STATIC_TABS_DATA } from "@/constants";
import useTeams from "../useTeams/useTeams";
import { useMemo } from "react";
import type { NavigationTab } from "@/types";

// TODO: see if spaceId can remain string or can be derived from user
const useNavigationTabs = (spaceId: string) => {
  const { data: teams, loading } = useTeams(spaceId);

  const tabs = useMemo(
    (): NavigationTab[] =>
      STATIC_TABS_DATA.map((tab) => {
        if (tab.id === "teams" && teams) {
          return {
            ...tab,
            tabs: teams,
          };
        }

        return tab;
      }),
    [teams]
  );

  return {
    tabs,
    loading,
  };
};

export default useNavigationTabs;
