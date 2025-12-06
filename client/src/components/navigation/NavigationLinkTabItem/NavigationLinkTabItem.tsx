import { ButtonBase, Typography } from "@mui/material";
import ActiveTabIndicator from "../ActiveTabIndicator/ActiveTabIndicator";
import type { NavigationLinkTabItemProps } from "./NavigationLinkTabItem.types";

function NavigationLinkTabItem({
  name,
  onClick,
  active,
}: NavigationLinkTabItemProps) {
  return (
    <ButtonBase
      disableRipple
      sx={(theme) => ({
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 1.5,
        paddingBottom: 1.5,
        position: "relative",
        color: theme.palette.text.primary,
        ":hover": {
          color: theme.palette.text.primaryHover,
        },
      })}
      onClick={onClick}
    >
      <Typography
        fontSize={15}
        lineHeight={2}
        textTransform="uppercase"
        fontWeight={600}
        letterSpacing="0.06em"
      >
        {name}
      </Typography>

      <ActiveTabIndicator active={active} />
    </ButtonBase>
  );
}

export default NavigationLinkTabItem;
