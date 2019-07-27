import { SET_Alert, REMOVE_Alert } from './types';
export default (state, action) => {
	switch (action.type) {
		case SET_Alert:
			return { ...state, isAlert: { msg: 'Username is required' } };

		case REMOVE_Alert:
			return { ...state, isAlert: false };

		default:
			return { ...state };
	}
};
