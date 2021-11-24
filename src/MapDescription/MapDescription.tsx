import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const MapDescription = (): JSX.Element => {
  return (
    <Flex wrap={"wrap"}>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box>ピンの色：</Box>
              <AccordionIcon></AccordionIcon>
            </AccordionButton>
          </h2>
        </AccordionItem>
        <AccordionPanel>
          <Box>
            <Image
              src="https://linked-by-vecipe.com/blog/wp-content/uploads/2021/11/greenPin.gif"
              alt="green-pin"
              boxSize="64px"
            ></Image>
            <Box>全ヴィーガン（すべてのメニューがヴィーガン対応）​</Box>
          </Box>
          <Box>
            <Image
              src="https://linked-by-vecipe.com/blog/wp-content/uploads/2021/11/orangePin.gif"
              alt="orange-pin"
              boxSize="64px"
            ></Image>
            <Box>一部ヴィーガン（一部のメニューがヴィーガン対応）​</Box>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Flex>
  );
};

export default MapDescription;
