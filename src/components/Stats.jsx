import React, { useState } from "react";
import HeartLarge from "../assets/images/Tap-Heart-Ico-lrg.png";
import Polygon from "../assets/images/Polygon-Icon.png";
import Coin from "../assets/images/Coin.svg";
import { Link } from "react-router-dom";
import { CustomArrowIcon, CustomCloseIcon } from "./CustomIcons";
import TrophySmall from "../assets/images/TrophySmall.png";
import TapIcon from "../assets/images/TapIcon.svg";
import ExploitersIcon from "../assets/images/ExploitersIcon.svg";
import BoosterIcon1 from "../assets/images/BoosterIcon1.svg";
import TapLargeIcon from "../assets/images/TapLargeIcon.svg";
import CoinSmall from "../assets/images/CoinSmall.svg";
import Crown2 from "../assets/images/Crown2.png";
import Leaderboard from "../assets/images/Leaderboard.svg";

import ParticipantIcon from "../assets/images/ParticipantIcon.svg";
import OnlineParticipants from "../assets/images/OnlineParticipants.svg";
import { ConfigProvider, Drawer } from "antd";
import ToggleButton from "./ToggleButton";

function Stats() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-full">
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

      <div className="p-2 cstm_shadow dark:bg-black bg-[#E8E8E8] px-4 py-1 h-full">
        <div>
          <div className="flex flex-row justify-center p-2 border-b-[1px] dark:border-[#2d4130] border-[#ddd] bg-[#1C281E] rounded-lg mt-4 items-center">
            <div className="flex flex-row gap-3 items-center w-full">
              <div className="flex flex-row w-full items-center justify-between">
                <img src={Leaderboard} className="rounded-md" alt="Logo" />
                <h4 className="text-white font-normal text-[15px]">
                  LEADERBOARD
                </h4>
                <Link className={`nav-link`} to="/leaderboard">
                  <CustomArrowIcon className={`text-white text-2xl`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-10">
          <div className="dark:bg-[#1C281E] bg-white flex flex-col items-center justify-center dark:text-white text-black rounded-lg w-1/2 relative">
            <span className="bg-gradient-to-l from-[#E8F843] to-[#19FE62] rounded-xl p-2 h-[60px] w-[60px] flex flex-col items-center justify-center border-[4px] dark:border-zinc-950 border-white -mt-6">
              <img src={TapIcon} alt="" className="w-10 h-10" />
            </span>
            <h2 className="text-[#19FE62] dark:text-[#06AC3B] uppercase text-[12px] my-3 tracking-[1px]">
              Total Taps
            </h2>
            <span className="bg-gradient-to-r dark:from-[#1C281E] from-[#fff] from-0% dark:via-[#19FE62] via-[#19FE62] via-50% dark:to-[#1C281E] to-[#fff] to-100% flex h-[1px] w-[70px]"></span>
            <h1 className="text-xl font-semibold my-3">2,538</h1>
          </div>

          <div className="dark:bg-[#1C281E] bg-white flex flex-col items-center justify-center dark:text-white text-black rounded-lg w-1/2 relative">
            <span className="bg-gradient-to-l from-[#E8F843] to-[#19FE62] rounded-xl p-2 h-[60px] w-[60px] flex flex-col items-center justify-center border-[4px] dark:border-zinc-950 border-white -mt-6">
              <img src={ParticipantIcon} alt="" className="w-10 h-10" />
            </span>
            <h2 className="text-[#19FE62] dark:text-[#06AC3B] uppercase text-[12px] my-3 tracking-[1px]">
              Total Participants
            </h2>
            <span className="bg-gradient-to-r dark:from-[#1C281E] from-[#fff] from-0% dark:via-[#19FE62] via-[#19FE62] via-50% dark:to-[#1C281E] to-[#fff] to-100% flex h-[1px] w-[70px]"></span>
            <h1 className="text-xl font-semibold my-3">1,538,050</h1>
          </div>
        </div>

        <div className="flex flex-row gap-3 mt-8">
          <div className="dark:bg-[#1C281E] bg-white flex flex-col items-center justify-center dark:text-white text-black rounded-lg w-1/2 relative">
            <span className="bg-gradient-to-l from-[#E8F843] to-[#19FE62] rounded-xl p-2 h-[60px] w-[60px] flex flex-col items-center justify-center border-[4px] dark:border-zinc-950 border-white -mt-6">
              <img src={ExploitersIcon} alt="" className="w-10 h-10" />
            </span>
            <h2 className="text-[#19FE62] dark:text-[#06AC3B] uppercase text-[12px] my-3 tracking-[1px]">
              Daily Exploiters
            </h2>
            <span className="bg-gradient-to-r dark:from-[#1C281E] from-[#fff] from-0% dark:via-[#19FE62] via-[#19FE62] via-50% dark:to-[#1C281E] to-[#fff] to-100% flex h-[1px] w-[70px]"></span>
            <h1 className="text-xl font-semibold my-3">3,538,05</h1>
          </div>

          <div className="dark:bg-[#1C281E] bg-white flex flex-col items-center justify-center dark:text-white text-black rounded-lg w-1/2 relative">
            <span className="bg-gradient-to-l from-[#E8F843] to-[#19FE62] rounded-xl p-2 h-[60px] w-[60px] flex flex-col items-center justify-center border-[4px] dark:border-zinc-950 border-white -mt-6">
              <img src={OnlineParticipants} alt="" className="w-10 h-10" />
            </span>
            <h2 className="text-[#19FE62] dark:text-[#06AC3B] uppercase text-[12px] my-3 tracking-[1px]">
              Online Participants
            </h2>
            <span className="bg-gradient-to-r dark:from-[#1C281E] from-[#fff] from-0% dark:via-[#19FE62] via-[#19FE62] via-50% dark:to-[#1C281E] to-[#fff] to-100% flex h-[1px] w-[70px]"></span>
            <h1 className="text-xl font-semibold my-3">7,538</h1>
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
            className="bg-white dark:bg-black bg-opacity-15 dark:bg-opacity-15 rounded-full p-2 absolute right-5 top-4 z-50"
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
          <button className="bg-black dark:text-white w-full p-2 rounded-md font-semibold text-lg mt-2 mb-2">
            Get it!
          </button>
          <span className="cstm_shape"></span>
        </Drawer>
      </ConfigProvider>
    </div>
  );
}

export default Stats;
