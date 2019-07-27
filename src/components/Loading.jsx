import React, { useContext } from 'react';
import loading from '../loading.gif';
import GithubContext from '../context/GithubContext';
const Loading = () => {
	const githubContext = useContext(GithubContext);
	return (
		githubContext.isLoading && (
			<div className='loading text-center'>
				<img src={loading} alt='Loading....' />
			</div>
		)
	);
};
export default Loading;
