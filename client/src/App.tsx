import { Box, Stack } from "@mui/material";
import mondooBackground from "./assets/mondoo-background.png";
import { MetricList, NavigationCard } from "./components";
import RecommendationCard from "./components/recommendations/RecommendationCard/RecommendationCard";

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
        <NavigationCard />
        <Stack gap={8}>
          <RecommendationCard />
          <MetricList />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
