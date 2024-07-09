import React from "react";
import { CustomArrowIcon, CustomUserIcon } from "./CustomIcons";
import Heart from "../assets/images/Heart-Icon-sml.svg";
import HeartLarge from "../assets/images/Tap-Heart-Ico-lrg.png";
import HeartSmall from "../assets/images/Tap-Heart-Ico-sml.png";
import CoinSmall from "../assets/images/Coin.svg";
import CoinSmall1 from "../assets/images/CoinSmall1.svg";
import DollarIcon from "../assets/images/DollarIcon.svg";
import SocialTab1 from "../assets/images/SocialTab1.svg";
import SocialTab2 from "../assets/images/SocialTab2.svg";
import SocialTab3 from "../assets/images/SocialTab3.svg";
import SocialTab4 from "../assets/images/SocialTab4.svg";
import SocialTab5 from "../assets/images/SocialTab5.svg";
import SocialTab6 from "../assets/images/SocialTab6.svg";

import Crown1 from "../assets/images/Crown1.svg";
import Crown2 from "../assets/images/Crown2.png";
import Crown3 from "../assets/images/Crown3.svg";
import Crown4 from "../assets/images/Crown4.svg";
import Crown5 from "../assets/images/Crown5.svg";
import Crown6 from "../assets/images/Crown6.svg";
import Crown7 from "../assets/images/Crown7.svg";
import ReferralIcon from "../assets/images/ReferralIcon.svg";

import Coin1 from "../assets/images/trade-coins/coin-1.png";
import Coin2 from "../assets/images/trade-coins/coin-2.png";
import Coin3 from "../assets/images/trade-coins/coin-3.png";
import Coin4 from "../assets/images/trade-coins/coin-4.png";
import Coin5 from "../assets/images/trade-coins/coin-5.png";
import Coin6 from "../assets/images/trade-coins/coin-6.png";
import Coin7 from "../assets/images/trade-coins/coin-7.png";
import Coin8 from "../assets/images/trade-coins/coin-8.png";
import Coin9 from "../assets/images/trade-coins/coin-9.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Link } from "react-router-dom";
import TrophySmall from "../assets/images/TrophySmall.png";

function Task() {
  return (
    <div className="h-full">
      <div className="mt-0 p-2 justify-around flex flex-col relative gap-1 mb-3">
        <div className="text-white flex flex-col items-center gap-3 pt-3">
          <span className="text-[#19FE62] dark:text-[#06AC3B] uppercase tracking-[4px] text-sm">
            Your Balance
          </span>
          <div className="flex flex-row items-center gap-2">
            <img src={CoinSmall} alt="Coin" />
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

      <TabGroup className={`text-white cstmTab px-0 cstm_shadow mb-20 h-full`}>
        <TabList className="flex flex-row gap-0 dark:bg-zinc-900 bg-[#E8E8E8] rounded-t-[20px] border-[2px] dark:border-[#27392A] border-[#ddd]">
          <Tab className="w-1/3">Daily Rewards</Tab>
          <Tab className="w-1/3">Socials</Tab>
          <Tab className="w-1/3">Specials</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <div className='h-full'>
            <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] pb-2 mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl h-full sml_shadow">
              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={CoinSmall1} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Claim Free 500 coins daily
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      1000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Claim
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={CoinSmall1} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Get 1000 coins more on spending
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Claim
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={CoinSmall1} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-1 pe-2">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Full Tank
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      1000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Claim
                  </button>
                </div>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className='h-full dark:bg-[#000] bg-[#E8E8E8] pb-20'>
            <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl h-full">
              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={CoinSmall1} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      Share bot link
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      1000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Copy
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab1} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px]">
                      Connect your TonKeeper Wallet
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      1000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Connect
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab2} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Join Discussion Group
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      7,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Join
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab2} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Join Announcement Channel
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      7,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Join
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab3} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Follow Twitter Page
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      7,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Follow
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab4} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Follow Instagram Page
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      7,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Follow
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab5} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Subscribe YouTube Channel
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      7,500
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab5} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Watch YouTube Video
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      25,000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Watch
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab5} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Watch Explainer Video
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      25,000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Watch
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab5} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Watch Why Unity Dapp
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      25,000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Watch
                  </button>
                </div>
              </div>

              <div className="px-2 py-2 flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                    <img src={SocialTab6} className="rounded-md" alt="Logo" />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h4 className="dark:text-white text-black font-medium text-[15px] leading-5">
                      Join Facebook Group
                    </h4>
                    <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                      <img
                        src={DollarIcon}
                        className="rounded-md h-[18px]"
                        alt="Logo"
                      />
                      1000
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]">
                    Join
                  </button>
                </div>
              </div>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col pb-20 bg-[#E8E8E8] dark:bg-[#000]">
              <div className="px-4">
                <h2 className="dark:text-white text-black text-sm mt-2">
                  Leagues
                </h2>
              </div>
              <div className="flex flex-col mt-3 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown1} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Baron
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        10,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown2} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        Viscount
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        50,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown3} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        Earl
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        100,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown4} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        Marquess
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        1000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown5} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        Prince
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        5,000,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full border-b-[1px] dark:border-[#314334] border-[#ddd]">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown6} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        King
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        10,000,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img src={Crown7} className="rounded-md" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-normal text-[15px] leading-5">
                        Emperor
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        250,000,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="!text-zinc-950 bg-gradient-to-r from-[#E8F843] to-[#19FE62] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <h2 className="dark:text-white text-black text-sm mt-3">
                  Referral tasks
                </h2>
              </div>
              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 1 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        1,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 3 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        5,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 5 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        15,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 7 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        25,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 10 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        50,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 15 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        75,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 20 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        100,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 50 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        500,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 75 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        750,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 dark:!bg-[#1C281E] !bg-[#fff] mx-3 border-[1px] dark:border-[#314334] border-[#fff] rounded-xl sml_shadow">
                <div className="px-2 py-2 flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row w-[48px] h-[48px] items-center justify-center shrink-0">
                      <img
                        src={ReferralIcon}
                        className="rounded-md"
                        alt="Logo"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <h4 className="dark:text-white text-black font-medium text-[15px]">
                        Invite 100 Mate
                      </h4>
                      <span className="font-normal text-[#EBBF32] text-[14px] flex flex-row items-center gap-1">
                        <img
                          src={DollarIcon}
                          className="rounded-md h-[18px]"
                          alt="Logo"
                        />
                        1,000,000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                  <Link
                      to="/claim"
                      className="dark:!text-white !text-[#777] dark:bg-[#4B6452] bg-[#D8D8D8] rounded-lg px-3 flex flex-row items-center text-sm font-medium justify-center shrink-0 !min-h-[28px] min-w-[85px]"
                    >
                      Claim
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex flex-row gap-2">
                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={ReferralIcon}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Invite 1 Mate
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin8}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin7}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin6}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin5}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin4}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin3}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-zinc-800 rounded-lg p-2 flex flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="shrink-0">
                      <img
                        src={Coin2}
                        className="h-[38px] w-[38px]"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold">Stable Coins</h3>
                      <div className="flex flex-col gap-0">
                        <span className="text-[13px] text-green-500">
                          Profit per hour
                        </span>
                        <span className="text-[13px] text-[#ff0079] font-semibold">
                          +600
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-zinc-600">
                    <div className="text-[13px] border-r-2 border-zinc-600 pe-2 pt-2 w-[42px] shrink-0 font-semibold">
                      lvl 0
                    </div>
                    <div className="text-[13px] ps-2 pt-2 font-bold text-[#ff0079]">
                      +10K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Task;
