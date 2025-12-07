import ActiveTabIndicator from "@/components/navigation/ActiveTabIndicator/ActiveTabIndicator";
import { ButtonBase, Typography } from "@mui/material";
import type { RecommendationItemProps } from "./RecommendationItem.types";
import { RECOMMENDATIONS_TABS_LAYOUT_ID } from "@/constants";

function RecommendationItem({
  name,
  onClick,
  active,
}: RecommendationItemProps) {
  return (
    <ButtonBase
      disableRipple
      sx={(theme) => ({
        padding: 3,
        position: "relative",
        color: theme.palette.text.primary,
        borderRadius: 2,
        ":hover": {
          background: theme.palette.background.primaryHover,
        },
      })}
      onClick={onClick}
    >
      <Typography fontSize={12} lineHeight={1.2}>
        {name}
      </Typography>

      <ActiveTabIndicator
        active={active}
        layoutId={RECOMMENDATIONS_TABS_LAYOUT_ID}
      />
    </ButtonBase>
  );
}

export default RecommendationItem;
