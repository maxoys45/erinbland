import {
  GET_CONTENT,
  GET_COPY,
  CLEAR_CONTENT,
  TOGGLE_MENU,
  SET_LOADING,
  type ContentAction,
  type AppStateType,
} from "../@types/context";

const AppReducer = (
  state: AppStateType,
  action: ContentAction
): AppStateType => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    case GET_COPY:
      return {
        ...state,
        copy: action.payload,
      };

    case CLEAR_CONTENT:
      return {
        ...state,
        content: null,
      };

    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default AppReducer;
