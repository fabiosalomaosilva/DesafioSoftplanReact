import React from 'react';
import { useSelector } from 'react-redux';

export default function Message(props) {
	const user = useSelector((state) => state.user);

	return (
		<>
			<div
				className={
					props.message?.user === user?.email
						? 'list-message-auto text-right'
						: 'list-message-other justify-left'
				}
			>
				<span className="list-message-username">{user?.name}</span>
				<span>{props?.message?.message}</span>
			</div>
			<div className="clear" />
		</>
	);
}
