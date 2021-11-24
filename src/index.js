import ReactDOM from "react-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme.js";
import TagsBox from "./TagsBox/TagsBox.tsx";
import WalkTimeSelector from "./WalkTimeSelector/WalkTimeSelector.tsx";
import MapDescription from "./MapDescription/MapDescription.tsx";
// import StickyIntroduce from "./StickyIntroduce/StickyIntroduce.tsx";
//import remove from "./removeSocialWidgets/removeSocialWidgets.js";

(() => {
  // remove();

  //絞り込み検索のUIを書き換える
  const element = document.getElementsByClassName("archive_filter_tag")[0];
  if (element) {
    element.innerHTML = "";
    ReactDOM.render(
      <ChakraProvider theme={theme}>
        <TagsBox></TagsBox>
      </ChakraProvider>,
      element
    );
  }

  const selectorContainer = document.querySelector(
    "#gmwd_container_1 > div:nth-child(4) > div > div > div:nth-child(1) > div.col-lg-7.col-md-7.col-sm-12.col-xs-12 > div:nth-child(2) > div:nth-child(2)"
  );
  if (selectorContainer) {
    document.querySelector(
      "#gmwd_container_1 > div:nth-child(4) > div > div > div:nth-child(1) > div.col-lg-7.col-md-7.col-sm-12.col-xs-12 > div:nth-child(2) > div:nth-child(1) > label"
    ).textContent = "徒歩";
    selectorContainer.innerHTML = "";
    ReactDOM.render(
      <ChakraProvider theme={theme}>
        <WalkTimeSelector></WalkTimeSelector>
      </ChakraProvider>,
      selectorContainer
    );
  }

  const mapElement = document.querySelector(
    "#gmwd_container_1 > div:nth-child(5)"
  );
  if (mapElement) {
    const mapDescriptionContainer = document.createElement("div");
    mapElement.parentElement.insertBefore(mapDescriptionContainer, mapElement);
    ReactDOM.render(
      <ChakraProvider theme={theme}>
        <MapDescription></MapDescription>
      </ChakraProvider>,
      mapDescriptionContainer
    );
  }

  // const element02 = document.querySelector(
  //   "#article > div.introduce_shoulder_copy"
  //   //"#sticky-introduce"
  // );
  // if (element02) {
  //   const title = element02.textContent;
  //   const formLink = document
  //     .querySelector(".rwp-ratings-form-wrap")
  //     .getAttribute("id");
  //   element02.removeAttribute("class");
  //   ReactDOM.render(
  //     <ChakraProvider theme={theme}>
  //       <StickyIntroduce title={title} formLink={formLink}></StickyIntroduce>
  //     </ChakraProvider>,
  //     element02
  //   );
  // }

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
