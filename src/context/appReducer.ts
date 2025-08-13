import {
  GET_CONTENT,
  TOGGLE_MENU,
  type ContentAction,
  type AppStateType,
} from "./types";

const AppReducer = (
  state: AppStateType,
  action: ContentAction
): AppStateType => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };

    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
