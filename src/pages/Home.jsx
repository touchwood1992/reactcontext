import React from 'react';
import Search from '../components/Search';
import Alert from '../components/Alert';
import Users from '../components/Users';

const Home = () => {
	return (
		<div className='container'>
			<Alert />
			<Search />
			<Users />
		</div>
	);
};

export default Home;
