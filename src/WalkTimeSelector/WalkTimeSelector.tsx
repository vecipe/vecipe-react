import React from "react";
import { Select } from "@chakra-ui/select";

// 単位は分
const walkTimes = [5, 10, 15, 20, 30, 45, 60, 90, 120];
// 時速5kmを分速に換算
const humanSpeed = 5 / 60;
// 距離に換算
const distances = walkTimes.map((time) => time * humanSpeed);

const WalkTimeSelector = (): JSX.Element => (
  <Select
    placeholder="時間"
    className="gmwd_store_locator_radius1"
    id="gmwd_store_locator_radius1"
  >
    {walkTimes.map((time, i) => (
      <option value={distances[i]}>{`${time}分`}</option>
    ))}
  </Select>
);

export default WalkTimeSelector;
