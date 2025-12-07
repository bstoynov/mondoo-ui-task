import { createTheme } from "@mui/material/styles";
import "@mui/x-data-grid/themeAugmentation";

export const appTheme = createTheme({
  spacing: 4,
  palette: {
    DataGrid: { headerBg: "#f0f0f02e" },
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: "#F8F5DE",
      accent: "#0A0A22",
    },
    background: {
      primary: "#0000004d",
      primaryHover: "#00000099",
      primaryHoverSubtle: "#00000054",
      primaryHighlight: "#F8F5DE33",
      primaryHighlightSubtle: "#f7f7f70d",
      accent: "#F8F5DE",
      primaryGradient:
        "radial-gradient(circle, #C723DC 0%, #6B1376 50%, #361376 100%)",
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
