import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubContextReducer from "./GithubContextReducer";
import {
  SET_LOADING,
  ALL_USERS,
  FIND_USERS,
  GET_USER_DETAIL,
  GET_USER_REPOS,
  RESET_USERS
} from "./types";
const GithubContextState = props => {
  const defaultState = {
    isLoading: false,
    users: [],
    user: [],
    repos: [],
    isSearch: false
  };
  const [state, dispatch] = useReducer(GithubContextReducer, defaultState);

  const getAllusers = async () => {
    dispatch({ type: SET_LOADING });

    const allusers = await fetch(`https://api.github.com/users`);
    const users = await allusers.json();

    dispatch({ type: ALL_USERS, payload: users });
  };

  const serchUsers = async username => {
    dispatch({ type: SET_LOADING });

    const allusers = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const users = await allusers.json();

    dispatch({ type: FIND_USERS, payload: users.items });
  };

  const resetUsers = () => {
    dispatch({ type: RESET_USERS });
    //  dispatch({ type: ALL_USERS });
  };

  const getUserdetail = async username => {
    dispatch({ type: SET_LOADING });
    const udetailRequest = await fetch(
      `https://api.github.com/users/${username}`
    );
    const user = await udetailRequest.json();
    dispatch({ type: GET_USER_DETAIL, payload: user });
  };
  const getUserRepos = async username => {
    dispatch({ type: SET_LOADING });
    const reposCall = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=creted:asc`
    );
    const repos = await reposCall.json();
    dispatch({ type: GET_USER_REPOS, payload: repos });
  };
  return (
    <GithubContext.Provider
      value={{
        getAllusers,
        isLoading: state.isLoading,
        serchUsers,
        user: state.user,
        users: state.users,
        repos: state.repos,
        isSearch: state.isSearch,
        resetUsers,
        getUserdetail,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubContextState;
