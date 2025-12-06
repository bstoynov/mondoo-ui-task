import { Stack } from "@mui/material";

export type NavigationFooterProps = {
  userAvatar: string;
};

function NavigationFooter({ userAvatar }: NavigationFooterProps) {
  return (
    <Stack height={240} justifyContent="center" alignItems="center">
      <img
        src={userAvatar}
        width={36}
        height={36}
        style={{ borderRadius: 18 }}
      />
    </Stack>
  );
}

export default NavigationFooter;
