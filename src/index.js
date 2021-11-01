import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme.js";
import TagsBox from "./TagsBox/TagsBox.jsx";
//import remove from "./removeSocialWidgets/removeSocialWidgets.js";

(() => {
  // remove();

  //絞り込み検索のUIを書き換える
  const element = document.getElementsByClassName("archive_filter_tag")[0];
  element.innerHTML = "";
  ReactDOM.render(
    <ChakraProvider theme={theme}>
      <TagsBox></TagsBox>
    </ChakraProvider>,
    element
  );
})();
