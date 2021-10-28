import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const colors = {
  vecipe: {
    green: "9cb450",
    yellow: "febb32",
  },
};
const theme = extendTheme({ config, colors });

export default theme;
