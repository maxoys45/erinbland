import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Burger from "../assets/menu.svg?react";

const Layout = () => {
  const { getCopy, copy, showMenu, toggleMenu } =
    useContext<AppContextType>(AppContext);

  useEffect(() => {
    getCopy();
  }, []);

  const firstName = copy?.brandName.split(" ")[0];
  const lastName = copy?.brandName.split(" ")[1];

  useEffect(() => {
    document.body.classList.toggle("no-overflow", showMenu);
  }, [showMenu]);

  return (
    <div className="flex grow flex-col bg-gray-50 md:flex-row">
      <header className="sticky top-0 z-50 shrink-0 bg-menu-gray px-4 py-4 max-md:flex max-md:items-center max-md:justify-between md:h-screen md:px-10 md:pt-8 lg:px-16 lg:pt-14">
        {firstName && (
          <Link
            className="flex items-baseline gap-1 font-serif text-3xl leading-none tracking-[-0.05em] text-gray-700 hover:text-gray-950 md:mb-8 lg:text-4xl"
            to="../"
          >
            <span>{firstName}</span>
            {lastName && <span className="italic"> {lastName}</span>}
          </Link>
        )}

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
