import ticketIcon from "@/assets/ticket-icon.svg";
import { Stack, Typography } from "@mui/material";
import type { TitleCellContentPropsProps } from "./TitleCellContent.types";
import CellContent from "../CellContent/CellContent";

function TitleCellContent({ title }: TitleCellContentPropsProps) {
  return (
    <CellContent>
      <Stack width="100%" direction="row" gap={2} justifyContent="flex-start">
        <img src={ticketIcon} width={16} height={16} />
        <Typography
          noWrap
          fontSize={12}
          lineHeight={1.33}
          color="textSecondary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </Stack>
    </CellContent>
  );
}
export default TitleCellContent;
