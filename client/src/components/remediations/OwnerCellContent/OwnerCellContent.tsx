import { Typography } from "@mui/material";
import CellContent from "../CellContent/CellContent";
import type { OwnerCellContentProps } from "./OwnerCellContent.types";
import { USER_ID_TO_NAME_MAP } from "./OwnerCellContent.constants";

function OwnerCellContent({ ownerId }: OwnerCellContentProps) {
  const ownerName = USER_ID_TO_NAME_MAP[ownerId];

  return (
    <CellContent>
      <Typography alignSelf="flex-start" fontSize={12} color="textSecondary">
        {ownerName}
      </Typography>
    </CellContent>
  );
}

export default OwnerCellContent;
