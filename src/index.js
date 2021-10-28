import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme.js";
//import "./global.css";

import TagsBox from "./TagsBox/TagsBox.jsx";

const element = document.getElementsByClassName("archive_filter_tag")[0];
element.innerHTML = "";
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <TagsBox></TagsBox>
  </ChakraProvider>,
  element
);
