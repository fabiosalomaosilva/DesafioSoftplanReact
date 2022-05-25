import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HubConnectionBuilder } from '@microsoft/signalr';

import PostMensage from './PostMensage/index';
import ListUsers from './ListUsers/index';
import ListMensages from './ListMensages/index';
import { useSelector } from 'react-redux';

export default function Chat() {
  const [connection, setConnection] = useState(null);
	const [chat, setChat] = useState([]);
	const [users, setUsers] = useState([]);
	const latestChat = useRef(null);
  const user = useSelector((state) => state.user);

  latestChat.current = chat;

	const userPing = async () => {		
		if (connection && connection.state === 'Connected') {
		try {
				await connection.send('UserRegister', user);
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
		const newConnection = new HubConnectionBuilder()
			.withUrl('https://localhost:5001/hubs/chat')
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

					connection.on('ReceiveMessage', (message) => {
						const updatedChat = [...latestChat.current];
						updatedChat.push(message);

						setChat(updatedChat);
					});

					connection.on('notifyAdmin', (data) => {
            const listString = data.split("||");
            const userListServer = listString.map(user => {
              return JSON.parse(user);
            });
						setUsers(userListServer);
					});
					
				})
				.catch((e) => console.log('Connection failed: ', e));
		}
			observableUsersOnLine();
	}, [connection]);

	const sendMessage = async (user, message) => {
		const chatMessage = {
			user: user,
			message: message,
		};

		if (connection._connectionStarted) {
			try {
				await connection.send('SendMessage', chatMessage);
			} catch (e) {
				console.log(e);
			}
		} else {
			alert('Servidor desconectado.');
		}
	};

	return (
		<>
			<Container style={{ padding: '0px' }}>
				<Row>
        <Col md={3}>
          <ListUsers users={users} />
        </Col>
        <Col md={9}>
          <ListMensages />
        </Col>
				</Row>
        <Row>
          <Col>
            <PostMensage />
          </Col>
        </Row>
			</Container>
		</>
	);
}
