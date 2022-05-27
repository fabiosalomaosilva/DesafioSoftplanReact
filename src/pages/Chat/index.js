import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ListUsers from './ListUsers/index';
import ListMensages from './ListMensages/index';
import { connect } from 'react-redux';
import { setUsersLogged } from '../../store/actions';

const Chat = ({user, dispatch}) => {
	const [connection, setConnection] = useState(null);
	const [messages, setMessages] = useState([]);
	const latestMesseges = useRef(null);

	latestMesseges.current = messages;

	const userPing = async () => {
		if (connection && connection.state === 'Connected') {
			try {
				await connection.send('UserRegister', user);
			} catch (e) {
				console.log(e);
			}
		}
	};

	const sendMessage = async (chatMessage) => {
		if (connection && connection.state === 'Connected') {
			try {
				await connection.send('SendMessage', chatMessage);
			} catch (e) {
				console.log(e);
			}
		}
	};

	const observableUsersOnLine = () => {
		setInterval(() => {
			userPing();
		}, 1000);
	};

	useEffect(() => {
		observableUsersOnLine();
	}, []);

	useEffect(() => {
		const newConnection = new HubConnectionBuilder()
			.withUrl('https://desafiosoftplanapinetcore.azurewebsites.net/hubs/chat')
			.withAutomaticReconnect()
			.build();

		setConnection(newConnection);
	}, []);

	useEffect(() => {
		if (connection) {
			connection
				.start()
				.then((result) => {
					console.log('Connected!');

					connection.on('ReceiveMessage', (chatMessage) => {
							const updatedMessages = [...latestMesseges.current];
							updatedMessages.push(chatMessage);
							setMessages(updatedMessages);
					});

					connection.on('notifyAdmin', (data) => {
						const listString = data.split('||');

						const userListServer = listString.map((u) => {
							return JSON.parse(u);
						});
						const userListForStore = userListServer.filter((u) => {
							return u.Email !== user.email;
						});
						dispatch(setUsersLogged(userListForStore));
					});
				})
				.catch((e) => console.log('Connection failed: ', e));

		}
		observableUsersOnLine();
	}, [connection]);

	return (
		<>
			<Container style={{ padding: '0px' }}>
				<Row>
					<Col md={3}>
						<ListUsers  />
					</Col>
					<Col md={9}>
					<ListMensages messages={messages} sendMessage={sendMessage} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
	consumer: state.selectUserChat,
});

export default connect(mapStateToProps)(Chat);

