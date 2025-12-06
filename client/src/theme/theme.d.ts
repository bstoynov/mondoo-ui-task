import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    primaryHover: string;
    secondaryHover: string;
  }

  interface TypeBackground {
    primary: string;
    primaryHighlight: string;
  }
}
