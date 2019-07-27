import React, { useContext, useEffect, useRef } from 'react';
import Search from '../components/Search';
import Alert from '../components/Alert';
import Users from '../components/Users';
import GithubContext from '../context/GithubContext';
const Home = () => {
	const githubContext = useContext(GithubContext);

	useEffect(() => {
		githubContext.getAllusers();
		console.log('component did mount');
		return () => console.log('component will unmount');
	}, []);

	return (
		<div className='container'>
			<Alert />
			<Search />
			<Users />
		</div>
	);
};

export default Home;
