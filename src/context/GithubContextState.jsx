import React, { useReducer } from 'react';
import GithubContext from './GithubContext';
import GithubContextReducer from './GithubContextReducer';
import { SET_LOADING, REMOVE_LOADING, FIND_USERS, GET_USER_DETAIL, GET_USER_REPOS } from './types';
const GithubContextState = (props) => {
	const defaultState = {
		isLoading: false,
		users: [],
		user: [],
		repos: []
	};
	const [ state, dispatch ] = useReducer(GithubContextReducer, defaultState);

	const serchUsers = async (username) => {
		dispatch({ type: SET_LOADING });

		const allusers = await fetch(`https://api.github.com/search/users?q=${username}`);
		const users = await allusers.json();

		dispatch({ type: FIND_USERS, payload: users.items });
	};

	return (
		<GithubContext.Provider
			value={{ isLoading: state.isLoading, serchUsers, users: state.users, repos: state.repos }}
		>
			{props.children}
		</GithubContext.Provider>
	);
};
export default GithubContextState;
