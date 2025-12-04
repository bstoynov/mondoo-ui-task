import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  spacing: 4,
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#F8F5DE",
    },
    error: {
      main: "#DF074F",
    },
    success: {
      main: "#2FC089",
    },
  },
  typography: {
    fontFamily:
      '"Mona Sans", "Instrument Sans", "Helvetica", "Arial", sans-serif',
  },
});
