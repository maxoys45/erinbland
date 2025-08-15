import { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";

import Close from "../assets/cross.svg?react";

const Navbar = () => {
  const { showMenu, toggleMenu } = useContext<AppContextType>(AppContext);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      toggleMenu(true);
    }
  };

  return (
    <nav
      className={clsx(
        "max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:flex max-md:w-full max-md:justify-end max-md:bg-black/20 max-md:transition-opacity",
        showMenu
          ? "max-md:pointer-events-auto max-md:opacity-100"
          : "max-md:pointer-events-none max-md:opacity-0"
      )}
    >
      <div
        className={clsx(
          "max-md:w-80 max-md:bg-eb-green-light max-md:px-6 max-md:py-4 max-md:shadow-sm max-md:transition-transform max-md:delay-75",
          showMenu ? "max-md:translate-x-0" : "max-md:translate-x-100"
        )}
        ref={sidebarRef}
      >
        <ul className="mt-8 flex flex-col gap-2 md:mt-0">
          {pages.map(({ slug, title }) => (
            <li key={slug}>
              <NavLink
                to={slug === "home" ? "../" : `../${slug}`}
                className={({ isActive }) =>
                  clsx(
                    "navlink relative block md:inline-block",
                    isActive &&
                      "text-black after:opacity-100 md:after:translate-x-0"
                  )
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="absolute top-0 right-0 mt-4 mr-4 h-[30px] w-[30px] cursor-pointer p-[2px] md:hidden"
          onClick={() => toggleMenu(showMenu)}
        >
          <Close fill="#666" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
