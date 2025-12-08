import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    accent: string;
  }
  interface TypeBackground {
    primary: string;
    accent: string;
    primaryHighlight: string;
    primaryHover: string;
    primaryHoverSubtle: string;
    primaryHighlightSubtle: string;
    primaryGradient: string;
    secondary: string;
  }
}
