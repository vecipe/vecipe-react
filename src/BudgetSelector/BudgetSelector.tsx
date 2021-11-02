import React from "react";
import { VStack } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const budgetOptions = new Map([
  [
    "夜予算",
    [
      "～1,000円",
      "1,000円～2,000円",
      "2,000円～3,000円",
      "3,000円～4,000円",
      "4,000円～5,000円",
      "5,000円～10,000円",
      "10,000円～",
    ].reverse(),
  ],
  ["昼予算", ["～1,000円", "1,000円～2,000円", "2,000円～"].reverse()],
]);
const categories = [...budgetOptions.keys()];

const BudgetSelector = () => (
  <VStack>
    <div>平均価格帯</div>
    <Accordion>
      {categories.map((category) => (
        <AccordionItem>
          <AccordionButton>
            {category}
            <AccordionIcon></AccordionIcon>
          </AccordionButton>
          <AccordionPanel>
            {budgetOptions.get(category).map((option) => (
              <Checkbox>{option}</Checkbox>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </VStack>
);

export default BudgetSelector;
