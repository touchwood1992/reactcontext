import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_Alert, REMOVE_Alert } from './types';

const AlertState = (props) => {
	const defaulState = { isAlert: false };
	const [ state, dispatch ] = useReducer(alertReducer, defaulState);

	const setAlert = () => {
		dispatch({ type: SET_Alert });
		setTimeout(() => {
			dispatch({ type: REMOVE_Alert });
		}, 2000);
	};
	const removeAlert = () => {
		dispatch({ type: REMOVE_Alert });
	};
	return (
		<alertContext.Provider value={{ isAlert: state.isAlert, setAlert, removeAlert }}>
			{props.children}
		</alertContext.Provider>
	);
};

export default AlertState;
