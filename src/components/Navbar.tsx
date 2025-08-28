import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";
import type { NavItems } from "../@types/sanity";

import { client } from "../sanityClient";

import Close from "../assets/cross.svg?react";
import LinkedIn from "../assets/linkedin.svg?react";

const Navbar = () => {
  const { showMenu, toggleMenu } = useContext<AppContextType>(AppContext);
  const [nav, setNav] = useState<NavItems>(null);
  const [subIndex, setSubIndex] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    client
      .fetch<NavItems>(
        `*[_type == "navigation"][0].items[]{
          title,
          "slug": page->slug.current,
          children[]{
            title,
            "slug": page->slug.current
          }
        }`
      )
      .then((data) => {
        // console.log(data);
        setNav(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      toggleMenu(true);
    }
  };

  const toggleSubMenu = (index: number) => {
    setSubIndex(subIndex === index ? null : index);
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
          "flex flex-col max-md:w-80 max-md:bg-white max-md:px-6 max-md:py-6 max-md:shadow-sm max-md:transition-transform max-md:delay-75",
          showMenu ? "max-md:translate-x-0" : "max-md:translate-x-100"
        )}
        ref={sidebarRef}
      >
        <ul className="mt-8 mb-auto flex flex-col items-start gap-2 overflow-auto md:mt-0">
          {nav &&
            nav.map((item, index) => {
              return (
                <li key={item.slug}>
                  {item.children ? (
                    <>
                      <button
                        className={clsx(
                          "border-t- flex cursor-pointer items-center gap-2 after:h-0 after:w-0 after:border-t-[5px] after:border-r-[3px] after:border-l-[3px] after:border-r-transparent after:border-l-transparent after:transition-transform after:duration-300",
                          subIndex === index
                            ? "after:mt-0 after:rotate-x-180"
                            : "after:mt-0.5 after:rotate-x-0"
                        )}
                        onClick={() => toggleSubMenu(index)}
                      >
                        {item.title}
                      </button>

                      <div
                        className={clsx(
                          "grid pl-2 transition-all",
                          subIndex === index
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="flex flex-col items-start gap-2 overflow-hidden">
                          {item.children.map((child, index) => (
                            <NavLink
                              className={({ isActive }) =>
                                clsx(
                                  "navlink",
                                  isActive && "is-active",
                                  index === 0 && "mt-2"
                                )
                              }
                              to={child.slug}
                              key={index}
                            >
                              {child.title}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.slug === "about" ? "/" : `/${item.slug}`}
                      className={({ isActive }) =>
                        clsx("navlink", isActive && "is-active")
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              );
            })}
        </ul>

        <button
          className="absolute top-0 right-0 mt-4 mr-4 h-[30px] w-[30px] cursor-pointer p-[2px] md:hidden"
          onClick={() => toggleMenu(showMenu)}
        >
          <Close fill="#666" />
        </button>

        <div className="mt-8 flex items-center gap-2">
          <a
            className="block"
            href="https://www.linkedin.com/in/erin-bland"
            target="_blank"
          >
            <LinkedIn
              width="20"
              className="fill-gray-600 transition-[fill] hover:fill-black"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
