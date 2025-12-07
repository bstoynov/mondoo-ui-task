import { Typography } from "@mui/material";
import CellContent from "../CellContent/CellContent";
import type { OwnerCellContentProps } from "./OwnerCellContent.types";

// TODO: use real data here
const USER_MAP: Record<string, { name: string; avatar: string }> = {
  "1": { name: "Buzz Lightyear", avatar: "https://i.pravatar.cc/150?img=65" },
  "2": { name: "Sally Ride", avatar: "https://i.pravatar.cc/150?img=48" },
};

function OwnerCellContent({ ownerId }: OwnerCellContentProps) {
  const user = USER_MAP[ownerId];

  return (
    <CellContent>
      <Typography alignSelf="flex-start" fontSize={12} color="textSecondary">
        {user?.name ?? "Unknown"}
      </Typography>
    </CellContent>
  );
}

export default OwnerCellContent;
