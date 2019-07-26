import React, { useState, useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
const AlertState = (props) => {
	const defaulState = { isAlert: false };
	const [ state, dispatch ] = useReducer(alertReducer, defaulState);

	return <alertContext.Provider value={{ isAlert: state.isAlert }}>{props.children}</alertContext.Provider>;
};

export default AlertState;
