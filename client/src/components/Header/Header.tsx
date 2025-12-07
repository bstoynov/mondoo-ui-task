import { Stack, Typography } from "@mui/material";
import Search from "../Search/Search";

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography
        fontSize={36}
        letterSpacing="0.06em"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Home
      </Typography>

      <Search />
    </Stack>
  );
}

export default Header;
