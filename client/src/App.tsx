import { Box, Stack } from "@mui/material";
import mondooBackground from "./assets/mondoo-background.png";
import { MetricList, NavigationCard } from "./components";

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
        <MetricList />
      </Stack>
    </Box>
  );
}

export default App;
