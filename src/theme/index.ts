import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    yellow: {
      700: "#FFF5E0",
    },
    pink: {
      800: "#a53019",
      700: "#FFA0AC",
      600: "#e4654c",
      500: "#EE9E8E",
      400: "#FFDBC3",
    },
    gray: {
      100: "#E0E0E0",
      500: "#707070",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
