import React, { useState } from "react";
import HeartLarge from "../assets/images/Tap-Heart-Ico-lrg.png";
import Polygon from "../assets/images/Polygon-Icon.png";
import { CustomArrowIcon, CustomCloseIcon } from "./CustomIcons";
import Coin from "../assets/images/Coin.svg";
import CoinSmall from "../assets/images/CoinSmall.svg";
import Crown2 from "../assets/images/Crown2.png";

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
import TapBotIcons from "../assets/images/TapBotIcons.svg";

import MultiTap from "../assets/images/MultiTap.svg";
import EnergyLimit from "../assets/images/EnergyLimit.svg";
import BoostLargeIcon from "../assets/images/BoostLargeIcon.svg";

import RefillSpeed from "../assets/images/RefillSpeed.svg";

import { Link } from "react-router-dom";
import { ConfigProvider, Drawer } from "antd";

function Boost() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);


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
  const showDrawer6 = () => {
    setOpen6(true);
  };
  const onClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);

  };
  return (
    <div className="">
      <div className="mt-0 p-2 justify-around flex flex-col relative gap-1 mb-3">
        <div className="text-white flex flex-col items-center gap-3 pt-3">
          <span className="text-[#19FE62] dark:text-[#06AC3B] uppercase tracking-[4px] text-sm">
            Your Balance
          </span>
          <div className="flex flex-row items-center gap-2">
            <img src={Coin} alt="Coin" />
            <span className="text-[34px] font-medium dark:text-white text-black">
              423,566
            </span>
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
      <div className="space-y-2 cstm_shadow dark:bg-black bg-[#E8E8E8] px-4 py-1 pb-20">
        <h3 className="dark:text-white text-black font-medium text-md mt-3">
          Daily Boosters
        </h3>

        <div className="dark:bg-[#1C281E] bg-[#fff] rounded-lg sml_shadow">
          <div className="flex flex-row justify-between p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon1} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                  5x Taps
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  3/3
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between p-2">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon2} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                  Refill Battery
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  3/3
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer1}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>
        </div>

        <h3 className="dark:text-white text-black font-medium text-md mt-3">
          Boosters
        </h3>
        <div className="dark:bg-[#1C281E] bg-[#fff] rounded-lg sml_shadow">
          <div className="flex flex-row justify-between p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon3} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                  Boost x2
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  3000
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer2}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon4} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                Auto Miner
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  200,000
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer6}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon5} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                  Power Load
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  200,000
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer3}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon6} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                Load-Up
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  1000
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer4}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between p-2">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row w-[42px]">
                <img src={BoosterIcon7} className="rounded-md" alt="Logo" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="dark:text-white text-black font-normal text-[15px]">
                  Refill speed
                </h4>
                <span className="font-normal text-[#EBBF32] text-[14px]">
                  1000
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span onClick={showDrawer5}>
                <CustomArrowIcon
                  className={`dark:text-white text-black text-2xl`}
                />
              </span>
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
        <Drawer
          onClose={onClose}
          open={open}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={TapLargeIcon}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">5x Taps</h2>
          <p className="text-center my-3">
            multiply taps incomer by 5 for 20 seconds. Do not use energy while
            filling.
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">Free</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open1}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={RefillBattery}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">
            Refill Battery
          </h2>
          <p className="text-center my-3 font-normal">
            Refill your battery upto 100%
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">Free</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open2}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={BoostLargeIcon}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">Boost x2</h2>
          <p className="text-center my-3">
            Double the current energy for 3000 Coins
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">Free</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open3}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={EnergyLimit}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">
          Power Load
          </h2>
          <p className="text-center my-3 font-normal">
            Increase the maximum energy capacity (+500 energy limit for each
            level).
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">3000</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open4}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img src={MultiTap} className="relative z-10 h-[180px]" alt="Logo" />
          <h2 className="text-xl font-semibold mt-3 text-center">MultiTap</h2>
          <p className="text-center my-3 font-normal">
            Increase the maximum energy capacity (+500 energy limit for each
            level).
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">3000</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open5}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr text-white dark:text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="bg-white dark:bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={RefillSpeed}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">
            Refill speed
          </h2>
          <p className="text-center my-3 font-normal">
            Increase the maximum energy capacity (+500 energy limit for each
            level).
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">3000</span>
          </p>
          <button className="bg-black dark:text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>

        <Drawer
          onClose={onClose}
          open={open6}
          placement={`bottom`}
          height={`420`}
          className="cstm-drawr dark:text-white text-black relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="bg-white dark:bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
          >
            <CustomCloseIcon />
          </button>
          <img
            src={TapBotIcons}
            className="relative z-10 h-[180px]"
            alt="Logo"
          />
          <h2 className="text-xl font-semibold mt-3 text-center">
          Tap Bot
          </h2>
          <p className="text-center my-3 font-normal">
          Increase the maximum energy capacity (+500 energy limit for each level).
          </p>

          <p className="flex flex-row gap-2 items-center justify-center">
            <img src={CoinSmall} className="h-[25px]" alt="Logo" />

            <span className="text-base font-semibold">200,000</span>
          </p>
          <button className="dark:bg-black text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>
      </ConfigProvider>
    </div>
  );
}

export default Boost;
