import { Stack } from "@mui/material";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import NavigationTabList from "../NavigationTabList/NavigationTabList";
import { NAVIGATION_CARD_SIZE } from "./NavigationCard.constants";

function NavigationCard() {
  return (
    <Stack
      position="relative"
      // hardcode height to prevent jumping when teams load
      width={NAVIGATION_CARD_SIZE.width}
      height={NAVIGATION_CARD_SIZE.height}
      padding={6}
      borderRadius={6}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.primary,
      })}
    >
      <NavigationHeader />
      <NavigationTabList />
      <NavigationFooter />
    </Stack>
  );
}

export default NavigationCard;
