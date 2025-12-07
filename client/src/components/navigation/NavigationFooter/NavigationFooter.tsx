import { useUser } from "@/hooks";
import { Stack } from "@mui/material";

function NavigationFooter() {
  const { avatar } = useUser();

  if (!avatar) return null;

  return (
    <Stack
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{ aspectRatio: 1 }}
    >
      <img src={avatar} width={36} height={36} style={{ borderRadius: 18 }} />
    </Stack>
  );
}

export default NavigationFooter;
