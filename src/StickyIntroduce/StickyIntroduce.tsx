import React from "react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

type Props = { title: string; formLink: string };

type Links = { text: string; href: string }[];
const links: Links = [
  { text: "店舗情報", href: "#restaurant-info" },
  { text: "料理情報", href: "#food-info" },
  { text: "メニュー", href: "#menu" },
  { text: "レビュー", href: "#review" },
];

const StickyIntroduce = (props: Props): JSX.Element => (
  <div>
    <div>{props.title}</div>
    <Flex justifyContent="space-around">
      {links.map((link) => (
        <Box>
          <a href={link.href}>{link.text}</a>
        </Box>
      ))}
      <Box>
        <a href={props.formLink}>口コミ投稿</a>
      </Box>
    </Flex>
  </div>
);

export default StickyIntroduce;
