import { createContext } from "react";

import { type AppContextType, AppInitialContext } from "../@types/context";

const AppContext = createContext<AppContextType>(AppInitialContext);

export default AppContext;
