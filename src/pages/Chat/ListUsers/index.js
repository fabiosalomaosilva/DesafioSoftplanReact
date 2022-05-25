import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserChat } from '../../../store/actions';

export default function ListUsers() {
	const user = useSelector((state) => state.user);
	const users = useSelector((state) => state.usersLogged);
	const dispatch = useDispatch();

const handleSelectConsumer = (userlist) => {
	dispatch(setUserChat(userlist));
}
	return (
		<>
			<div className="box-chat-users">
				<div className="text-center">
					<div>
						<img
							src={user?.image}
							alt="Logo"
							className="logo-header header-user-picture ml-10"
						/>
					</div>
					<span className="subtitle">
						{user?.firstName} {user?.lastName}
					</span>
				</div>
				<br />
				{users?.length > 0 &&
					users?.map((userlist) => (
						<span
						className="box-chat-user" 
						key={(Math.random() * 99999).toString()} 
						onClick={() => handleSelectConsumer(userlist)}
						>
							{userlist?.FirstName} {userlist?.LastName}
						</span>
					))}
			</div>
		</>
	);
}
