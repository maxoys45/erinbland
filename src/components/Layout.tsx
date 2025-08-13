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
    <div className="container mx-auto px-4">
      <div className="md:flex md:gap-10 lg:gap-20">
        <div className="sticky top-0 shrink-0 bg-white pt-4 max-md:-mx-4 max-md:flex max-md:items-center max-md:justify-between max-md:border-b-1 max-md:border-gray-300 max-md:px-4 max-md:pb-4 md:h-screen md:pt-8 lg:pt-14">
          <h1 className="leading-none md:mb-8">
            <Link to="../">{copy.general.title}</Link>
          </h1>

          <button
            className="h-[30px] w-[30px] cursor-pointer p-[2px] md:hidden"
            onClick={() => toggleMenu(showMenu)}
          >
            <Burger fill="#666" />
          </button>

          <Navbar />
        </div>

        <div className="grow pt-4 md:pt-8 lg:pt-14">
          <Outlet />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
