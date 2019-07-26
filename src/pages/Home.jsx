import React, { useContext } from 'react';
import Search from '../components/Search';
import Alert from '../components/Alert';
import alertContext from '../context/alertContext';
const Home = () => {
	const AlertContext = useContext(alertContext);
	return (
		<div className='container'>
			{AlertContext.isAlert && (
				<div className='alert_container'>
					<Alert />
				</div>
			)}

			<div className='search_container'>
				<Search />
			</div>
		</div>
	);
};

export default Home;
