import React from "react";
import { Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

type Props = { title: string; formLink: string };

type Links = { text: string; href: string }[];
const links: Links = [
  { text: "店舗情報", href: "#restaurant-info" },
  { text: "料理情報", href: "#food-info" },
  { text: "メニュー", href: "#menu" },
  { text: "レビュー", href: "#review" },
];

const StickyIntroduce = (props: Props): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode !== "light") {
    toggleColorMode();
  }

  return (
    <div className="introduce_shoulder_copy">
      <div>{props.title}</div>
      <Flex justifyContent="space-around">
        {links.map((link) => (
          <a href={link.href}>{link.text}</a>
        ))}
        <a href={`#${props.formLink}`}>口コミ投稿</a>
      </Flex>
    </div>
  );
};

export default StickyIntroduce;
