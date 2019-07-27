import { SET_LOADING, REMOVE_LOADING, FIND_USERS, GET_USER_DETAIL, GET_USER_REPOS } from './types';
export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true, users: [] };
		case FIND_USERS:
			return { ...state, isLoading: false, users: action.payload };
		default:
			return { ...state };
	}
};
