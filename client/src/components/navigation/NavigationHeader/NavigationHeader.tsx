import { Stack } from "@mui/material";
import logo from "@/assets/logo.svg";

function NavigationHeader() {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ aspectRatio: 1 }}>
      <img src={logo} width={50} height={50} />
    </Stack>
  );
}

export default NavigationHeader;
