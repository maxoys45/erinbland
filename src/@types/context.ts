export const GET_CONTENT = "GET_CONTENT";
export const GET_COPY = "GET_COPY";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const CLEAR_CONTENT = "CLEAR_CONTENT";
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

type WebsiteCopy = {
  [key: string]: string;
};

export type AppStateType = {
  content: Content | null;
  copy: WebsiteCopy | null;
  showMenu: boolean;
  loading: boolean;
};

export type AppContextType = AppStateType & {
  getContent: (slug: string) => void;
  getCopy: () => void;
  toggleMenu: (prev: boolean) => void;
};

export const AppInitialState: AppStateType = {
  content: null,
  copy: null,
  showMenu: false,
  loading: false,
};

export const AppInitialContext: AppContextType = {
  ...AppInitialState,
  getContent: () => {},
  getCopy: () => {},
  toggleMenu: () => {},
};

export type ContentAction =
  | { type: typeof GET_CONTENT; payload: Content }
  | { type: typeof GET_COPY; payload: WebsiteCopy }
  | { type: typeof CLEAR_CONTENT }
  | { type: typeof TOGGLE_MENU; payload: boolean }
  | { type: typeof SET_LOADING };
