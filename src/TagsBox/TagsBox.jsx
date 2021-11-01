import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

const allTags = new Map([
  [
    "場面",
    new Map([
      ["合コン", 102],
      ["パーティー", 103],
      ["友達/知人と", 104],
      ["恋人と", 101],
      ["学生と", 109],
      ["家族/子供と", 100],
      ["外国の方と", 106],
      ["ビジネスパートナーと", 107],
      ["たくさん食べる方と", 163],
      ["お店の方と", 105],
    ]),
  ],
  [
    "詳細",
    new Map([
      ["デリバリー", 96],
      ["テイクアウト", 95],
      ["貸切", 89],
      ["全席禁煙", 94],
      ["感染対策Lev7~", 88],
      ["全肯定", 99],
    ]),
  ],
  [
    "料理",
    new Map([
      ["カロリー表示", 73],
      ["食べ放題", 74],
      ["飲み放題", 75],
      ["コース料理", 76],
      ["朝食", 77],
    ]),
  ],
  [
    "施設",
    new Map([
      ["子ども連れ", 72],
      ["ペット同伴", 83],
      ["車いす入店", 84],
      ["駐車場", 69],
      ["無料Wi-Fi", 71],
      ["コンセント", 70],
    ]),
  ],
  [
    "お酒",
    new Map([
      ["日本酒", 78],
      ["焼酎", 79],
      ["ワイン", 80],
      ["カクテル", 81],
      ["お酒こだわり", 111],
    ]),
  ],
  [
    "座席",
    new Map([
      ["カウンター席", 85],
      ["ソファー席", 86],
      ["座敷", 87],
      ["個室", 97],
      ["カップルシート", 98],
    ]),
  ],
]);
const categories = [...allTags.keys()];

const TagsBox = () => {
  return (
    <Tabs colorScheme="vecipe.green" variant="soft-rounded">
      <TabList>
        {categories.map((category) => (
          <Tab
            sx={{
              _focus: {
                boxShadow: "xs",
              },
            }}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {categories.map((category) => {
          const tags = allTags.get(category);
          const tagNames = [...tags.keys()];
          return (
            <TabPanel>
              <Stack>
                {tagNames.map((tagName) => (
                  <Checkbox
                    value={tags.get(tagName)}
                    name="filter_tag[]"
                    colorScheme="vecipe.orange"
                    sx={{
                      ".chakra-checkbox__control": {
                        borderColor: "vecipe.green.500",
                      },
                      ".chakra-checkbox__control[data-focus]": {
                        boxShadow: "xs",
                      },
                    }}
                  >
                    {tagName}
                  </Checkbox>
                ))}
              </Stack>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default TagsBox;
