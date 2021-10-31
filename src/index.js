import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import TagsBox from "./TagsBox/TagsBox.jsx";
import theme from "./theme.js";

//絞り込み検索のUIを書き換える
const element = document.getElementsByClassName("archive_filter_tag")[0];
element.innerHTML = "";
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <TagsBox></TagsBox>
  </ChakraProvider>,
  element
);

//おすすめ店舗リストのソーシャルウィジェットを削除する
const pathname = document.location.pathname;
if (pathname === "/blog/保存リスト") {
  [
    ...document.getElementsByClassName(
      "veu_socialSet veu_socialSet-position-after veu_contentAddSection"
    ),
  ].map((element) => {
    element.remove();
  });
}
