import { Stack } from "@mui/material";
// TODO: fix ts
import logo from "@/assets/logo.svg";

function NavigationHeader() {
  return (
    <Stack height={240} justifyContent="center" alignItems="center">
      <img src={logo} width={50} height={50} />
    </Stack>
  );
}

export default NavigationHeader;
