import { Box, ButtonBase, Typography } from "@mui/material";
import { teamHighlightColorMap } from "./TeamTabItem.constants";
import ActiveTabIndicator from "../ActiveTabIndicator/ActiveTabIndicator";
import type { TeamTabItemProps } from "./TeamTabItem.types";
import { MAIN_TABS_LAYOUT_ID } from "@/constants";

function TeamTabItem({ id, name, active, onClick }: TeamTabItemProps) {
  return (
    <ButtonBase
      disableRipple
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 2,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        position: "relative",
        color: theme.palette.text.primary,
        ":hover": {
          color: theme.palette.text.primaryHover,
        },
      })}
      onClick={onClick}
    >
      <Box
        width={12}
        height={12}
        bgcolor={teamHighlightColorMap[id]}
        borderRadius={6}
      />
      <Typography
        noWrap
        fontSize={12}
        lineHeight={1.5}
        color="textSecondary"
        sx={(theme) => ({
          ":hover": {
            color: theme.palette.text.secondaryHover,
          },
        })}
      >
        {name}
      </Typography>
      <ActiveTabIndicator active={active} layoutId={MAIN_TABS_LAYOUT_ID} />
    </ButtonBase>
  );
}

export default TeamTabItem;
