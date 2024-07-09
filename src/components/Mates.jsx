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

import { Flex, Progress } from "antd";
const twoColors = {
  "0%": "#ca789f",
  "100%": "#ff0079",
};
import ReferralIcon from "../assets/images/ReferralIcon.svg";
import DollarIcon from "../assets/images/DollarIcon.svg";

import Polygon from "../assets/images/Gift-Icon.svg";
import Polygon1 from "../assets/images/Gift-Icon-1.png";

import Crown1 from "../assets/images/Crown1.svg";
import Crown2 from "../assets/images/Crown2.png";
import Crown3 from "../assets/images/Crown3.svg";
import Crown4 from "../assets/images/Crown4.svg";
import Crown5 from "../assets/images/Crown5.svg";
import Crown6 from "../assets/images/Crown6.svg";
import Crown7 from "../assets/images/Crown7.svg";
function Mates() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 flex flex-col justify-between mt-2 items-center my-5">
        <h2 className="text-2xl font-medium dark:text-white text-black">0 Referral</h2>
        <p className="text-[13px] text-center text-zinc-400">
          You and your friend will receive bonuses
        </p>
      </div>
      <div className="p-3 space-y-2 cstm_shadow dark:bg-black bg-[#E8E8E8] h-full justify-between flex flex-col">
        <div className="dark:bg-[#1C281E] bg-[#fff] p-1.5 rounded-lg flex flex-row justify-between sml_shadow">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col items-center justify-center">
              {" "}
              <img src={Polygon} className="rounded-md" alt="Logo" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="dark:text-white text-black font-semibold text-[14px]">
                Invite a friend
              </h4>
              <span className="font-normal dark:text-zinc-300 text-zinc-600 text-[13px]">
                <span className="text-[#EBBF32] font-semibold">+12,000 </span> For
                you & your friend
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col justify-between items-center pt-3 text-white h-full">
          <h3 className="text-white font-medium text-lg text-center flex ">
            List of your friends
          </h3>
          <div className="flex flex-col items-center min-h-[250px] gap-1">
            <img src={ReferralIconLarge} className="rounded-md" alt="Logo" />
            <span className="text-xl font-medium mt-3">No referrals</span>
            <span className="text-sm text-zinc-400">
              You don’t have referrals right now!
            </span>
          </div>
        </div> */}

        <div className="flex flex-col justify-start items-center pt-3 text-white h-full">
          <h3 className="dark:text-white text-black font-medium text-lg text-center flex ">
            List of your friends
          </h3>

          <div className="flex flex-col items-center min-h-[250px] gap-1 w-full dark:!bg-[#1C281E] !bg-[#fff] rounded-lg mt-3 sml_shadow">
            <div className="flex flex-col dark:border-[#314334] border-[#ddd] border-b-[1px] w-full">
              <div className="px-2.5 py-2.5 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={ReferralIcon} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      @teleusername
                    </h4>
                    <span className="font-normal text-[14px] flex flex-row items-center gap-2 text-black dark:text-white">
                      <img
                        src={Crown1}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      Baron
                      {/* <CustomArrowIcon className={`text-lg`} /> */}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <span className="font-semibold text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    30000
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col dark:border-[#314334] border-[#ddd] border-b-[1px] w-full">
              <div className="px-2.5 py-2.5 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={ReferralIcon} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      @teleusername
                    </h4>
                    <span className="font-normal text-[14px] flex flex-row items-center gap-2 text-black dark:text-white">
                      <img
                        src={Crown2}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      Viscount
                      {/* <CustomArrowIcon className={`text-lg`} /> */}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <span className="font-semibold text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    30000
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col dark:border-[#314334] border-[#ddd] border-b-[1px] w-full">
              <div className="px-2.5 py-2.5 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={ReferralIcon} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      @teleusername
                    </h4>
                    <span className="font-normal text-[14px] flex flex-row items-center gap-2 dark:text-white text-black">
                      <img
                        src={Crown3}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      Earl
                      {/* <CustomArrowIcon className={`text-lg`} /> */}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <span className="font-semibold text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    30000
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="px-2.5 py-2.5 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={ReferralIcon} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      @teleusername
                    </h4>
                    <span className="font-normal text-[14px] flex flex-row items-center gap-2 dark:text-white text-black">
                      <img
                        src={Crown4}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      Marquess
                      {/* <CustomArrowIcon className={`text-lg`} /> */}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <span className="font-semibold text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    30000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="bg-gradient-to-r from-[#E8F843] to-[#19FE62] text-[#000] h-[50px] rounded-lg w-full items-center justify-center flex text-[14px] font-semibold gap-2">
            <img src={CopyIcon} className="rounded-md" alt="Logo" />
            Copy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mates;
