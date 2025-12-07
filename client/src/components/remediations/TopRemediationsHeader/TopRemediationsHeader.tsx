import { ButtonBase, Stack, Typography } from "@mui/material";
import type { TopRemediationsHeaderProps } from "./TopRemediationsHeader.types";

function TopRemediationsHeader({ ticketCount }: TopRemediationsHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Stack>
        <Typography
          fontSize={16}
          fontWeight={600}
          color="textPrimary"
          textTransform="uppercase"
        >
          Top Remediation steps
        </Typography>
        <Typography fontSize={12} lineHeight={1.5} color="textSecondary">
          Tickets created for addressing findings and risk reduction
        </Typography>
      </Stack>

      <ButtonBase
        disableRipple
        sx={(theme) => ({
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1.5,
          paddingBottom: 1.5,
          position: "relative",
          borderRadius: 1,
          border: 1,
          borderColor: theme.palette.common.white,
          color: theme.palette.text.primary,
          ":hover": {
            background: theme.palette.background.primaryHover,
          },
        })}
      >
        <Typography fontSize={12} lineHeight={1.2}>
          View all {ticketCount}
        </Typography>
      </ButtonBase>
    </Stack>
  );
}

export default TopRemediationsHeader;
