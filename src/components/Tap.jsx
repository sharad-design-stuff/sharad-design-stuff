import React, { useEffect, useState } from "react";
import {
  CustomArrowIcon,
  CustomCloseIcon,
  CustomUserIcon,
} from "./CustomIcons";

import Heart from "../assets/images/Heart-Icon-sml.svg";
import Coin from "../assets/images/Coin.svg";
import HeartLarge from "../assets/images/Tap-Heart-Ico-lrg.png";
import Boost from "../assets/images/Boost-Icon.png";
import Energy from "../assets/images/Energy-Icon.png";
import Pattern from "../assets/images/pattern-mask.png";
import TrophySmall from "../assets/images/TrophySmall.png";
import CoinSmall from "../assets/images/CoinSmall.svg";
import Flag from "../assets/images/Flag.svg";
import Flag1 from "../assets/images/flages/Flage1.svg";
import Flag2 from "../assets/images/flages/Flage2.svg";
import Flag3 from "../assets/images/flages/Flage3.svg";
import Flag4 from "../assets/images/flages/Flage4.svg";
import Flag5 from "../assets/images/flages/Flage5.svg";
import Crown2 from "../assets/images/Crown2.png";

import CoinLarge from "../assets/images/CoinLarge.svg";
import { ConfigProvider, Drawer, Switch } from "antd";

import { Flex, Progress } from "antd";
import { Link } from "react-router-dom";
import ToggleButton from './ToggleButton';
const twoColors = {
  "0%": "#E8F843",
  "100%": "#19FE62",
};

function Tap() {
  // const [darkMode, setDarkMode] = useState(false);
  // const onChange = (checked) => {
  //   console.log(`switch to ${checked}`);
  //   setDarkMode(!darkMode);
  //  };

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }, [darkMode]);

 
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
    setOpen1(false);
  };
  return (
    <div className="h-full justify-between flex flex-col">
      <div className="mt-0 p-2 justify-around flex flex-col relative gap-1 mb-3">
        <div className="text-white flex flex-col items-center gap-3 pt-3">
          <span className="text-[#19FE62] dark:text-[#06AC3B] uppercase tracking-[4px] text-sm">Your Balance</span>
          <div className="flex flex-row items-center gap-2">
            <img src={Coin} alt="Coin" />
            <span className="text-[34px] font-medium text-black dark:text-white">423,566</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
        <Link
            to="/level"
            className="dark:text-white text-black flex flex-row items-center justify-center rounded-full px-1 py-1 gap-0 font-medium"
          >
            <img src={Crown2} alt="" className="h-[22px] me-1.5" />
            <span>Viscount</span>
            <span>
              <CustomArrowIcon className={`text-[22px]`} />
            </span>
          </Link>
        </div>
      </div>
      <div className="dark:bg-zinc-950 bg-[#E8E8E8] cstm_shadow h-[75vh]">
        <div className="rounded-xl mt-1 p-2 justify-around flex flex-col relative h-full">
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex flex-row justify-between dark:text-white text-black items-center">
              <button
                className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 flex flex-row items-center rounded-full p-1 gap-2 text-center"
                onClick={showDrawer}
              >
                <img src={Flag} alt="" className="w-7 h-7" />
                <span className="text-[14px] font-medium">English</span>
                <CustomArrowIcon className={`me-1 text-[22px]`} />
              </button>
              {/* <button className="bg-white dark:bg-black bg-opacity-15 dark:bg-opacity-15 flex flex-row items-center rounded-full p-1 gap-2 text-center min-h-[36px]">
                <span className="text-[14px] font-medium ps-2">Dark Mode</span>
                <Switch
                  className="turbo_mode"
                  defaultChecked
                  onChange={onChange}
                />
                
              </button> */}
              <ToggleButton/>
            </div>
            <div className="flex flex-col items-center relative z-50">
              <div className="flex flex-col items-center z-20">
                <img src={CoinLarge} className="w-[100%]" alt="Logo" />
              </div>
              <span className="bg_blur bg-gradient-to-r from-[#E8F843] to-[#19FE62] absolute right-0 top-0 h-[150px] w-[150px] opacity-75 z-10"></span>
            </div>

            <div className="relative z-50 items-center bg-[#132516] p-2 rounded-lg">
              <div className="flex items-center flex-col px-3 relative z-50">
                <div className="flex flex-row items-center gap-1">
                  <img src={CoinSmall} className="h-[25px]" alt="Logo" />
                  <span className="text-white font-semibold text-[14px]">
                    700/700
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
          </div>
        </div>
      </div>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
          },
        }}
      >
        {/* Select language Drawer Start */}
        <Drawer
          onClose={onClose}
          open={open}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black"
        >
          <button
            onClick={onClose}
            className="bg-black dark:bg-white dark:bg-opacity-50 bg-opacity-10 rounded-full p-2 absolute right-5 top-4"
          >
            <CustomCloseIcon />
          </button>
          <h2 className="text-xl font-semibold mb-6">Choose language</h2>
          <div className="space-y-2">
            <span className="relative flex flex-row gap-1 items-center dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-20 rounded-full p-1 justify-between">
              <img src={Flag1} className="" alt="Logo" />
              <span>English</span>
              <CustomArrowIcon className={`text-2xl me-1`} />
            </span>

            <span className="relative flex flex-row gap-1 items-center dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-20 rounded-full p-1 justify-between">
              <img src={Flag2} className="" alt="Logo" />
              <span>Japanese</span>
              <CustomArrowIcon className={`text-2xl me-1`} />
            </span>

            <span className="relative flex flex-row gap-1 items-center dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-20 rounded-full p-1 justify-between">
              <img src={Flag3} className="" alt="Logo" />
              <span>French</span>
              <CustomArrowIcon className={`text-2xl me-1`} />
            </span>

            <span className="relative flex flex-row gap-1 items-center dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-20 rounded-full p-1 justify-between">
              <img src={Flag4} className="" alt="Logo" />
              <span>Arabic</span>
              <CustomArrowIcon className={`text-2xl me-1`} />
            </span>

            <span className="relative flex flex-row gap-1 items-center dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-20 rounded-full p-1 justify-between">
              <img src={Flag5} className="" alt="Logo" />
              <span>Hindi</span>
              <CustomArrowIcon className={`text-2xl me-1`} />
            </span>
          </div>
        </Drawer>
        {/* Select language Drawer End */}

        
      </ConfigProvider>
    </div>
  );
}

export default Tap;
