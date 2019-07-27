import React, { useContext } from 'react';
import alertContext from '../context/alertContext';
const Alert = () => {
	const AlertContext = useContext(alertContext);
	const { isAlert } = AlertContext;
	return isAlert ? <div className='alert_container'>{isAlert.msg}</div> : '';
};

export default Alert;
