import { Stack } from "@mui/material";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import NavigationTabList from "../NavigationTabList/NavigationTabList";

function NavigationCard() {
  return (
    <Stack
      position="relative"
      // hardcode height to prevent team juping
      // TODO: move to constants
      width={240}
      height={840}
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
