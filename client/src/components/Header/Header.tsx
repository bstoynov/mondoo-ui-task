import { Stack, Typography } from "@mui/material";
import Search from "../Search/Search";
import DateField from "../DateField/DateField";

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

      <Stack direction="row" gap={4}>
        <DateField />
        <Search />
      </Stack>
    </Stack>
  );
}

export default Header;
