import {
  SET_LOADING,
  ALL_USERS,
  FIND_USERS,
  GET_USER_DETAIL,
  GET_USER_REPOS,
  RESET_USERS
} from "./types";
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true, users: [], isSearch: false };

    case ALL_USERS:
      return {
        ...state,
        isLoading: false,
        user: {},
        users: action.payload
      };

    case FIND_USERS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        user: {},
        isSearch: true
      };
    case RESET_USERS:
      return {
        ...state,
        users: [],
        user: {},
        isSearch: false
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        user: action.payload,
        isSearch: false,
        isLoading: false
      };
    case GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        isSearch: false,
        isLoading: false
      };

    default:
      return { ...state };
  }
};
