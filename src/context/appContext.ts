import { createContext } from "react";

import { type AppContextType, AppInitialContext } from "./types";

const AppContext = createContext<AppContextType>(AppInitialContext);

export default AppContext;
