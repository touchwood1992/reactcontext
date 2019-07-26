import React, { useState, useContext } from 'react';
import alertContext from '../context/alertContext';
const Search = () => {
	const AlertContext = useContext(alertContext);

	const [ username, setUsername ] = useState('');
	const setValue = (e) => {
		setUsername(e.target.value);
	};
	const searchNow = (e) => {
		e.preventDefault();

		if (username === '') {
			AlertContext.setAlert();
		} else {
			AlertContext.removeAlert();
			console.log('search now');
		}
	};

	return (
		<form onSubmit={searchNow}>
			<div className='form-group'>
				<input
					type='text'
					className='form-control'
					value={username}
					placeholder='Enter Username'
					onChange={setValue}
				/>
			</div>

			<button className='btn btn-secondary center-btn'>Search Now</button>
		</form>
	);
};

export default Search;
