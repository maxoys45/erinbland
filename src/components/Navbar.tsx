import { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import pages from "../content/pages.json";

import Close from "../assets/cross.svg?react";

const Navbar = () => {
  const appContext = useContext<AppContextType>(AppContext);

  return (
    <nav
      className={clsx(
        "max-md:pointer-events-none max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:flex max-md:w-full max-md:justify-end max-md:bg-black/20 max-md:opacity-0 max-md:transition-opacity",
        appContext.showMenu && "max-md:pointer-events-auto max-md:opacity-100"
      )}
    >
      <div
        className={clsx(
          "max-md:w-80 max-md:translate-x-100 max-md:bg-white max-md:px-6 max-md:py-4 max-md:transition-transform max-md:delay-75",
          appContext.showMenu && "max-md:translate-x-0"
        )}
      >
        <ul className="flex flex-col gap-2 md:gap-1">
          {pages.map(({ slug, title }) => (
            <li key={slug}>
              <Link to={slug === "home" ? "../" : `../${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <button
          className="absolute top-0 right-0 mt-4 mr-4 h-[30px] w-[30px] cursor-pointer p-[2px] md:hidden"
          onClick={() => appContext.toggleMenu(appContext.showMenu)}
        >
          <Close fill="#666" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
