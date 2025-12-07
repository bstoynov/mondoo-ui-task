import mondooBackground from "@/assets/mondoo-background.png";
import { PageContainer, Dashboard } from "@/components";

function App() {
  return (
    <PageContainer backgroundUrl={mondooBackground}>
      <Dashboard />
    </PageContainer>
  );
}

export default App;
