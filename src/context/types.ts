export const GET_CONTENT = "GET_CONTENT";
export const TOGGLE_MENU = "TOGGLE_MENU";

// type Content = {
//   heading: string;
//   body: string;
//   images: Image[];
//   links: string[];
// };

export type Header = {
  title: string;
  description?: string;
};

export type Image = {
  src: string;
  text: string;
};

export type Link = {
  url: string;
  text: string;
};

type Content = {
  header?: Header;
  images?: Image[];
  image_text?: Image;
  links?: Link[];
};

export type AppStateType = {
  content: Content | null;
  showMenu: boolean;
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
  | { type: typeof TOGGLE_MENU; payload: boolean };
