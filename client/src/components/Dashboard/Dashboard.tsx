import { Stack } from "@mui/material";
import Header from "../Header/Header";
import { MetricList } from "../metrics";
import { NavigationCard, UserSpaceDropdown } from "../navigation";
import { RecommendationCard } from "../recommendations";
import { TopRemediationsCard } from "../remediations";

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
        <TopRemediationsCard />
      </Stack>
    </Stack>
  );
}

export default Dashboard;
