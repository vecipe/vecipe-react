import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AspectRatio, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const MapDescription = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode !== "light") {
    toggleColorMode();
  }

  return (
    <Flex wrap={"wrap"}>
      <Accordion defaultIndex={0} allowToggle={true}>
        <AccordionItem>
          <h5>
            <AccordionButton
              borderRadius="md"
              sx={{ _focus: { boxShadow: "xs" } }}
            >
              <Box>ピンの色：</Box>
              <AccordionIcon></AccordionIcon>
            </AccordionButton>
          </h5>
          <AccordionPanel>
            <Flex direction="row">
              <Image
                src="https://linked-by-vecipe.com/blog/wp-content/uploads/2021/11/greenPin.gif"
                alt="green-pin"
                boxSize="32px"
                fit="contain"
              ></Image>
              <Box>
                <span style={{ display: "inline-block" }}>全ヴィーガン</span>
                <span style={{ display: "inline-block" }}>
                  （すべてのメニューがヴィーガン対応）
                </span>
              </Box>
            </Flex>
            <Flex direction="row">
              <Image
                src="https://linked-by-vecipe.com/blog/wp-content/uploads/2021/11/orangePin.gif"
                alt="orange-pin"
                boxSize="32px"
                fit="contain"
              ></Image>
              <Box>
                <span style={{ display: "inline-block" }}>一部ヴィーガン</span>
                <span style={{ display: "inline-block" }}>
                  （一部のメニューがヴィーガン対応）
                </span>
              </Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default MapDescription;
