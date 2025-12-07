import { ButtonBase, Stack, Typography } from "@mui/material";
import type { UserSpaceDropdownItemBaseProps } from "./UserSpaceDropdownItemBase.types";

function UserSpaceDropdownItemBase({
  avatar,
  name,
  onClick,
  children,
  sx,
}: UserSpaceDropdownItemBaseProps) {
  return (
    <ButtonBase
      disableRipple
      sx={(theme) => ({
        display: "flex",
        width: "100%",
        flexDirection: "row",
        gap: 2,
        padding: 4,
        position: "relative",
        color: theme.palette.text.primary,
        background: theme.palette.background.primary,
        justifyContent: "space-between",
        ":hover": {
          background: theme.palette.background.primaryHover,
        },
        ...sx,
      })}
      onClick={onClick}
    >
      <Stack direction="row" alignItems="center" gap={2} minWidth={0}>
        <img src={avatar} width={24} height={24} style={{ borderRadius: 24 }} />
        <Typography noWrap fontSize={12} lineHeight={1.2} color="textPrimary">
          {name}
        </Typography>
      </Stack>

      {children}
    </ButtonBase>
  );
}

export default UserSpaceDropdownItemBase;
