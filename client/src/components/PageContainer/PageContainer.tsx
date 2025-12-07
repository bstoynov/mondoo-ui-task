import { Stack } from "@mui/material";
import type { PageContainerProps } from "./PageContainer.types";

function PageContainer({ children, backgroundUrl }: PageContainerProps) {
  return (
    <Stack
      component="main"
      position="fixed"
      width="100vw"
      height="100vh"
      justifyContent="flex-start"
      alignItems="center"
      padding={8}
      sx={{
        background: `url(${backgroundUrl}) center center/cover`,
      }}
    >
      {children}
    </Stack>
  );
}

export default PageContainer;
