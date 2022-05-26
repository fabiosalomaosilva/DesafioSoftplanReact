import React, { useState, useEffect } from 'react';

export default function MapDetails(props) {
	const [itens, setItens] = useState([]);

	useEffect(() => {
    delete props.mapDetails[0]
		setItens(props.mapDetails);
	}, [props.mapDetails]);
	return (
		<>
			<h5 className="mt-3">Distância dos 5 países vizinhos mais próximos</h5>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Posição</th>
						<th>País</th>
						<th>Distancia</th>
					</tr>
				</thead>
				<tbody>
					{itens.map((mapDetail, index) => (
						<>
							<tr key={index}>
								<td>{index}</td>
								<td>{mapDetail.name}</td>
								<td>{mapDetail.distance} Kms</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</>
	);
}
