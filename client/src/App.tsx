import { Box, Container } from "@mui/material";
import MetricList from "./components/metrics/MetricList/MetricList";
import mondooBackground from "./assets/mondoo-background.png";

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
      <Container maxWidth="xl">
        <MetricList />
      </Container>
    </Box>
  );
}

export default App;
