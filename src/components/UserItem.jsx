import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
	return (
		<div className='col-md-2 user_item_container'>
			<div className='user_item'>
				<div className='user_img'>
					<img src={avatar_url} alt={login} />
				</div>
				<div className='user_login'>
					<Link className='user_detail_link' to={`/userdetails/${login}`}>
						{login}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
