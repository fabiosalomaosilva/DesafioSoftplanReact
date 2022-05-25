import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
	return (
		<>
				<div className="box-card">
					<img
						src={`https://countryflagsapi.com/png/${props.code}`}
						alt={props.code}
						className="box-card-flag"
					/>
					<span className="box-card-name">{props.name}</span>
					<span className="box-card-capital">{props.capital}</span>
				</div>
			
		</>
	);
}
