import { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "./Image";
import Discord from "../assets/icons/discord.svg";
import Twitter from "../assets/icons/twitter.svg";
import Telegram from "../assets/icons/telegram.svg";

type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

const menuData: Menu[] = [
  {
    id: 1,
    title: "STAKE TO EARN",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "ABOUT",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "HELP",
    newTab: false,
    path: "/#technology",
  },
];

const Header = () => {
  const navigationOpen = false;
  const [stickyMenu, setStickyMenu] = useState(false);

  //const pathUrl = "/"

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    if (stickyMenu) setStickyMenu(true);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-4 bg-primary shadow-lg transition duration-100 rounded-sm`}
    >
      <div className="relative flex mx-auto max-w-full items-center justify-between px-7 sm:px-8  2xl:px-20">
        <div className="flex w-full items-center justify-between">
          <Logo />

          {/* <!-- Hamburger Toggle BTN --> */}
          <button aria-label="hamburger Toggler" className="block sm:hidden">
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        <div
          className={`hidden items-center gap-8 md:visible sm:flex sm:h-auto sm:w-full content-end ${
            navigationOpen &&
            "navbar !visible sm:mt-0 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex gap-5 flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  <a
                    href={`${menuItem.path}`}
                    className="text-white text-[16px] font-bold"
                  >
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <Image src={Twitter} className="!w-[34px] !h-[34px]" />
            <Image src={Telegram} className="!w-[34px] !h-[34px]" />
            <Image src={Discord} className="!w-[34px] !h-[34px]" />
            {/* <button className="bg-[#5865F2] rounded-md shadow-md px-4 py-1 text-xs text-white">
              Buy Now
            </button> */}
          </div>
        </div>

        {/* Nav Menu Start   */}
      </div>
    </header>
  );
};

export default Header;
