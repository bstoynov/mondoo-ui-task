import { Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import type { CreatedAtCellContentProps } from "./CreatedAtCellContent.types";
import CellContent from "../CellContent/CellContent";

function CreatedAtCellContent({ createdAt }: CreatedAtCellContentProps) {
  return (
    <CellContent>
      <Typography alignSelf="flex-start" fontSize={12} color="textSecondary">
        {formatDistanceToNow(new Date(createdAt), { addSuffix: false })}
      </Typography>
    </CellContent>
  );
}

export default CreatedAtCellContent;
