import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaPaperPlane } from 'react-icons/fa';
import {
	Container,
	Row,
	InputGroup,
	FormControl,
	Button,
} from 'react-bootstrap';

export default function PostMensage(props) {
	const consumer = useSelector((state) => state.selectUserChat);
	const user = useSelector((state) => state.user);
	const inputMessege = useRef(null);

	const onKeySubmit = (e) => {
		if (e.key === 'Enter' && inputMessege.current.value.length > 0) {
			const message = {
				consumer: consumer.Email,
				message: inputMessege.current.value,
				user: user.email,
				id: Math.floor(Math.random() * 9999999999999999).toString(),
			};
			props.sendMessage(message);
			inputMessege.current.value = '';
		}
	};

	const onSubmit = (e) => {
		if (inputMessege.current.value.length > 0) {
			const message = {
				consumer: consumer.Email,
				message: inputMessege.current.value,
				user: user.email,
				id: Math.floor(Math.random() * 9999999999999999).toString(),
			};
			props.sendMessage(message);
			inputMessege.current.value = '';
		}
	};

	return (
		<>
		<faSend style={{ color: '#c3c', fontSize: '30px' }} />
			<Container>
				<Row>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Mensagem"
							aria-label="Digite sua mensagem"
							aria-describedby="basic-addon2"
							size="lg"
							ref={inputMessege}
							onKeyPress={onKeySubmit}
							disabled={!consumer}
							style={{
								borderRadius: '30px',
								marginInline: '-13px',
								marginRight: '-50px',
								marginTop: '10px',
							}}
						/>
						<Button
							disabled={!consumer}
							onClick={onSubmit}
							style={{
								borderRadius: '50%',
								width: '50px',
								height: '50px',
								backgroundColor: '#008080',
								marginTop: '10px',
								marginRight: '-20px',
								color: 'white',
								paddingLeft: '7px',
								paddingBottom: '10px',
								zIndex: '1000',
							}}
							variant="light"
							id="button-addon1"
						>
							<FaPaperPlane style={{ fontSize: '22px'}} />
						</Button>
					</InputGroup>
				</Row>
			</Container>
		</>
	);
}
