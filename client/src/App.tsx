import { Box, Stack } from "@mui/material";
import mondooBackground from "./assets/mondoo-background.png";
import {
  MetricList,
  NavigationCard,
  RecommendationCard,
  UserSpaceDropdown,
} from "@/components";

// TODO: move to dashboard component
function App() {
  return (
    <Box
      component="main"
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: `url(${mondooBackground}) center center/cover`,
      }}
    >
      <Stack direction="row" gap={16}>
        <Stack gap={4}>
          <NavigationCard />
          <UserSpaceDropdown />
        </Stack>
        <Stack gap={8}>
          <RecommendationCard />
          <MetricList />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
