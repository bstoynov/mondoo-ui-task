import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  spacing: 4,
  palette: {
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#F8F5DE",
    },
    background: {
      primary: "#0000004d",
      primaryHighlight: "#F8F5DE33",
      primaryHover: "#00000099",
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
