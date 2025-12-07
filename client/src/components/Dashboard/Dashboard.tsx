import { Stack } from "@mui/material";
import NavigationCard from "../navigation/NavigationCard/NavigationCard";
import UserSpaceDropdown from "../navigation/UserSpaceDropdown/UserSpaceDropdown";
import RecommendationCard from "../recommendations/RecommendationCard/RecommendationCard";
import MetricList from "../metrics/MetricList/MetricList";
import Header from "../Header/Header";

function Dashboard() {
  return (
    <Stack direction="row" gap={16} width={1400}>
      <Stack gap={4}>
        <NavigationCard />
        <UserSpaceDropdown />
      </Stack>
      <Stack gap={8} width="100%">
        <Header />
        <RecommendationCard />
        <MetricList />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
