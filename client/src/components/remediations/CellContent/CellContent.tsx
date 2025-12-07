import { Stack } from "@mui/material";
import type { CellContentProps } from "./CellContent.types";

function CellContent({ children }: CellContentProps) {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%">
      {children}
    </Stack>
  );
}
export default CellContent;
