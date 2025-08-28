import { useReducer, useCallback, type ReactNode } from "react";

import AppContext from "./appContext";
import AppReducer from "./appReducer";

import {
  AppInitialState,
  GET_CONTENT,
  GET_COPY,
  CLEAR_CONTENT,
  TOGGLE_MENU,
  SET_LOADING,
} from "../@types/context";

import { client } from "../sanityClient";

const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState);

  // Retrieve the page content from Sanity.
  const getContent = useCallback(async (slug: string) => {
    setLoading();
    clearContent();

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

  // Retrieve the copy from Sanity.
  const getCopy = useCallback(async () => {
    const query = `
      *[_type == "copy"][0] {
        ...
      }`;

    const response = await client.fetch(query);

    dispatch({
      type: GET_COPY,
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

  // Clear content
  const clearContent = () => dispatch({ type: CLEAR_CONTENT });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AppContext.Provider
      value={{
        content: state.content,
        copy: state.copy,
        showMenu: state.showMenu,
        loading: state.loading,
        getContent,
        getCopy,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
