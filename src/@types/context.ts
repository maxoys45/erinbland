export const GET_CONTENT = "GET_CONTENT";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const SET_LOADING = "SET_LOADING";

export type Image = {
  src: string;
  caption: string;
};

export type Link = {
  url: string;
  text: string;
};

type Content = {
  title: string;
  description?: string;
  images?: Image[];
  contentBlock?: Image;
  links?: Link[];
};

export type AppStateType = {
  content: Content | null;
  showMenu: boolean;
  loading: boolean;
};

export type AppContextType = AppStateType & {
  getContent: (filename: string) => void;
  toggleMenu: (prev: boolean) => void;
};

export const AppInitialState: AppStateType = {
  content: null,
  showMenu: false,
  loading: false,
};

export const AppInitialContext: AppContextType = {
  ...AppInitialState,
  getContent: () => {},
  toggleMenu: () => {},
};

export type ContentAction =
  | { type: typeof GET_CONTENT; payload: Content }
  | { type: typeof TOGGLE_MENU; payload: boolean }
  | { type: typeof SET_LOADING };
