// import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
function ToggleButton() {
  const [enabled, setEnabled] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    if(theme === "dark"){
      setEnabled(true)
    }
    else{
      setEnabled(false)
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button className="dark:bg-white bg-black bg-opacity-15 dark:bg-opacity-15 flex flex-row items-center rounded-full p-1 gap-2 text-center min-h-[36px]">
        <span className="text-[14px] font-medium ps-2">Dark Mode</span>
        {/* <Switch className="turbo_mode" defaultChecked onChange={onChange} /> */}
        <Switch
          checked={enabled}
          onChange={toggleTheme}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition data-[checked]:bg-green-500"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
      </button>
    </div>
  );
}

export default ToggleButton;
