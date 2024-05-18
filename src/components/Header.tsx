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
        <div className="flex items-center justify-between">
          <Logo />
        </div>

        <div
          className={` items-center  gap-8 sm:flex sm:h-auto  ${
            navigationOpen &&
            "navbar !visible sm:mt-0 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav className="md:block  hidden">
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
          <div className="md:block hidden">
            <div className="flex items-center gap-6 xl:mt-0">
              <Image src={Twitter} className="!w-[34px] !h-[34px]" />
              <Image src={Telegram} className="!w-[34px] !h-[34px]" />
              <Image src={Discord} className="!w-[34px] !h-[34px]" />
            </div>
          </div>
          <w3m-connect-button label="Connect" />
        </div>
      </div>
    </header>
  );
};

export default Header;
