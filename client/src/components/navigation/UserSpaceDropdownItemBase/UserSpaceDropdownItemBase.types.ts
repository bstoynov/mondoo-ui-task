import type { UserSpace } from "@/sharedTypes";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export type UserSpaceDropdownItemBaseProps = UserSpace & {
  onClick: () => void;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};
