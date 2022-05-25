import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

export default function PostMensage(props) {
	const consumer = useSelector((state) => state.selectUserChat);
	const user = useSelector((state) => state.user);
	const inputMessege = useRef(null);

	const onSubmit = (e) => {
		if (e.key === 'Enter' && e.target.value.length > 0) {
			const message = {
				consumer: consumer.Email,
				message: e.target.value,
				user: user.email,
				id: Math.floor(Math.random() * 9999999999999999).toString(),
			};
			props.sendMessage(message);
			inputMessege.current.value = '';
		}
	};

	return (
		<>
			<input
				type="text"
				disabled={consumer === null}
				id="chat-input"
				onKeyDown={(e) => onSubmit(e)}
				placeholder="Digite sua mensagem"
				ref={inputMessege}
			/>
		</>
	);
}
