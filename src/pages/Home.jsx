import React from 'react';
import Search from '../components/Search';
import Alert from '../components/Alert';

const Home = () => {
	return (
		<div className='container'>
			<div className='alert_container'>
				<Alert />
			</div>

			<div className='search_container'>
				<Search />
			</div>
		</div>
	);
};

export default Home;
