import { useReducer, useCallback, type ReactNode } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";

import {
  AppInitialState,
  GET_CONTENT,
  TOGGLE_MENU,
  SET_LOADING,
} from "../@types/context";

import { client } from "../sanityClient";

const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

  // Retrieve the page content from Sanity.
  const getContent = useCallback(async (slug: string) => {
    setLoading();

    const query = `
      *[_type == "page" && slug.current == $slug][0] {
        title,
        description,
        images[]{
          "src": image.asset->url,
          caption
        },
        contentBlock{
          "src": image.asset->url,
          caption
        },
        links[]{
          url,
          text
        }
      }
    `;

    const response = await client.fetch(query, { slug });

    dispatch({
      type: GET_CONTENT,
      payload: response,
    });
  }, []);

  // Toggle the menu state.
  const toggleMenu = (prev: boolean) => {
    const newState = !prev;

    dispatch({
      type: TOGGLE_MENU,
      payload: newState,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AppContext.Provider
      value={{
        content: state.content,
        showMenu: state.showMenu,
        loading: state.loading,
        getContent,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
