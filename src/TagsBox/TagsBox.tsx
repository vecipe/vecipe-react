import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

type TagMap = { tag: string; value: number };
type CategorizedTags = { category: string; tagMaps: TagMap[] };
type AllTags = CategorizedTags[];

const allTags: AllTags = [
  {
    category: "昼予算",
    tagMaps: [
      { tag: "～1000円", value: 197 },
      { tag: "1000円～2000円", value: 196 },
      { tag: "2000円～", value: 195 },
    ],
  },
  {
    category: "夜予算",
    tagMaps: [
      { tag: "～1000円", value: 193 },
      { tag: "1000円～2000円", value: 192 },
      { tag: "2000円～3000円", value: 191 },
      { tag: "3000円～4000円", value: 190 },
      { tag: "4000円～5000円", value: 189 },
      { tag: "5000円～10000円", value: 188 },
      { tag: "10000円～", value: 187 },
    ],
  },
  {
    category: "場面",
    tagMaps: [
      { tag: "合コン", value: 102 },
      { tag: "パーティー", value: 103 },
      { tag: "友達/知人と", value: 104 },
      { tag: "恋人と", value: 101 },
      { tag: "学生と", value: 109 },
      { tag: "家族/子供と", value: 100 },
      { tag: "外国の方と", value: 106 },
      { tag: "ビジネスパートナーと", value: 107 },
      { tag: "たくさん食べる方と", value: 163 },
      { tag: "お店の方と", value: 105 },
    ],
  },
  {
    category: "詳細",
    tagMaps: [
      { tag: "デリバリー", value: 96 },
      { tag: "テイクアウト", value: 95 },
      { tag: "貸切", value: 89 },
      { tag: "全席禁煙", value: 94 },
      { tag: "感染対策Lev7~", value: 88 },
      { tag: "全肯定", value: 99 },
    ],
  },
  {
    category: "料理",
    tagMaps: [
      { tag: "カロリー表示", value: 73 },
      { tag: "食べ放題", value: 74 },
      { tag: "飲み放題", value: 75 },
      { tag: "コース料理", value: 76 },
      { tag: "朝食", value: 77 },
    ],
  },
  {
    category: "施設",
    tagMaps: [
      { tag: "子ども連れ", value: 72 },
      { tag: "ペット同伴", value: 83 },
      { tag: "車いす入店", value: 84 },
      { tag: "駐車場", value: 69 },
      { tag: "無料Wi-Fi", value: 71 },
      { tag: "コンセント", value: 70 },
    ],
  },
  {
    category: "お酒",
    tagMaps: [
      { tag: "日本酒", value: 78 },
      { tag: "焼酎", value: 79 },
      { tag: "ワイン", value: 80 },
      { tag: "カクテル", value: 81 },
      { tag: "お酒こだわり", value: 111 },
    ],
  },
  {
    category: "座席",
    tagMaps: [
      { tag: "カウンター席", value: 85 },
      { tag: "ソファー席", value: 86 },
      { tag: "座敷", value: 87 },
      { tag: "個室", value: 97 },
      { tag: "カップルシート", value: 98 },
    ],
  },
];

const TagsBox = (): JSX.Element => {
  return (
    <Tabs colorScheme="vecipe.green" variant="soft-rounded">
      <TabList>
        {allTags.map((tags) => (
          <Tab
            sx={{
              _focus: {
                boxShadow: "xs",
              },
            }}
          >
            {tags.category}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {allTags.map((tags) => {
          return (
            <TabPanel>
              <Stack>
                {tags.tagMaps.map((tagMap) => (
                  <Checkbox
                    value={tagMap.value}
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
                    {tagMap.tag}
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
