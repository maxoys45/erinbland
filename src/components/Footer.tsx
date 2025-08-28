import { useContext } from "react";

import AppContext from "../context/appContext";
import type { AppContextType } from "../@types/context";

const Footer = () => {
  const { copy } = useContext<AppContextType>(AppContext);

  if (!copy) return null;

  return (
    <footer className="mt-auto border-t-1 border-t-gray-200 py-6 text-sm leading-none max-md:-mx-4 max-md:px-4 md:py-8">
      {copy.copyright} {/*new Date().getFullYear()*/}
    </footer>
  );
};

export default Footer;
