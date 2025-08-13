export const GET_CONTENT = "GET_CONTENT";
export const TOGGLE_MENU = "TOGGLE_MENU";

type Image = {
  src: string;
  caption: string;
};

type Content = {
  heading: string;
  body: string;
  images: Image[];
};

type Menu = boolean;

export type AppStateType = {
  content: Content | null;
  showMenu: Menu;
};

export type AppContextType = AppStateType & {
  getContent: (filename: string) => void;
  toggleMenu: (prev: boolean) => void;
};

export const AppInitialState: AppStateType = {
  content: null,
  showMenu: false,
};

export const AppInitialContext: AppContextType = {
  ...AppInitialState,
  getContent: () => {},
  toggleMenu: () => {},
};

export type ContentAction =
  | { type: typeof GET_CONTENT; payload: Content }
  | { type: typeof TOGGLE_MENU; payload: Menu };
