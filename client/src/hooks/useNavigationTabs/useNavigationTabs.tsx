import { STATIC_TABS_DATA } from "@/constants";
import useTeams from "../useTeams/useTeams";
import { useMemo } from "react";
import type { NavigationTab } from "@/sharedTypes";

const useNavigationTabs = () => {
  const { data: teams, loading } = useTeams();

  const tabs = useMemo((): NavigationTab[] => {
    if (loading) return STATIC_TABS_DATA;

    return STATIC_TABS_DATA.map((tab) => {
      if (tab.id === "teams" && teams) {
        return {
          ...tab,
          tabs: teams,
        };
      }

      return tab;
    });
  }, [teams, loading]);

  return {
    data: tabs,
    loading,
    defaultTabId: STATIC_TABS_DATA[0].id,
  };
};

export default useNavigationTabs;
