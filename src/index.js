import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { App } from "./App.jsx";

const element = document.getElementsByClassName("archive_filter_tag")[0];
ReactDOM.render(
  <ChakraProvider>
    <App></App>
  </ChakraProvider>,
  element
);
