import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import AppContext from "../context/appContext";
import type { AppContextType } from "../context/types";

import Navbar from "./Navbar";
import Footer from "./Footer";

import copy from "../content/copy.json";

import Burger from "../assets/menu.svg?react";

const Layout = () => {
  const { showMenu, toggleMenu } = useContext<AppContextType>(AppContext);

  useEffect(() => {
    document.body.classList.toggle("no-overflow", showMenu);
  }, [showMenu]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto flex px-4">
        <div className="flex grow max-md:flex-col md:gap-10 lg:gap-16">
          <header className="md:before:bg-eb-green sticky top-0 shrink-0 bg-white pt-4 max-md:-mx-4 max-md:flex max-md:items-center max-md:justify-between max-md:border-b-1 max-md:border-gray-300 max-md:px-4 max-md:pb-4 md:h-screen md:pt-8 md:pr-10 md:before:absolute md:before:top-0 md:before:right-0 md:before:bottom-0 md:before:-z-1 md:before:block md:before:h-full md:before:w-[500%] lg:pt-14">
            <p className="text-3xl leading-none font-light tracking-[-0.1em] text-gray-700 hover:text-black md:mb-8 lg:text-4xl">
              <Link to="../">{copy.general.brand_name}</Link>
            </p>

            <button
              className="h-[30px] w-[30px] cursor-pointer p-[2px] md:hidden"
              onClick={() => toggleMenu(showMenu)}
            >
              <Burger fill="#666" />
            </button>

            <Navbar />
          </header>

          <div className="flex grow flex-col pt-6 md:pt-8 lg:pt-14">
            <Outlet />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
