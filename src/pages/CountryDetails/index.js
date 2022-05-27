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
					<span className="text-country-details-name mb-2">{country?.name}</span>
					<span className="text-country-details-text mb-2">
						Capital: {country?.capital}
					</span>
					<span className="text-country-details-text mb-2">
						Área: {country?.area} km2
					</span>
					<span className="text-country-details-text mb-2">
						População: {country?.population}
					</span>
					<span className="text-country-details-text mb-2">
						Densidade demográfica: {(country?.population / country?.area).toFixed(4)}
					</span>
					<span className="text-country-details-text mb-2">
						Região: {country?.region}
					</span>
					<span className="text-country-details-text mb-2">
						Sub região: {country?.subregion}
					</span>
					<span className="text-country-details-text mb-2">
						Língua: {country?.languages.name}
					</span>
					<span className="text-country-details-text mb-2">
						Moeda: {country?.currencies ? country?.currencies[0].name : ''}
					</span>
					<span className="text-country-details-text mb-2">
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
