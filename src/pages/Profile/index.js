import React from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './../../store/actions';
import { editUser } from './../../services/usersService';


export default function Profile() {
  const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const changeState = async (e) => {
    const name = e.target.value;
    const newUser = { ...user, name };
    console.log(newUser);
		dispatch(setUser(newUser));
  }

	const saveUser = async () => {
		console.log(user);
		dispatch(editUser(user));
	}

	return (
		<Container
			style={{
				backgroundColor: '#f4f4f4',
				padding: '30px',
				marginTop: '20px',
				borderRadius: '10px',
			}}
		>
			<Row>
			<Col md="12">
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						height: '40px',
						color: '#',
						padding: 0,
						marginBottom: '20px',
					}}
				>
					<img
						src={user?.image}
						alt="Logo"
						className="logo-header header-user-picture ml-10"
					/>
					<span style={{ fontSize: '2rem', marginTop: '-7px', marginLeft: '15px', marginTop: '3px' }}>
						{user.name}
					</span>
				</div>
				<Row className="mb-3">
					<Form.Group as={Col} md="12" controlId="validationCustom01">
						<Form.Label>Nome</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Nome completo"
							value={user.name}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
				<Form.Group as={Col} md="12" controlId="validationCustom01">
						<Form.Label>E-mail</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="E-mail"
							value={user.email}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>
				</Row>


				<Row className="mb-3">
					<Form.Group as={Col} md="10" controlId="validationCustom01">
						<Form.Label>Logradouro</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Logradouro"
							value={user.street}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="2" controlId="validationCustom01">
						<Form.Label>Número</Form.Label>
						<Form.Control
							type="text"
							placeholder="Número"
							value={user.number}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Bairro</Form.Label>
						<Form.Control
							type="text"
							placeholder="Bairro"
							value={user.district}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Complemento</Form.Label>
						<Form.Control
							type="text"
							placeholder="Complemento"
							value={user.complement}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>CEP</Form.Label>
						<Form.Control
							type="text"
							placeholder="CEP"
							value={user.cep}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Label>Estado</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Estado"
							value={user.state}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="6" controlId="validationCustom01">
						<Form.Label>Município</Form.Label>
						<Form.Control
							type="text"
							placeholder="Município"
							value={user.city}
							onChange={changeState}
							onBlur={saveUser}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>
				</Row>

				</Col>
			</Row>
		</Container>
		
	);
}
