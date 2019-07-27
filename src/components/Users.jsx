import React, { useContext, Fragment } from 'react';
import Loading from './Loading';
import UserItem from '../components/UserItem';
import GithubContext from '../context/GithubContext';
const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users } = githubContext;
	return (
		<Fragment>
			<Loading />
			<div className='row user_container'>
				{users.length > 0 && users.map((user, i) => <UserItem user={user} key={i} />)}
			</div>
		</Fragment>
	);
};

export default Users;
