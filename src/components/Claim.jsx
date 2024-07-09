import React from "react";
import {
  CustomArrowIcon,
  CustomCopyIcon,
  CustomReloadIcon,
  CustomUserIcon,
} from "./CustomIcons";

import Heart from "../assets/images/Heart-Icon-sml.svg";
import HeartSmall from "../assets/images/Tap-Heart-Ico-sml.png";
import ReferralIconLarge from "../assets/images/ReferralIconLarge.svg";
import Boost from "../assets/images/Boost-Icon.png";
import CopyIcon from "../assets/images/CopyIcon.svg";
import CoinSmall from "../assets/images/CoinSmall.svg";
import Crown1 from "../assets/images/CrownLarge1.svg";

import { Flex, Progress } from "antd";
const twoColors = {
  "0%": "#E8F843",
  "100%": "#19FE62",
};
import ReferralIcon from "../assets/images/ReferralIcon.svg";
import DollarIcon from "../assets/images/DollarIcon.svg";

import Polygon from "../assets/images/Gift-Icon.svg";
import Polygon1 from "../assets/images/Gift-Icon-1.png";

function Claim() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 flex flex-col justify-between mt-2 items-center my-5">
        <h2 className="text-2xl font-medium text-white dark:text-black">Baron</h2>
        <p className="text-[13px] text-center text-zinc-400">
          Your number of shares determines the league you enter
        </p>
      </div>
      <div className="p-3 space-y-0 cstm_shadow bg-black dark:bg-[#E8E8E8] h-full justify-between flex flex-col pb-20">
        <div className="relative z-50 items-center bg-[#132516] p-2 rounded-lg">
          <div className="flex items-center flex-col px-3 relative z-50">
            <div className="flex flex-row items-center gap-1">
              <img src={CoinSmall} className="h-[25px]" alt="Logo" />
              <span className="text-white font-medium text-[14px]">
                500/10,000
              </span>
            </div>
          </div>
          <Flex vertical>
            <Progress
              className="[&_.ant-progress-inner]:bg-[#344B38] [&_.ant-progress-inner]:p-[2px] rounded-xl"
              percent={70}
              status="active"
              strokeColor={twoColors}
              showInfo={false}
            />
          </Flex>
        </div>

        <div className="flex flex-col items-center w-full">
          <img src={Crown1} className="rounded-md" alt="Logo" />
        </div>
        <div className="flex flex-row gap-2.5">
          <div className="bg-gradient-to-l from-[#E8F843] to-[#19FE62] text-[#000] h-[40px] rounded-lg w-full items-center justify-center flex text-[14px] font-semibold gap-2 uppercase">
            {/* <img src={CopyIcon} className="rounded-md" alt="Logo" /> */}
            Claim
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claim;
