import React, { useState, useEffect } from 'react';
import { FaMapMarked } from 'react-icons/fa';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import {
	getAditionalInfoContries,
	addAditionalInfoContries,
} from '../../services/apiCustomCountryService';

export default function EditCountry() {
	const [validated, setValidated] = useState(false);
	const [countries, setCountries] = useState();
	const [name, setName] = useState();
	const [area, setArea] = useState();
	const [code, setCode] = useState();
	const [capital, setCapital] = useState();
	const [population, setPopulation] = useState();
	const [demographicDensity, setDemographicDensity] = useState();

	const getCustomCountries = async () => {
		const list = await getAditionalInfoContries();
		return setCountries(list);
	};

	const handleSubmit = async () => {
		if (name !== '' && code !== '' && capital !== '') {
			const country = {
				name,
				code,
				capital,
				area: parseInt(area),
				population: parseInt(population),
				demographicDensity: parseInt(demographicDensity),
			};
			await addAditionalInfoContries(country);
			await getCustomCountries();
			setName('');
			setCode('');
			setCapital('');
			setArea('');
			setPopulation('');
			setDemographicDensity('');	
			
		}
	};

	useEffect(() => {
		getCustomCountries();
	}, []);

	useEffect(() => {
		setDemographicDensity(Math.abs(population / area).toFixed(4));
	}, [area, population]);

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
						marginBottom: '10px',
					}}
				>
					<FaMapMarked style={{ fontSize: '2rem', marginRight: '10px' }} />
					<span style={{ fontSize: '2rem', marginTop: '-7px' }}>
						Cadastro de países
					</span>
				</div>
				<Row className="mb-3">
					<Form.Group as={Col} md="12" controlId="validationCustom01">
						<Form.Label>Nome do país</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Nome do país"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Código do país</Form.Label>
						<Form.Control
							required
							maxLength={2}
							type="text"
							placeholder="ex: 'BR'"
							onChange={(e) => setCode(e.target.value.toUpperCase())}
							value={code}
						/>
						<Form.Control.Feedback>Ok!</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="8" controlId="validationCustom01">
						<Form.Label>Capital</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Capital"
							onChange={(e) => setCapital(e.target.value)}
							value={capital}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Área</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Área"
							onChange={(e) => setArea(e.target.value)}
							value={area}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>População</Form.Label>
						<Form.Control
							type="number"
							placeholder="População"
							onChange={(e) => setPopulation(e.target.value)}
							value={population}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Densidade demográfica</Form.Label>
						<Form.Control
							type="number"
							disabled={true}
							placeholder="Densidade demográfica"
							value={demographicDensity}
						/>
						<Form.Control.Feedback>Ok</Form.Control.Feedback>
					</Form.Group>
				</Row>

				<button
					type="button"
					className="btn btn-success"
					style={{ width: '150px', marginTop: '10px' }}
					onClick={handleSubmit}
				>
					Salvar
				</button>
				</Col>
			</Row>

			<Row>
				<Col md="12">
					<hr className="mt-5" />
			<span style={{ fontSize: '2rem', marginTop: '15px', }}>
						Lista de países
					</span>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>UF</th>
						<th>Nome</th>
						<th>Capital</th>
						<th>Área</th>
						<th>População</th>
						<th>Densidade demográfica</th>
					</tr>
				</thead>
				<tbody>
					{countries?.map((item, index) => (
						<>
							<tr key={item.code}>
								<td>{item.code}</td>
								<td>{item.name}</td>
								<td>{item.capital}</td>
								<td>{item.area}</td>
								<td>{item.population}</td>
								<td>{item.demographicDensity}</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
			</Col>
			</Row>
		</Container>
		
	);
}
