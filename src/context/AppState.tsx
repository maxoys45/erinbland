import { useReducer, useCallback, type ReactNode } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";

import { AppInitialState, GET_CONTENT, TOGGLE_MENU } from "../@types/context";

const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

  const getContent = useCallback((filename: string) => {
    fetch(`/content/${filename}.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_CONTENT,
          payload: data,
        });
      })
      .catch((err) => console.error("error:", err));
  }, []);

  const toggleMenu = (prev: boolean) => {
    const newState = !prev;

    dispatch({
      type: TOGGLE_MENU,
      payload: newState,
    });
  };

  return (
    <AppContext.Provider
      value={{
        content: state.content,
        showMenu: state.showMenu,
        getContent,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
