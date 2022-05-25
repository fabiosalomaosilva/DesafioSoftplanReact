import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Message from './Message';
import PostMensage from './../PostMensage/index';
import { useSelector } from 'react-redux';

const ListMensages = (props) => {
	const consumer = useSelector((state) => state.selectUserChat);
	const user = useSelector((state) => state.user);

	let messagesEndRef = useRef(null);

	const chat = props.messages.map((m) => {
		if (user.email === m.consumer || m.user === user.email) {
			return <Message message={m} key={m.id} />;
		}
	});

	const handleSendMessage = (message) => {
		props.sendMessage(message);
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [props.messages]);

	return (
		<>
			<Container className="p-0">
				<Row style={{ margin: '0' }}>
					<div className="list-messages-title mt-2 pt-1">
						{consumer && (
							<>
								<img
									src={consumer?.Image}
									alt="Logo"
									className="logo-header header-user-picture mt-2 mr-2"
								/>
								<span className="mt-2 ml-20">{consumer?.Name}</span>
							</>
						)}
					</div>
				</Row>
				<Row>
					<div
						className="list-messages m-0 mt-2 pt-3"
						style={{ marginTop: '20px', marginLeft: '0px', marginRight: '0px' }}
					>
						{
							<Col>
								<div>{chat}</div>
								<div ref={messagesEndRef} />
							</Col>
						}
					</div>
				</Row>
				<Row>
					<PostMensage sendMessage={handleSendMessage} />
				</Row>
			</Container>
		</>
	);
};

export default ListMensages;
