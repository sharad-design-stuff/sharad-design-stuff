import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  CustomEarnIcon,
  CustomFriendsIcon,
  CustomMineIcon,
  CustomTapIcon,
} from "./CustomIcons";

import Airdrop from "../assets/images/Airdrop-Icon.svg";
import AirdropColor from "../assets/images/Airdrop-Icon-colored.svg";

import Mates from "../assets/images/BottomNav/Mates.svg";
import MatesActive from "../assets/images/BottomNav/MatesActive.svg";
import Task from "../assets/images/BottomNav/Task.svg";
import TaskActive from "../assets/images/BottomNav/TaskActive.svg";
import Tap from "../assets/images/BottomNav/Tap.svg";
import TapActive from "../assets/images/BottomNav/TapActive.svg";
import Boost from "../assets/images/BottomNav/Boost.svg";
import BoostActive from "../assets/images/BottomNav/BoostActive.svg";
import Stats from "../assets/images/BottomNav/Stats.svg";
import StatsActive from "../assets/images/BottomNav/StatsActive.svg";
import Coin from "../assets/images/Coin.svg";

import { useLocation } from "react-router-dom";

function BottomNav() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const location = useLocation();
  return (
    <div className="pb-0 h-[100vh]">
      <Outlet />
      <nav className="p-2 text-white fixed bottom-0 w-full z-50">
        <ul className="flex flex-row gap-2 items-stretch justify-around w-full bottomNav bg-[#132516] rounded-lg">
          {/* <li>
            <Link to="/">Friends</Link>
          </li> */}
          <li
            className={`p-2 w-1/5 flex flex-col items-center justify-center ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link className={`nav-link`} to="/">
              <span className="min-h-[20px]">
                {location.pathname === "/" ? (
                  <img src={MatesActive} alt="Mates" />
                ) : (
                  <img src={Mates} alt="Mates" />
                )}
              </span>
              <span className="text-[12px]">Mates</span>
            </Link>
          </li>
          <li
            className={`p-2 w-1/5 flex flex-col items-center justify-center ${
              location.pathname === "/task" ? "active" : ""
            }`}
          >
            <Link className={`nav-link`} to="/task">
              <span className="min-h-[20px]">
                {location.pathname === "/task" ? (
                  <img src={TaskActive} alt="Task" />
                ) : (
                  <img src={Task} alt="Task" />
                )}
              </span>
              <span className="text-[12px]">Task</span>
            </Link>
          </li>
          <li
            className={`p-2 w-1/5 flex flex-col items-center justify-center ${
              location.pathname === "/tap" ? "active" : ""
            }`}
          >
            <Link className={`nav-link`} to="/tap">
              <span className="min-h-[20px]">
                {location.pathname === "/tap" ? (
                  <img src={TapActive} alt="Tap" />
                ) : (
                  <img src={Tap} alt="Tap" />
                )}
              </span>
              <span className="text-[12px]">Tap</span>
            </Link>
          </li>
          <li
            className={`p-2 w-1/5 flex flex-col items-center justify-center ${
              location.pathname === "/boost" ? "active" : ""
            }`}
          >
            <Link className={`nav-link`} to="/boost">
              <span className="min-h-[20px]">
                {location.pathname === "/boost" ? (
                  <img src={BoostActive} alt="Boost" />
                ) : (
                  <img src={Boost} alt="Boost" />
                )}
              </span>
              <span className="text-[12px]">Boost</span>
            </Link>
          </li>
          <li
            className={`p-2 w-1/5 flex flex-col items-center justify-center ${
              location.pathname === "/stats" || location.pathname === "/leaderboard" ? "active" : ""
            }`}
          >
            <Link className={`nav-link`} to="/stats">
              <span className="min-h-[20px]">
                {location.pathname === "/stats" || location.pathname === "/leaderboard" ? (
                  <img src={StatsActive} alt="Stats" />
                ) : (
                  <img src={Stats} alt="Stats" />
                )}
              </span>
              <span className="text-[12px]">Stats</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNav;
