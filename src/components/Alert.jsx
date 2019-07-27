import React, { useContext } from 'react';
import alertContext from '../context/alertContext';
const Alert = () => {
	const AlertContext = useContext(alertContext);
	const { isAlert } = AlertContext;
	return isAlert ? <div className='alert alert-danger'>{isAlert.msg}</div> : '';
};

export default Alert;
