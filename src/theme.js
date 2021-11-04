import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const colors = {
  vecipe: {
    orange: {
      50: "#FFF7E6",
      100: "#FFE7B8",
      200: "#FED88A",
      300: "#FEC95D",
      400: "#FEBA2F",
      500: "#FEAB01",
      600: "#CB8901",
      700: "#986601",
      800: "#664400",
      900: "#332200",
    },
    green: {
      50: "#F5F7ED",
      100: "#E3EACD",
      200: "#D1DCAD",
      300: "#BECE8D",
      400: "#ACC06D",
      500: "#9AB34C",
      600: "#7B8F3D",
      700: "#5C6B2E",
      800: "#3E471F",
      900: "#1F240F",
    },
  },
};
const theme = extendTheme({ config, colors });

export default theme;
