import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme.js";
import TagsBox from "./TagsBox/TagsBox.tsx";
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

  // const budgetSetector = document.querySelector(
  //   //"#gmwd_container_1 > div:nth-child(4) > div > div > div:nth-child(1) > div.col-lg-5.col-md-5.col-sm-12.col-xs-12 > div"
  //   "#budgets"
  // );
  // budgetSetector.innerHTML = "";
  // ReactDOM.render(
  //   <ChakraProvider theme={theme}></ChakraProvider>,
  //   budgetSetector
  // );
})();
