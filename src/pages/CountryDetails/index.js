import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import { getInfoContries, getInfoRegions } from './../../services/countriesService';

export default function CountryDetails() {
	const { code } = useParams();
	const [country, setCountry] = useState(null);

	const selectCountry = async () => {
		const cout = await getInfoContries(code);
		setCountry(cout);
		await getInfoRegions(code);
	};

	useEffect(() => {
		selectCountry();
		
	}, []);

	return (
		<>
			<div className="box-country-container">
				<div className="box-country-details">
					<img
						src={`https://countryflagsapi.com/png/${code}`}
						alt={code}
						className="box-country-details-flag"
					/>
					<span className="text-country-details-name">{country?.name}</span>
					<span className="text-country-details-text">
						Capital: {country?.capital}
					</span>
					<span className="text-country-details-text">
						Área: {country?.area} km2
					</span>
					<span className="text-country-details-text">
						População: {country?.population}
					</span>
					<span className="text-country-details-text">
						Região: {country?.region}
					</span>
					<span className="text-country-details-text">
						Sub região: {country?.subregion}
					</span>
					<span className="text-country-details-text">
						Língua: {country?.languages.name}
					</span>
					<span className="text-country-details-text">
						Moeda: {country?.currencies ? country?.currencies[0].name : ''}
					</span>
					<span className="text-country-details-text">
						Top-level-domain: {country?.topLevelDomain[0]}
					</span>
					<Link to="/dashboard/countries" className="button-country-details">
						Voltar
					</Link>
				</div>
				<div className="box-country-map">
					{country && (
						<Map
							name={country?.name}
							code={code}
							area={country?.area}
							lat={country?.latlng[0]}
							lng={country?.latlng[1]}
						/>
					)}
				</div>
			</div>
		</>
	);
}
