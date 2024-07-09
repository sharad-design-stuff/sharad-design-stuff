import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import HeartLarge from "../assets/images/Tap-Heart-Ico-lrg.png";
import Polygon from "../assets/images/Polygon-Icon.png";
import { CustomArrowIcon, CustomCloseIcon } from "./CustomIcons";
import Coin from "../assets/images/Coin.svg";
import CoinSmall from "../assets/images/CoinSmall.svg";
import CrownLarge from "../assets/images/CrownLarge.svg";
import DollarIcon from "../assets/images/DollarIcon.svg";
import UserDpLarge from "../assets/images/UserDpLarge.svg";

import BoosterIcon1 from "../assets/images/BoosterIcon1.svg";
import BoosterIcon2 from "../assets/images/BoosterIcon2.svg";
import BoosterIcon3 from "../assets/images/BoosterIcon3.svg";
import BoosterIcon4 from "../assets/images/BoosterIcon4.svg";
import BoosterIcon5 from "../assets/images/BoosterIcon5.svg";
import BoosterIcon6 from "../assets/images/BoosterIcon6.svg";
import BoosterIcon7 from "../assets/images/BoosterIcon7.svg";
import TrophySmall from "../assets/images/TrophySmall.png";
import TapLargeIcon from "../assets/images/TapLargeIcon.svg";
import RefillBattery from "../assets/images/RefillBattery.svg";
import UserDp from "../assets/images/UserDp.svg";

import MultiTap from "../assets/images/MultiTap.svg";
import EnergyLimit from "../assets/images/EnergyLimit.svg";
import BoostLargeIcon from "../assets/images/BoostLargeIcon.svg";

import RefillSpeed from "../assets/images/RefillSpeed.svg";

import { Link } from "react-router-dom";
import { ConfigProvider, Drawer } from "antd";

function LeaderBoard() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const showDrawer3 = () => {
    setOpen3(true);
  };
  const showDrawer4 = () => {
    setOpen4(true);
  };
  const showDrawer5 = () => {
    setOpen5(true);
  };
  const onClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
  };
  return (
    <div className="">
      <div className="mt-0 p-2 justify-around flex flex-col relative gap-1 mb-3">
        <div className="text-white flex flex-col items-center gap-1 pt-3">
          <span className="text-2xl font-medium dark:text-white text-black">
            Leaderboard
          </span>
          <span className="text-[13px] text-center text-zinc-400">
            View your leader board details
          </span>
        </div>
      </div>

      <TabGroup className={`text-white cstmTab px-0 cstm_shadow pb-20 mt-2`}>
        <TabList className="flex flex-row gap-0 dark:bg-zinc-900 bg-[#E8E8E8] rounded-t-[20px] border-[2px] dark:border-[#27392A] border-[#ddd]">
          <Tab className="w-1/3">All time</Tab>
          <Tab className="w-1/3">This week</Tab>
          <Tab className="w-1/3">This month</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={`pb-20`}>
            <div className="p-2">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center me-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 text-black dark:text-white">
                    1
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center relative mt-10">
                  <img
                    src={CrownLarge}
                    className="z-10 h-[75px] absolute top-[-40px]"
                    alt="Logo"
                  />
                  <span className="bg-gradient-to-r from-[#E8F843] to-[#19FE62] h-[130px] w-[130px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-zinc-950 border-[#fff]">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[50px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center ms-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 dark:text-white text-black">
                    3
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] pb-2 mx-3 border-[1px] dark:!border-[#314334] border-[#fff] rounded-xl h-full sml_shadow">
              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      1
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      2
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      3
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      4
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      5
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      6
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      7
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className={`pb-20`}>
          <div className="p-2">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center me-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 text-black dark:text-white">
                    1
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center relative mt-10">
                  <img
                    src={CrownLarge}
                    className="z-10 h-[75px] absolute top-[-40px]"
                    alt="Logo"
                  />
                  <span className="bg-gradient-to-r from-[#E8F843] to-[#19FE62] h-[130px] w-[130px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-zinc-950 border-[#fff]">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[50px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center ms-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 dark:text-white text-black">
                    3
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] pb-2 mx-3 border-[1px] dark:!border-[#314334] border-[#fff] rounded-xl h-full sml_shadow">
              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      1
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      2
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      3
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      4
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      5
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      6
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      7
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className={`pb-20`}>
          <div className="p-2">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center me-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 text-black dark:text-white">
                    1
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center relative mt-10">
                  <img
                    src={CrownLarge}
                    className="z-10 h-[75px] absolute top-[-40px]"
                    alt="Logo"
                  />
                  <span className="bg-gradient-to-r from-[#E8F843] to-[#19FE62] h-[130px] w-[130px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-zinc-950 border-[#fff]">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[50px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center ms-[-20px]">
                  <span className="dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-0 flex flex-col rounded-full w-[30px] h-[30px] items-center justify-center font-semibold text-sm mb-3 dark:text-white text-black">
                    3
                  </span>
                  <span className="bg-[#3D5A42] h-[85px] w-[85px] rounded-full flex flex-col items-center justify-center border-[5px] dark:border-black border-white">
                    <img
                      src={UserDpLarge}
                      className="relative z-10 h-[35px]"
                      alt="Logo"
                    />
                  </span>
                  <span className="text-[15px] mt-3 dark:text-white text-black">
                    Addy jhon
                  </span>
                  <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                    <img
                      src={DollarIcon}
                      className="rounded-md h-[18px]"
                      alt="Logo"
                    />
                    +5,000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] pb-2 mx-3 border-[1px] dark:!border-[#314334] border-[#fff] rounded-xl h-full sml_shadow">
              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      1
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      2
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      3
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      4
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      5
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      6
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-4 items-center w-full">
                  <div className="flex flex-row w-[30px] h-[30px] items-center justify-center shrink-0 bg-[#19FE62] rounded-lg">
                    <span className="text-zinc-950 font-semibold text-[14px]">
                      7
                    </span>
                  </div>
                  <div>
                    <img src={UserDp} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Lissa watson
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      +5,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* <TabPanel>sfsdfsdfds</TabPanel> */}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default LeaderBoard;
