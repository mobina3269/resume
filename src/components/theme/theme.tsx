import * as React from "react";
import { PaletteColorOptions } from "@mui/material";
import { PaletteColor } from "@mui/material";
import { createTheme } from "@mui/material";
import { breakpointGenerator } from "../../utils/breakpointGenerator";

const customBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title0: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
    title5: React.CSSProperties;
    subtitle0: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    text0: React.CSSProperties;
    text1: React.CSSProperties;
    text2: React.CSSProperties;
    text3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title0?: React.CSSProperties;
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    title4?: React.CSSProperties;
    title5?: React.CSSProperties;
    subtitle0?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    text0?: React.CSSProperties;
    text1?: React.CSSProperties;
    text2?: React.CSSProperties;
    text3?: React.CSSProperties;
  }
  interface Palette {
    customPalette?: PaletteColor & {
      sidebarBG: string;
      disabled: string;
      border: string;
    };
  }

  interface PaletteOptions {
    customPalette?: PaletteColorOptions & {
      sidebarBG: string;
      disabled: string;
      border: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title0: true;
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    title5: true;
    subtitle0: true;
    subtitle1: true;
    subtitle2: true;
    text0: true;
    text1: true;
    text2: true;
    text3: true;
  }
}

export const generateTheme = (mode: "dark" | "light", lan: "en" | "fa") => {
  const fontFamily = lan === "fa" ? "dana VF" : "sans-serif";

  return createTheme({
    breakpoints: { values: customBreakpoints },

    palette: {
      mode,
      primary: { main: "#77B0AA", light: "#E3FEF7", dark: "#135D66" },
      secondary: { main: "#EAD8C0", light: "#FFF2E1", dark: "#D1BB9E" },
      error: {
        main: "#F83232",
        light: "#FF7373",
        dark: "rgba(181, 91, 82, 1)",
      },
      warning: { main: "#FFC700" },
      info: { main: "#00C2FF" },
      customPalette: {
        main: "#444",
        light: "#EBEBEB",
        dark: "",
        sidebarBG: mode === "dark" ? "#333" : "#DDD",
        disabled: mode === "dark" ? "#FFF" : "#666",
        border: mode === "dark" ? "#AAA" : "#555",
      },
    },

    typography: {
      fontFamily,
      button: { textTransform: "capitalize" },
      title0: { ...breakpointGenerator([27, 34, 40]) },
      title1: { ...breakpointGenerator([22, 25, 34]) },
      title2: { ...breakpointGenerator([20, 22, 28]) },
      title3: { ...breakpointGenerator([18, 20, 24]) },
      subtitle0: { ...breakpointGenerator([18, 20, 22]) },
      subtitle1: { ...breakpointGenerator([16, 18, 20]) },
      subtitle2: { ...breakpointGenerator([14, 16, 18]) },
      text0: { ...breakpointGenerator([14, 14, 16]) },
      text1: { ...breakpointGenerator([12, 12, 14]) },
      text2: { ...breakpointGenerator([10, 10, 12]) },
      text3: { ...breakpointGenerator([6, 8, 10]) },
    },

    components: {
      MuiTextField: { defaultProps: { size: "small" } },
      MuiTypography: { defaultProps: { fontFamily } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          contained: { fontWeight: "bold", color: "white", fontFamily },
          outlined: { fontWeight: "bold", fontFamily },
        },
      },
      MuiBottomNavigationAction: { styleOverrides: { label: { fontFamily } } },
    },
  });
};
