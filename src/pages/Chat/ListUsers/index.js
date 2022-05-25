import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function ListUsers(props) {
	const user = useSelector((state) => state.user);
	const [users, setUsers] = useState([]);

	useState(() => {
		const userListServer = props.users.filter((u) => {
			return JSON.parse(u.Email !== user.email);
		});
		setUsers(userListServer);
		console.log(userListServer);
	}, [props]);

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
					users?.map((user) => (
						<div className="box-chat-user">
							{user?.FirstName} {user?.LastName}
						</div>
					))}
			</div>
		</>
	);
}
