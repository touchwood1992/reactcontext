import React, { useContext } from 'react';
import alertContext from '../context/alertContext';
const Alert = () => {
	const AlertContext = useContext(alertContext);
	console.log(AlertContext.isAlert);
	return <div>Alert is here</div>;
};

export default Alert;
