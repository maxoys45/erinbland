import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

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
    <div className="flex grow flex-col bg-gray-50 md:flex-row">
      <header className="sticky top-0 z-50 shrink-0 bg-eb-green-light px-4 py-4 max-md:flex max-md:items-center max-md:justify-between md:h-screen md:px-10 md:pt-8 md:before:absolute md:before:top-0 md:before:right-0 md:before:bottom-0 md:before:-z-1 md:before:block md:before:h-full md:before:w-[500%] md:before:bg-eb-green lg:px-16 lg:pt-14">
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

      <div className="container mx-auto flex grow flex-col px-4 pt-6 md:px-10 md:pt-8 lg:px-14 lg:pt-14">
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
