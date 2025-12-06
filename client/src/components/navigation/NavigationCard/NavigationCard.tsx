import { Stack } from "@mui/material";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import NavigationTabList from "../NavigationTabList/NavigationTabList";

function NavigationCard() {
  return (
    <Stack
      sx={(theme) => ({
        width: 240,
        padding: 6,
        borderRadius: 6,
        backgroundColor: theme.palette.background.primary,
      })}
    >
      <NavigationHeader />
      <NavigationTabList />
      {/* TODO: use real avatar */}
      <NavigationFooter userAvatar="https://i.pravatar.cc/150?img=48" />
    </Stack>
  );
}

export default NavigationCard;
