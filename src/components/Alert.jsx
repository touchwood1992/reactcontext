import React, { useContext } from 'react';
import alertContext from '../context/alertContext';
const Alert = () => {
	const AlertContext = useContext(alertContext);
	return <div>{AlertContext.isAlert.msg}</div>;
};

export default Alert;
