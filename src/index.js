import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import App from "./App.jsx";
import theme from "./theme.js";

const element = document.getElementsByClassName("archive_filter_tag")[0];
element.innerHTML = "";
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App></App>
  </ChakraProvider>,
  element
);
